const toggleButton = document.querySelector('#toggle-button');
toggleButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.querySelector('body');
    const toggleButton = document.querySelector('#toggle-button');
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  const menuToggle = document.getElementById('menu-toggle');
  const menuItems = document.getElementById('menu-items');
  
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuItems.classList.toggle('active');
  });