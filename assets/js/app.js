// SHOW sidebaar menu when user click on menu icon
 let clicked = false;
function showSidebar(toggleId, navbarId) {
    const toggleBtn = document.getElementById(toggleId);
    const nav = document.getElementById(navbarId);
    //const body = document.querySelector('body');
    const body = window.document;
   

    body.addEventListener('click', (e) => {
        console.log('body clicked')
        clicked=true
     }   );
    
     if (clicked) {   
         console.log(clicked)

        nav.classList.remove('show__sidebar');
        // toggleBtn.classList.remove('bx-x');
    }

    // Validate that all variables exist
    if (toggleId && navbarId) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show__sidebar');
            toggleBtn.classList.toggle('bx-x');
        });
    }
}

showSidebar('header__toggle', 'navbar');


// show active link when user click on menu icon
let links = document.querySelectorAll('.navbar__link');

function activeFunc( ) {
    links.forEach(l=> l.classList.remove('active'));
    this.classList.add('active');
}

links.forEach(l=> l.addEventListener('click',activeFunc))





