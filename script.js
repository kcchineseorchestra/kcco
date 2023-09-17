function changeTheme(themeId) {
  var themes = document.getElementsByClassName("theme");
  for (var i = 0; i < themes.length; i++) {
    themes[i].style.display = "none";
  }

  var selectedTheme = document.getElementById(themeId);
  if (selectedTheme) {
    selectedTheme.style.display = "block";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.onscroll = function() {
  toggleScrollButton();
};

function toggleScrollButton() {
  var scrollToTopButton = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

