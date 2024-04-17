function toggleAboutContent() {
    const aboutContent = document.querySelector('.about-content');
    const showMoreButton = document.querySelector('.show-more-button-about');
    const showLessButton = document.querySelector('.show-less-button-about');

    if (aboutContent.style.display === 'none') {
      aboutContent.style.display = 'block';
      showMoreButton.style.display = 'none';
      showLessButton.style.display = 'inline-block';
    } else {
      aboutContent.style.display = 'none';
      showMoreButton.style.display = 'inline-block';
      showLessButton.style.display = 'none';
    }
  }
  
function toggleRoleContent(roleContentId) {
  const roleContent = document.getElementById(roleContentId);
  const showMoreButton = roleContent.parentElement.querySelector('.show-more-button-exp-item');
  const showLessButton = roleContent.parentElement.querySelector('.show-less-button-exp-item');

  if (roleContent.style.display === 'none' || roleContent.classList.contains('collapsed')) {
      roleContent.style.display = 'block';
      roleContent.classList.remove('collapsed');
      showMoreButton.style.display = 'none';
      showLessButton.style.display = 'inline-block';
  } else {
      roleContent.style.display = 'none';
      roleContent.classList.add('collapsed');
      showMoreButton.style.display = 'inline-block';
      showLessButton.style.display = 'none';
  }
}
