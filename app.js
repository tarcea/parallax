

const myFunction = () => {
  console.log("You scrolled in page");
}

const mainBody = document.querySelector(".root");
console.log(mainBody)
mainBody.onscroll = (() => myFunction());
