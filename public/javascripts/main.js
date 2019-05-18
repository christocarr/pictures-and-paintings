
document.addEventListener('DOMContentLoaded', ready);
                         
function ready() {
  //fade-in effect
  if (!window.AnimationEvent) { return; }

  const anchors = document.getElementsByTagName('a');

  for (let idx = 0; idx < anchors.length; idx += 1) {
    if (anchors[idx].hostname !== window.location.hostname) {
      continue;
    }

    anchors[idx].addEventListener('click', function(event) {
      const fader = document.getElementById('fader'),
      anchor = event.currentTarget;
      const listener = function() {
          window.location = anchor.href;
          fader.removeEventListener('animationend', listener);
      };
      fader.addEventListener('animationend', listener);
      event.preventDefault();
      fader.classList.add('fade-in');
    });

  }

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

}
