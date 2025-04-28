// const tpl = document.getElementById('card-tpl');
// const parent = document.getElementById('card-container');
// const loadingScreen = document.getElementById("loading-screen");
// const cs_parent = document.getElementById("CS-card-container");  
// const it_parent = document.getElementById("IT-card-container");
// const coe_parent = document.getElementById('COE-card-container');

// let projects_list = [];
// let cs_projects_list = [];
// let it_projects_list = [];
// let coe_projects_list= [];

// show the project with depatement
// function loadNextBatch(projects, target_parent) {
//   projects.forEach( (p, index) => { 
 
//     const card = tpl.content.cloneNode(true);

//     card.querySelector('#card-title').textContent = p["Project Title"];
//     card.querySelector('#card-dept').textContent = p["Department"];

//     const tags = Array.isArray(p["Project Field"]) ? p["Project Field"] : [];
//     const tagBox = card.querySelector('#card-tags');
//     tags.forEach(tag => tagBox.insertAdjacentHTML(
//       'beforeend',
//       `<span class="bg-black/90 text-white text-xs font-semibold px-2 py-0.5 rounded">${tag}</span>`
//     ));

//     const img = card.querySelector('#card-image');
//     img.alt = p["Project Title"];
//     img.style.opacity = '0';
//     img.onload = () => img.style.opacity = '1';
    
//     if (index < 6) {
//       img.src = p['Project Poster'];
//     }
//     else {
//       img.dataset.src = p["Project Poster"];
//       img.loading = 'lazy';
//       image_observer.observe(img);
//     }

//     const card_element = card.querySelector('.border');
//     card_element.classList.add('flex-none', 'w-1/5', 'snap-start', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'h-[33rem]', 'bg-[#987D7C]', 'cursor-pointer', 'transform', 'transition', 'duration-200', 'ease-out', 'hover:scale-105', 'w-4/5', 'sm:w-1/5');
    
//     card_element.addEventListener('click', () => {
//       document.body.classList.add('fade-out');
//       setTimeout(() => {
//         window.location.href = `project.html?id=${p.ID}`;
//       }, 400);
//     });
    
//     target_parent.appendChild(card);
//   })
  
// }




// show the project with depatement
// function filterProjects(query) {
//   const normalized = query.trim().toLowerCase();

//   const filtered = projects_list.filter(p => {
//     const matchTitle = (p["Project Title"] || "").toLowerCase().includes(normalized);
//     const matchName = (p["Name"] || "").toLowerCase().includes(normalized);
//     const matchStudents = (p["Students Names with IDs"] || []).some(s =>
//       (s.name || "").toLowerCase().includes(normalized) ||
//       String(s.id).includes(normalized)
//     );

//     return matchTitle || matchName || matchStudents;
//   });

//   cs_parent.innerHTML = "";
//   it_parent.innerHTML = "";
//   coe_parent.innerHTML = "";

//   if (filtered.length === 0) {
//     document.getElementById("no-results").classList.remove("hidden");
//   } else {
//     document.getElementById("no-results").classList.add("hidden");
//     loadNextBatch(filtered);
//   }
// }



// show the project with depatement
// document.getElementById("search-box").addEventListener("input", (e) => {
//   const query = e.target.value;

//   if (!query.trim()) {
//     document.getElementById("no-results").classList.add("hidden");
//     parent.innerHTML = "";
//     currentIndex = 0;
//     loadNextBatch(projects_list);
//   } else {
//     filterProjects(query);
//   }
// });



// show the project with depatement
// load_projects('projects.json').then(projects => {
//   if (projects) {
//     projects_list = projects;
//     cs_projects_list = projects_list.filter(p => p['Department']?.trim().toLowerCase() === "computer science");
//     it_projects_list = projects_list.filter(p => p['Department']?.trim().toLowerCase() === "information technology");
//     coe_projects_list = projects_list.filter(p => p['Department']?.trim().toLowerCase() === "computer engineering"); 

