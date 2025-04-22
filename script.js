const cards_container = document.getElementById("cards-container");


let projects = [
    {
        "ID": "12345",
        "Start time": "2025‑04‑21T10:00:00",
        "Completion time": "2025‑04‑21T12:00:00",
        "Email": "student@example.com",
        "Name": "Project Team Alpha",
        "Last modified time": "2025‑04‑21T12:30:00",
      
        "Campus": "Main Campus",
        "Section": "Male",
        "Department": "Computer Science",
      
        "Project Title": "AI‑Powered Crop‑Yield Prediction",
        "Student Names with IDs": [
          { "name": "Ahmed Al‑Fahad", "id": "201812345" },
          { "name": "Sara Al‑Saud",  "id": "201866789" }
        ],
        "Supervisor Name": "Dr. Khalid Al‑Mutairi",
        "Full Project Description": "A machine‑learning system that forecasts crop yields from satellite imagery and weather data.",
        "Project Field":[ "Artificial Intelligence", "data analysis"],
      
        "Project Poster": "/assets/G1-Poster_ربا الحربي_page-0001.jpg",
        "Additional Project Images": [
          "https://example.com/images/field‑1.jpg",
          "https://example.com/images/field‑2.jpg"
        ],
        "Project Link": "https://example.com/demo/crop‑yield",
        "Contact Methods": {
          "phone": "+966‑555‑123456",
          "email": "teamalpha@qu.edu.sa",
          "linkedin": "https://www.linkedin.com/in/team‑alpha"
        }
      }
]

const tpl    = document.getElementById('card-tpl');
const parent = document.getElementById('card-container');
for (let i = 0; i < 7; i++) {
    add_projects_html(projects)
}


function add_projects_html(projects){
  projects.forEach(p => {
    const card = tpl.content.cloneNode(true);
  
    /* fill title + section -------------------------------------------------- */
    card.querySelector('#card-title').textContent = p["Project Title"];
    card.querySelector('#card-dept').textContent  = p["Department"];
  
    /* robust tag handling --------------------------------------------------- */
    const raw   = p["Project Field"] ?? "";                       // may be array or string
    const tags  = Array.isArray(raw)
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

function urls_to_file_name(urls){
  Decoded_urls = [];
  for (let i = 0; i  < urls.length; i++) {
    const element = urls[i];
    Decoded_url = decodeURIComponent(element)
    console.log("Debugging: ", "the decoded URL: ",Decoded_url.slice(Decoded_url.lastIndexOf('/') + 1));
    Decoded_urls.push(Decoded_url)
  }
  return Decoded_urls;
}