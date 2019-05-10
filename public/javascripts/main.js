document.addEventListener('DOMContentLoaded', ready);
                         
function ready() {

  //toggle mobile nav
  const menuOpen = document.querySelector('.menu-open');
  const menuClose = document.querySelector('.menu-close');
  const mobileNav = document.querySelector('.mobile-nav');

  menuOpen.addEventListener('click', () => {
    mobileNav.classList.add('open-nav');
    mobileNav.classList.remove('toggle');
    menuOpen.classList.add('toggle');
    menuClose.classList.remove('toggle');
  });

  menuClose.addEventListener('click', () => {
    mobileNav.classList.remove('open-nav');
    mobileNav.classList.add('toggle');
    menuOpen.classList.remove('toggle');
    menuClose.classList.add('toggle');
  });

  mobileNav.addEventListener('click', () => {
    mobileNav.classList.add('toggle');
    menuClose.classList.add('toggle');
    menuOpen.classList.remove('toggle');
  });

  //click on any painting

  let paintings = document.querySelectorAll('img');
  paintings = [...paintings];
  paintings.forEach(function(painting) {
    painting.addEventListener('click', function(ev) {
      const id = ev.target.id;
      fetch('/showpainting', { 
        method: 'GET',
        id: id
      })
      .then(function(res) {
        if (res.ok) {
          return;
        }
        throw new Error('Request failed');
      })
      .catch(function(err) {
        console.log(err);
      })
    });
  });

}
