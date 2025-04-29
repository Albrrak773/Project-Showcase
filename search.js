const tpl = document.getElementById('card-tpl');
const parent = document.getElementById('card-container');

let filter = {
    male: false,
    female: false,
    cs: false,
    it: false,
    coe: false
  };

document.addEventListener('DOMContentLoaded', () => {
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


function display_cards(projects) {
        projects.forEach(p => {
            const card = tpl.content.cloneNode(true);

            card.querySelector('#card-title').textContent = p['Project Title'];
            card.querySelector('#card-dept').textContent = p['Department'];
            
            const tags = p['Project Field'];
            const tag_box = card.querySelector('#card-tags');

            tags.forEach(tag => {
                tag_box.insertAdjacentHTML('beforeend', `<span class="bg-black/90 text-white text-xs font-semibold px-2 py-0.5 rounded">${tag}</span>`)
            });

            const card_element = card.querySelector('.border');
            card_element.classList.add(
                'flex-none',
                'rounded-lg',
                'shadow-md',
                'overflow-hidden',
                'h-[29rem]',
                'bg-[#987D7C]',
                'cursor-pointer',
                'transform',
                'transition',
                'duration-200',
                'ease-out',
                'hover:scale-105',
                'w-full'
              );    

            card_element.addEventListener('click', () => {
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = `project.html?id=${p.ID}`;
            }, 400);
            });

            parent.appendChild(card);
        })
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
    
    const no_result = document.getElementById('no-results-container')
    parent.innerHTML = '';

    if (filtered_projects.length > 0) {
            display_cards(filtered_projects);
            no_result.classList.add('hidden');
        }
        else {
            no_result.classList.remove('hidden');
        }
}
