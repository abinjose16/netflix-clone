
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

// Function to update geolocation information
function updateGeolocationInfo(position) {
  const geolocationInfo = document.getElementById('geolocation-info');
  geolocationInfo.innerHTML = `
    <p>Your current location:</p>
    <p>Latitude: ${position.coords.latitude}</p>
    <p>Longitude: ${position.coords.longitude}</p>
  `;
}

// Function to handle geolocation errors
function handleGeolocationError(error) {
  const geolocationInfo = document.getElementById('geolocation-info');
  geolocationInfo.innerHTML = `<p>Error getting geolocation: ${error.message}</p>`;
}


if ('geolocation' in navigator) {
 navigator.geolocation.getCurrentPosition(updateGeolocationInfo, handleGeolocationError);
} else {
  const geolocationInfo = document.getElementById('geolocation-info');
  geolocationInfo.innerHTML = '<p>Geolocation is not supported in your browser.</p>';
}


window.onload = onloadPage;
