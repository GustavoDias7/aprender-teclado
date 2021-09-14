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
function accordion({ selectorName, onlyOneOpen = false }) {
  const $accordions = document.querySelectorAll(selectorName);
  let lastOpen = 0;
  let setLastOpen = (newValue) => {
    lastOpen = newValue;
  };

  $accordions.forEach((accordion, index) => {
    accordion.addEventListener('click', (event) => {
      event.currentTarget.toggleAttribute('show');
      if (onlyOneOpen === false) return;
      let isDifferent = $accordions[lastOpen] != accordion;
      if (isDifferent) {
        $accordions[lastOpen].removeAttribute('show');
        setLastOpen(index);
      }
    })
  })
}

initLinkUnderline({ 
  linkSelector: '.link' 
});
initSidebar({
  hamburgerSelector: '',
  sidebarContainer: '',
})
accordion({
  selectorName: '[data-only]',
  onlyOneOpen: true,
});