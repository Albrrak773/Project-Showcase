const tpl = document.getElementById('card-tpl');
const parent = document.getElementById('card-container');
const loadingScreen = document.getElementById("loading-screen");
const cs_parent = document.getElementById("CS-card-container");  
const it_parent = document.getElementById("IT-card-container");
const coe_parent = document.getElementById('COE-card-container');


let projects_list = [];
let cs_projects_list = [];
let it_projects_list = [];
let coe_projects_list= [];

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#vote-banner svg')?.addEventListener('click', () => {
    document.getElementById('vote-banner')?.remove();
    document.body.style.paddingTop = '0px'; // remove the top space if needed
  });
  document.body.classList.add('loaded');
});

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


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
      
  });
}, {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 0.2
});


const sizes = {
  mobile:  { '1x': 288,  '2x': 576 },
  desktop: { '1x': 486,  '2x': 972 }
};

const folders = {
  mobile:  { '1x': 'MobileImages1x',  '2x': 'MobileImages2x' },
  desktop: { '1x': 'DesktopImages1x', '2x': 'DesktopImages2x' }
};


function loadNextBatch(projects, target_parent) {
  projects.forEach( (p, index) => { 
 
    const card = tpl.content.cloneNode(true);

    card.querySelector('#card-title').textContent = p["Project Title"];
    card.querySelector('#card-dept').textContent = p["Department"];

    const tags = Array.isArray(p["Project Field"]) ? p["Project Field"] : [];
    const tagBox = card.querySelector('#card-tags');
    tags.forEach(tag => tagBox.insertAdjacentHTML(
      'beforeend',
      `<span class="bg-black/90 text-white text-xs font-semibold px-2 py-0.5 rounded">${tag}</span>`
    ));

    const picture = card.querySelector('#card-picture');
    const img = picture.querySelector('#card-image');

    const source = document.createElement('source');
    source.type = 'image/webp';
    source.sizes = '(max-width: 640px) 80vw, 20vw';
    source.srcset = Object.entries(sizes)
      .flatMap(([type, ds]) =>
        Object.entries(ds).map(([dpr, w]) =>
          `/assets/${folders[type][dpr]}/${p.ID}-${type}-${dpr}.webp ${w}w`
        )
      )
      .join(', ');

      img.dataset.src = `/assets/DesktopImages1x/${p.ID}-desktop-1x.webp`;
      picture.insertBefore(source, img);
      observer.observe(img);

    const card_element = card.querySelector('.border');
    card_element.classList.add('flex-none', 'w-1/5', 'snap-start', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'h-[33rem]', 'bg-[#987D7C]', 'cursor-pointer', 'transform', 'transition', 'duration-200', 'ease-out', 'hover:scale-105', 'w-4/5', 'sm:w-1/5');
    
    card_element.addEventListener('click', () => {
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = `project.html?id=${p.ID}&from=home`;
      }, 400);
    });
    
    target_parent.appendChild(card);
  })
  
}


load_projects('projects.json').then(projects => {
  if (projects) {
    projects_list = projects;
    cs_projects_list = projects_list.filter(p => p['Department']?.trim().toLowerCase() === "computer science");
    it_projects_list = projects_list.filter(p => p['Department']?.trim().toLowerCase() === "information technology");
    coe_projects_list = projects_list.filter(p => p['Department']?.trim().toLowerCase() === "computer engineering"); 

    loadNextBatch(cs_projects_list, cs_parent);
    loadNextBatch(coe_projects_list, coe_parent);
    loadNextBatch(it_projects_list, it_parent);
    
  }
  document.getElementById("loading-screen").classList.add("hidden");
});


document.querySelectorAll('.prev-btn, .next-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const carousel = btn.closest('section').querySelector('.carousel');

    const card = carousel.querySelector('.border');
    const gap = parseInt(getComputedStyle(carousel).gap) || 0;
    const distance = card.offsetWidth + gap;

    const direction = btn.classList.contains('next-btn') ? 1 : -1;

    carousel.scrollBy({
      left: distance * direction, behavior: 'smooth'
    });
  })
})