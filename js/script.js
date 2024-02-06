const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const projectsContainer = document.getElementById('prj-container');
const skillsIcons = document.getElementById('skills-icons');
const mySkills = document.getElementById('my-skills');
const rollingSkills = document.getElementById('rolling-skills');
const avatar = document.getElementById('avatar');
const footerMessage = document.getElementById('footer-message');
const toggleColor = document.getElementById('toggle-color');

const skillsArray = Array.from(skillsIcons.children).map(
  (child) => child.title
);

const messages = [
  ['work', 'hard'],
  ['stay', 'true'],
  ['live', 'life'],
  ['think', 'big'],
  ['keep', 'learning'],
  ['stay', 'inspired'],
  ['travel', 'safe'],
  ['stay', 'strong'],
  ['pay', 'your interns'],
  ['be', 'kind'],
  ['show', 'empathy'],
  ['practice makes', 'perfect'],
  ['did you try turning it off', 'and on again']
];

const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

footerMessage.addEventListener('click', () => {
  const i = generateRandomNumber(messages.length);
  footerMessage.innerHTML = `${messages[i][0]} <span class="text-darkBlue">${messages[i][1]}</span>`;
});

let count = 0;
avatar.addEventListener('click', () => {
  avatar.setAttribute(
    'src',
    `https://picsum.photos/450/450?grayscale&random=${count}`
  );
  count += 1;
});

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

let timeoutId;
skillsIcons.childNodes.forEach((icon) => {
  icon.addEventListener('click', () => {
    rollingSkills.innerHTML = icon.title;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      rollingSkills.innerHTML = 'My Skills';
    }, 2000);
  });
});

const currentYear = new Date().getFullYear();
const copyright = document.querySelectorAll('.copyright');
copyright.forEach((element) => {
  element.innerHTML = `© ${currentYear} Gheorghe Tarcea`;
});

const generateQR = (url, size) => {
  return new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};

const cardTemplate = ``;

fetch('../projects.json')
  .then((response) => {
    return response.json();
  })
  .then((projects) => {
    return projects.forEach((project) => {
      const showLiveIcon = project.liveUrl[1] === 'true';
      let stack = '';
      project.techStackIcons.forEach((icon) => {
        const title = icon.split('-')[1];
        stack += `
        <i class="${icon} text-xl text-darkBlue hover:text-brightRed hover:cursor-crosshair" title=${title}></i>`;
      });

      projectsContainer.innerHTML += `
      <div
        class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 relative"
      >${`
      <a href=${
        showLiveIcon ? project.liveUrl[0] : project.githubUrl
      } target="_new">
          <img
            src=${`../img/${project.projectImage}`}
            alt=""
            class="rounded-t-lg object-contain w-72 h-80 mx-auto pt-6"
          />
        </a>
      `}
        <div class="p-6 mb-6">
          <h1
            class="md:text-1xl text-l transition duration-200 font-bold text-gray-900 mb-2"
          >
          ${project.title}
          </h1>
          <!-- icons for project stack -->
          <div class="flex flex-row justify-center space-x-4" id=${`stack-${project.id}`}>
          ${stack}
          </div>
          <p class="text-gray-700 my-2 text-xs">
            ${project.description}
          </p>
        </div>
        <!-- icons for project links -->
        <div class="absolute bottom-3 right-3">
          <a href=${project.githubUrl} target="_new"
            >
            <i
              class="fa-brands fa-${
                project.repo
              } text-2xl text-darkBlue hover:text-brightRed"
            ></i
          >
          </a>
          <span class="w-1 h-8 px-4"></span>
          ${
            showLiveIcon
              ? `
          <a href=${project.liveUrl[0]} target="_new"
          ><i
            class="fas fa-globe text-2xl text-darkBlue hover:text-brightRed"
          ></i
        ></a>
          `
              : ''
          }
          
        </div>
      </div>
      `;
    });
  });

  // get info based on the client IP

  const parseData = (data) => {
    let r = '';
    const keys = Object.keys(data);
    keys.forEach((key) => {
      r += `
      <li><b>${key}:</b> <em>${JSON.stringify(data[key])}</em></li>
      `;
    });
    return r;
  };

  const clientInfo = document.getElementById('clientInfo');

  fetch('https://api.ipify.org?format=json')
  .then((response) => response.json())
  .then((data) =>
    fetch(`https://wakeful-bronze-beret.glitch.me/?ip=${data.ip}`)
  )
  .then((resp) => resp.json())
  .then((d) => {
  console.log(d.data.emoji_flag)
  clientInfo.innerHTML = `
          ${d.data.emoji_flag}
          `;
  });
