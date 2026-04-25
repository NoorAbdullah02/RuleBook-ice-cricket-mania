document.addEventListener('DOMContentLoaded', function() {
  const navButtons = document.querySelectorAll('nav button');
  const sections = document.querySelectorAll('main section');

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      
      navButtons.forEach(btn => btn.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));
      
      this.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  if (navButtons.length > 0) {
    navButtons[0].click();
  }
});
