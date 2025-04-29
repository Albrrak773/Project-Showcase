const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

document.getElementById("loading-screen").classList.remove("hidden");

fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    // const project = projects.find(p => p.ID === projectId);
    const project = projects.find(p => p.ID === Number(projectId));

    if (!project) return;

    // const rawDate = (project["Start time"] || "").replace(/\u2011/g, "-");
    // make the date for now 2025

    const year = "2025";


    const container = document.getElementById("project-detail");

        
    container.innerHTML = `
    <!-- Back to Home -->
    <a id="back-home-btn" class="inline-flex w-full items-center gap-3 text-lg text-blue-600 hover:text-blue-800 mb-6 cursor-pointer">
    <span class="w-10 h-10 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 transition">
      ←
    </span>
    <span id="back-btn-label" class="font-semibold">Back</span>
  </a>



      <!-- Title -->
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800">${project["Project Title"]}</h1>

      <!-- Year -->
        <p class="text-sm text-gray-500 mt-6">Year: ${year}</p>

      <!-- Poster -->
      <img src="${project["Project Poster"]}" alt="Project Poster"
           class="w-full max-w-md mt-4 rounded-lg shadow-md" />

    <!-- Department + Project Fields in one row -->
    <div class="mt-6 w-full flex  md:flex-row justify-around gap-4 items-start text-center">

    <!-- Department -->
    <div class="md:w-1/2">
        <h2 class="font-semibold text-lg">Department</h2>
        <p class="text-gray-700">${project.Department}</p>
    </div>

    <!-- Project Field -->
    <div class="md:w-1/2">
        <h2 class="font-semibold text-lg">Project Fields</h2>
        <div class="flex flex-wrap justify-center gap-2 mt-1">
        ${(Array.isArray(project["Project Field"]) 
            ? project["Project Field"] 
            : (project["Project Field"] || "").split(',').map(t => t.trim())
        ).map(tag => `
            <span class="px-3 py-1 text-sm bg-black/80 text-white rounded-full">${tag}</span>
        `).join('')}
        </div>
    </div>

    </div>


      <!-- Description -->
      <div class="mt-24">
        <h2 class="font-semibold text-lg">Description</h2>
        <p class="text-gray-800 leading-relaxed">${project["Full Project Description"]}</p>
      </div>

      <!-- Students -->
        <div class="mt-32 w-full text-left">
        <h2 class="font-semibold  text-lg">Team Members</h2>
        <ul class="list-disc list-inside text-gray-700 font-bold">
            ${project["Students Names with IDs"].map(s => `<li>${s.name} (${s.id})</li>`).join('')}
        </ul>
        </div>


      <!-- Supervisor -->
      <div class="mt-12 w-full text-left">
        <h2 class="font-semibold text-lg ">Supervisor</h2>
        <p class="font-bold">${project["Supervisor Name"]}</p>
      </div>

     <!-- Contact -->
        <div class="mt-24 w-full text-left">
        <h2 class="font-semibold text-lg">Contact</h2>
        ${project["Contact Methods"] && (
          project["Contact Methods"].email ||
          project["Contact Methods"].phone ||
          project["Contact Methods"].linkedin
        ) ? `
          <p>Email: <a href="mailto:${project["Contact Methods"].email}" class="text-blue-600 underline">${project["Contact Methods"].email}</a></p>
          <p>Phone: ${project["Contact Methods"].phone}</p>
          <p>LinkedIn: <a href="${project["Contact Methods"].linkedin}" target="_blank" class="text-blue-600 underline">View Profile</a></p>
        ` : `
          <p class="text-gray-500 italic">Contact info not available.</p>
        `}
        


      <!-- Additional Images -->
      <div class="mt-24">
        <h2 class="font-semibold text-lg">Additional Images</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        ${Array.isArray(project["Additional Project Images"]) && project["Additional Project Images"].length > 0
          ? `
          <div class="mt-24">
            <h2 class="font-semibold text-lg">Additional Images</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              ${project["Additional Project Images"].map(img => `
                <img src="${img}" class="rounded-lg shadow object-cover w-full" alt="Project image">
              `).join('')}
            </div>
          </div>`
          : ''
        }        
        </div>
      </div>
    `;
    document.getElementById("loading-screen").classList.add("hidden");

    // Filter out the current project and pick 4 random others
    const otherProjects = projects
  .filter(p => p.ID !== projectId)
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);


    // Add "Browse Other Projects" section
    container.innerHTML += `
    <div class="mt-20 w-full">
    <h2 class="text-2xl font-bold mb-6 text-center">Browse Other Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        ${otherProjects.map(p => `
        <div onclick="window.location.href='project.html?id=${p.ID}'"
            class="cursor-pointer border rounded-lg shadow bg-white p-4 hover:shadow-md transition">
            <img src="${p["Project Poster"]}" alt="Poster" class="w-full h-40 object-cover rounded mb-3" />
            <h3 class="font-semibold text-lg text-gray-800">${p["Project Title"]}</h3>
            <p class="text-sm text-gray-600">${p.Department}</p>
        </div>
        `).join('')}
    </div>
    <div class="mt-6 text-center">
        <a href="index.html" class="inline-block px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded shadow">
        Show More Projects
        </a>
    </div>
    </div>
    `;

    setTimeout(() => {
      const backBtn = document.getElementById("back-home-btn");
      const backLabel = document.getElementById("back-btn-label");
      const from = params.get("from") || "home";
    
      if (backLabel) {
        backLabel.textContent = from === "search" ? "Search Page" : "Main Page";
      }
    
      if (backBtn) {
        backBtn.addEventListener("click", () => {
          const loading = document.getElementById("loading-screen");
    
          loading.classList.remove("hidden");
          document.body.classList.add("fade-out");
    
          setTimeout(() => {
            window.location.href = from === "search" ? "search.html" : "index.html";
          }, 400);
        });
      }
    }, 50);
        

  });
