// Nav Menu
const mobileNavButton = document.getElementById('mobi-menu');
const mobileNav = document.getElementById('menu-modal');
const closeModalButton = document.getElementById('close-modal');
const body = document.querySelector('body');
const navList = document.querySelector('#nav-list');

mobileNavButton.onclick = () => {
  body.style.overflow = 'hidden';
  mobileNav.style.display = 'block';
};

closeModalButton.onclick = () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'auto';
};

navList.onclick = () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'auto';
};

/**
 * Contact Form Validation
 */

const form = document.getElementById('form-1');
const errorMsg = document.getElementById('error');

form.onsubmit = (e) => {
  const email = document.getElementById('email').value;

  if (email !== email.toLowerCase()) {
    e.preventDefault();
    errorMsg.style.display = 'block';
    return false;
  }

  errorMsg.style.display = 'none';
  return true;
};
