
const text = document.getElementById("typingText");

const textLoad = ()=> {
    setTimeout(() => {
        text.textContent = "UI/UX Designing";
    },0);
    setTimeout(() => {
        text.textContent = "Web Development";
    },4000);
    setTimeout(() => {
        text.textContent = "Android Development";
    },8000);
    setTimeout(() => {
        text.textContent = "Fullstack Development";
    },12000);
}
textLoad();
setInterval(textLoad, 16000);