//     loadNextBatch(cs_projects_list, cs_parent);
//     loadNextBatch(coe_projects_list, coe_parent);
//     loadNextBatch(it_projects_list, it_parent);
    
//   }
//   document.getElementById("loading-screen").classList.add("hidden");
// });



// old code

const cards_container = document.getElementById("cards-container");
const tpl = document.getElementById('card-tpl');
const parent = document.getElementById('card-container');
const loadingScreen = document.getElementById("loading-screen");
let currentIndex = 0;
let batchSize = 10;
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




function urls_to_file_name(urls) {
    Decoded_urls = [];
    for (let i = 0; i < urls.length; i++) {
        const element = urls[i];
        Decoded_url = decodeURIComponent(element)
        console.log("Debugging: ", "the decoded URL: ", Decoded_url.slice(Decoded_url.lastIndexOf('/') + 1));
        Decoded_urls.push(Decoded_url)
    }
    return Decoded_urls;
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


// function filterProjects(query) {
//   const normalized = query.trim().toLowerCase();

//   const filtered = projectList.filter(p => {
//     const matchId = String(p.ID).includes(normalized);
//     const matchTitle = (p["Project Title"] || "").toLowerCase().includes(normalized);
//     const matchName = (p["Name"] || "").toLowerCase().includes(normalized);
//     const matchStudents = (p["Students Names with IDs"] || []).some(s =>
//       (s.name || "").toLowerCase().includes(normalized) ||
//       String(s.id).includes(normalized)
//     );

//     return matchId || matchTitle || matchName || matchStudents;
//   });

//   parent.innerHTML = "";
//   currentIndex = 0;

//   if (filtered.length === 0) {
//     document.getElementById("no-results").classList.remove("hidden");
//   } else {
//     document.getElementById("no-results").classList.add("hidden");
//     loadNextBatch(filtered);
//   }
// }
function filterProjects(query) {
  const normalized = query.trim().toLowerCase();

  const filtered = projectList.filter(p => {
    const matchTitle = (p["Project Title"] || "").toLowerCase().includes(normalized);
    const matchName = (p["Name"] || "").toLowerCase().includes(normalized);
    const matchStudents = (p["Students Names with IDs"] || []).some(s =>
      (s.name || "").toLowerCase().includes(normalized) || String(s.id || "").includes(normalized)
    );

    return matchTitle || matchName || matchStudents;
  });

  parent.innerHTML = "";
  currentIndex = 0;
  batchSize = filtered.length;

  if (filtered.length === 0) {
    document.getElementById("no-results").classList.remove("hidden");
  } else {
    document.getElementById("no-results").classList.add("hidden");
    loadNextBatch(filtered);
  }
}


function filterByDepartment(dept) {
  parent.innerHTML = "";
  currentIndex = 0;

  let filteredProjects = [];

  if (dept === "All") {
    filteredProjects = projectList;
  } else {
    filteredProjects = projectList.filter(p => 
      (p.Department || "").trim().toLowerCase() === dept.trim().toLowerCase()
    );
  }

  batchSize = filteredProjects.length;
  loadNextBatch(filteredProjects);
}


// After projects are loaded:
document.querySelectorAll('.dept-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.dept-btn').forEach(b => {
      b.classList.remove('bg-blue-500', 'text-white');
      b.classList.add('bg-gray-300', 'text-gray-800');
    });

    // Make clicked button active
    btn.classList.remove('bg-gray-300', 'text-gray-800');
    btn.classList.add('bg-blue-500', 'text-white');

    const dept = btn.getAttribute('data-dept');
    filterByDepartment(dept);
  });
});


document.getElementById("search-box").addEventListener("input", (e) => {
  const query = e.target.value;

  if (!query.trim()) {
    document.getElementById("no-results").classList.add("hidden");
    parent.innerHTML = "";
    currentIndex = 0;
    batchSize = projectList.length;
    loadNextBatch(projectList);
  } else {
    filterProjects(query);
  }
});
