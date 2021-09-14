function initLinkUnderline({
  linkSelector
}) {
  const $links = document.querySelectorAll(linkSelector);
  let lastClicked = 0;
  const active = 'active';
  $links[lastClicked].classList.add(active);

  $links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.target.classList.add(active);
      if (index === lastClicked) return;
      $links[lastClicked].classList.remove(active);
      lastClicked = index;
    })
  })
}
function initSidebar({
  hamburgerSelector,
  sidebarContainer
}) {

}
initLinkUnderline({ linkSelector: '.link' });
initSidebar({
  hamburgerSelector: '',
  sidebarContainer: '',
})