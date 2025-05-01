const tpl = document.getElementById('card-tpl');
const parent = document.getElementById('card-container');
const batch_size = 12;
let current_index = 0;

let filter = {
    male: false,
    female: false,
    cs: false,
    it: false,
    coe: false
  };

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#vote-banner svg')?.addEventListener('click', () => {
        document.getElementById('vote-banner')?.remove();
        document.body.style.paddingTop = '0px'; // remove the top space if needed
      });
    document.body.classList.add('loaded')
});

const btns = document.querySelectorAll('.filter-button');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
    btn.classList.toggle('bg-white');
    btn.classList.toggle('text-[#8E8E8E]');
    btn.classList.toggle('bg-[#571CBD]');
    btn.classList.toggle('text-white');
        
    const key = btn.dataset.filter.trim().toLowerCase();
    filter[key] = !filter[key];

    filter_projects();

    });
});



async function fetch_data(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response) {
            throw new Error('Faild to fetch data');
        }
        const data = await response.json();
        return data
    }
    catch (error) {
        console.error('Error fetching data')
        return null;
    }
}


const img_observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img)
        }
    })
});


function display_cards() {
    const slice = filtered_projects.slice(current_index, current_index + batch_size);

    slice.forEach(p => {
        const card = tpl.content.cloneNode(true);

        card.querySelector('#card-title').textContent = p['Project Title'];
        card.querySelector('#card-dept').textContent = p['Department'];
        
        const tags = p['Project Field'];
        const tag_box = card.querySelector('#card-tags');

        tags.forEach(tag => {
            tag_box.insertAdjacentHTML('beforeend', `<span class="bg-black/90 text-white text-xs font-semibold px-2 py-0.5 rounded">${tag}</span>`)
        });

        const img = card.querySelector('#card-image');
        img.alt = p["Project Title"];
        img.src = p["Project Poster"];
        img.loading = 'lazy';


        const card_element = card.querySelector('.border');
        card_element.classList.add(
            'flex-none',
            'rounded-lg',
            'shadow-md',
            'overflow-hidden',
            'h-[33rem]',
            'bg-[#987D7C]',
            'cursor-pointer',
            'transform',
            'transition',
            'duration-200',
            'ease-out',
            'hover:scale-105',
            'w-4/5',
            'sm:w-1/5'
            );
            
            card_element.addEventListener('click', (e) => {
            e.preventDefault(); 
            document.body.classList.add('fade-out');
        
            setTimeout(() => {
                window.location.href = `project.html?id=${p.ID}&from=search`;
            }, 400); 
        });

        parent.appendChild(card);

        const newCard = parent.lastElementChild;
        newCard.classList.add('fade-in');
        void newCard.offsetWidth;
        setTimeout(() => {
        newCard.classList.add('show');
        }, 50)
    })

    current_index += batch_size;

    const btn = document.getElementById('load-more');
    if (current_index >= filtered_projects.length) {
        btn.classList.add('hidden');
    } else {
        btn.classList.remove('hidden');
    }
}



let query;
document.getElementById('search-box').addEventListener('input', input => {
    query = input.target.value.trim().toLowerCase();
    filter_projects();
});


let projects_list = [];
let filtered_projects = [];


fetch_data('projects.json').then(projects => {
    if (projects) {
        projects_list = projects;
        filter_projects();
    }
});  


function filter_projects() {
    filtered_projects = projects_list.filter(p => {
        is_btn_active = Object.values(filter).some(v => v === true);

        if (!is_btn_active && !query) return true;

        const section = ((!filter.male && !filter.female) ||
          (filter.female && p['Section'] === 'طالبات') ||
           (filter.male && p['Section'] === 'طلاب'));

        const department = ((!filter.cs && !filter.it && !filter.coe) ||
         (filter.cs && p['Department'] === 'Computer Science') ||
          (filter.it && p['Department'] === 'Information Technology') ||
           (filter.coe && p['Department'] === 'Computer Engineering'));

        const search = !query ||
         p['Students Names with IDs'].some(s => s['id']?.includes(query) ||
         s['name']?.toLowerCase().includes(query) ) ||
          p['Project Title']?.toLowerCase().includes(query);

          return section && department && search;
    })
    
    const no_result = document.getElementById('no-results-container');
    const loadMore_btn = document.getElementById('load-more');
    parent.innerHTML = '';
    current_index = 0;

    if (filtered_projects.length > 0) {
            display_cards();
            no_result.classList.add('hidden');

            if (filtered_projects.length > batch_size) {
                loadMore_btn.classList.remove('hidden');
            } else {
                loadMore_btn.classList.add('hidden');
            }

        }
        else {
            no_result.classList.remove('hidden');
            loadMore_btn.classList.add('hidden');
        }
}

document.getElementById('load-more').addEventListener('click', () => {
    display_cards();
});