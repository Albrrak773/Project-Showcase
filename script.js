const cards_container = document.getElementById("cards-container");
const tpl = document.getElementById('card-tpl');
const parent = document.getElementById('card-container');

load_projects('projects.json').then(projects => {
    console.log(projects);
    for (let i = 0; i < 7; i++) {
    add_projects_html(projects)
    }
  });

function add_projects_html(projects) {
    projects.forEach(p => {
        const card = tpl.content.cloneNode(true);

        /* fill title + section -------------------------------------------------- */
        card.querySelector('#card-title').textContent = p["Project Title"];
        card.querySelector('#card-dept').textContent = p["Department"];

        /* robust tag handling --------------------------------------------------- */
        const raw = p["Project Field"] ?? "";                       // may be array or string
        const tags = Array.isArray(raw)
            ? raw
            : raw.split(',').map(t => t.trim()).filter(Boolean);

        const tagBox = card.querySelector('#card-tags');
        tags.forEach(tag => tagBox.insertAdjacentHTML(
            'beforeend',
            `<span class="bg-black/90 text-white text-xs font-semibold px-2 py-0.5 rounded">${tag}</span>`
        ));

        /* poster image ---------------------------------------------------------- */
        const img = card.querySelector('#card-image');
        img.src = p["Project Poster"];
        img.alt = p["Project Title"];

        card.querySelector('.border').addEventListener('click', () => {
            window.location.href = `project.html?id=${p.ID}`;
        });

        parent.appendChild(card);                                     // add to page
    });
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