
function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('.header');
    const features = document.querySelector('.features');
    const faq = document.querySelector('.faq');
    const footer = document.querySelector('.footer');
  
  
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      header.classList.remove('dark-mode');
      features.classList.remove('dark-mode');
      faq.classList.remove('dark-mode');
      footer.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'light');
    } else {
      body.classList.add('dark-mode');
      header.classList.add('dark-mode');
      features.classList.add('dark-mode');
      faq.classList.add('dark-mode');
      footer.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'dark');
    }
  }
  
 
  if (localStorage.getItem('darkMode') === 'dark') {
    toggleDarkMode();
  }
  
 
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  
function onloadPage() {
  document.getElementById('coupon').style.display = 'flex'; 
  document.querySelector('.header-content').style.opacity = '0.7';
}

function closeCoupon() {
  document.getElementById('coupon').style.display = 'none'; 
  document.querySelector('.header-content').style.opacity = '1';
}

window.onload = onloadPage;
