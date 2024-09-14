let home = document.querySelector(".home");

let sidebar = document.querySelector('.sideBar');

let menubutton = document.querySelector('.menuIcon');

let collapse = document.querySelector('.Collapse')

home.addEventListener('click',()=>{
    alert('You are already at the homepage! bro')
})

menubutton.addEventListener('click', ()=>{
    sidebar.style.display=('block');
})

collapse.addEventListener('click',()=>{
    sidebar.style.display=('none')
})