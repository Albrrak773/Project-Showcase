const cards_container = document.getElementById("cards-container");
const tpl = document.getElementById('card-tpl');
const parent = document.getElementById('card-container');
const loadingScreen = document.getElementById("loading-screen");
let currentIndex = 0;
const batchSize = 10;
let isLoading = false;


window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});


let projectList = [];

load_projects('projects.json').then(projects => {
  if (projects) {
    projectList = projects;
    loadNextBatch(projectList);
  }
  document.getElementById("loading-screen").classList.add("hidden");
});

function loadNextBatch(projects) {
  if (isLoading) return;
  isLoading = true;

  const end = Math.min(currentIndex + batchSize, projects.length);
  for (let i = currentIndex; i < end; i++) {
    const p = projects[i];
    const card = tpl.content.cloneNode(true);

    card.querySelector('#card-title').textContent = p["Project Title"];
    card.querySelector('#card-number').textContent = `[${p["ID"]}]`; // comment this out to remove the number from showing up
    card.querySelector('#card-dept').textContent = p["Department"];

    const tags = Array.isArray(p["Project Field"]) ? p["Project Field"] : [];
    const tagBox = card.querySelector('#card-tags');
    tags.forEach(tag => tagBox.insertAdjacentHTML(
      'beforeend',
      `<span class="bg-black/90 text-white text-xs font-semibold px-2 py-0.5 rounded">${tag}</span>`
    ));

    const img = card.querySelector('#card-image');
    img.alt = p["Project Title"];
    img.style.opacity = '0';
    img.onload = () => img.style.opacity = '1';
    img.src = p["Project Poster"];

    card.querySelector('.border').classList.add('fade-in');
    card.querySelector('.border').addEventListener('click', () => {
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = `project.html?id=${p.ID}`;
      }, 400);
    });

    parent.appendChild(card);
  }

  currentIndex += batchSize;
  isLoading = false;

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

async function load_projects(filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Failed to fetch JSON');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching JSON:', error);
      return null;
    }
  }

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // optional: stop observing after shown
    }
  });
}, {
  threshold: 0.1
});

setTimeout(() => {
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}, 1000); // Delay until all batches are in


window.addEventListener('scroll', () => {
  const scrollBottom = window.innerHeight + window.scrollY;
  const pageBottom = document.body.offsetHeight - 300;

  if (scrollBottom >= pageBottom) {
    loadNextBatch(projectList); // `projectList` must be globally accessible
  }
});

function filterProjects(query) {
  const normalized = query.trim().toLowerCase();

  const filtered = projectList.filter(p => {
    const matchId = String(p.ID).includes(normalized);
    const matchTitle = (p["Project Title"] || "").toLowerCase().includes(normalized);
    const matchName = (p["Name"] || "").toLowerCase().includes(normalized);
    const matchStudents = (p["Students Names with IDs"] || []).some(s =>
      (s.name || "").toLowerCase().includes(normalized) ||
      String(s.id).includes(normalized)
    );

    return matchId || matchTitle || matchName || matchStudents;
  });

  parent.innerHTML = "";
  currentIndex = 0;

  if (filtered.length === 0) {
    document.getElementById("no-results").classList.remove("hidden");
  } else {
    document.getElementById("no-results").classList.add("hidden");
    loadNextBatch(filtered);
  }
}


document.getElementById("search-box").addEventListener("input", (e) => {
  const query = e.target.value;

  if (!query.trim()) {
    document.getElementById("no-results").classList.add("hidden");
    parent.innerHTML = "";
    currentIndex = 0;
    loadNextBatch(projectList);
  } else {
    filterProjects(query);
  }
});
