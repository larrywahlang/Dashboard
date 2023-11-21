const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//display sidemenu
menuBtn.addEventListener('click', ()=>{
    // sideMenu.style.display="block";
    sideMenu.style.left="0";
})

//close sidemenu
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.left="-100%";
})

//theme-toggler
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    //toggle active class
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})