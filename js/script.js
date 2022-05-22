const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const projectsContainer = document.getElementById('prj-container');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

const currentYear = new Date().getFullYear();
const copyright = document.querySelectorAll('.copyright');
copyright.forEach((element) => {
  element.innerHTML = `© ${currentYear} Gheorghe Tarcea`;
});

const cardTemplate = ``;

fetch('../projects.json')
  .then((response) => {
    return response.json();
  })
  .then((projects) => {
    return projects.forEach((project) => {
      let stack = '';
      project.techStackIcons.forEach((icon) => {
        stack += `<i class="${icon} text-xl text-darkBlue"></i>`;
      });
      console.log(stack);
      projectsContainer.innerHTML += `
      <div
        class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 relative"
      >
        <a href=${project.liveUrl} target="_new">
          <img
            src=${`../img/${project.projectImage}`}
            alt=""
            class="rounded-t-lg object-contain w-72 h-80 mx-auto pt-6"
          />
        </a>
        <div class="p-6 mb-6">
          <h1
            class="md:text-1xl text-l transition duration-200 font-bold text-gray-900 mb-2"
          >
          ${project.title}
          </h1>
          <!-- icons for project stack -->
          <div class="flex flex-row justify-center space-x-4">
          ${stack}
          </div>
          <p class="text-gray-700 my-2 text-xs">
            ${project.description}
          </p>
        </div>
        <!-- icons for project links -->
        <div class="absolute bottom-3 right-3">
          <a href=${project.githubUrl} target="_new"
            ><i
              class="fab fa-github text-2xl text-darkBlue hover:text-brightRed"
            ></i
          ></a>
          <span class="w-1 h-8 px-4"></span>
          <a href=${project.liveUrl} target="_new"
            ><i
              class="fas fa-globe text-2xl text-darkBlue hover:text-brightRed"
            ></i
          ></a>
        </div>
      </div>
      `;
    });
  });
