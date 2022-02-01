const bgs = [
  'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1522069365959-25716fb5001a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  'https://images.unsplash.com/photo-1484347215856-c53907f6a37b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80',
  'https://images.unsplash.com/photo-1525095240410-9645dea911e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
];

const rndInt = Math.floor(Math.random() * bgs.length) + 1;
const bg = bgs[rndInt - 1]


const currentYear = new Date().getFullYear();
const copyright = document.querySelector('.copyright');
copyright.innerHTML = `© ${currentYear} Gheorghe Tarcea`

// let bg1;
// fetch('https://parallax-api-gt.herokuapp.com/', {
//   mode: 'cors',
//   credentials: 'same-origin'
// })
//   .then(response => response.json())
//   .then(data => bg1 = data.bg);

const myStyle = document.querySelector('style');
myStyle.innerText = `.bg::after {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg}) no-repeat center;
  background-size: cover;
}`;