function initLinkUnderline({ linkSelector }) {
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
    });
  });
}
function initSidebar({
  activeSidebar,
  closeSidebar,
  sidebarContainer,
}) {
  const $activeSidebar = document.querySelector(activeSidebar);
  $activeSidebar.addEventListener('click', handleActive);

  const $closeSidebar = document.querySelector(closeSidebar);
  $closeSidebar.addEventListener('click', handleActive);

  const $sidebarContainer = document.querySelector(sidebarContainer);
  $sidebarContainer.addEventListener('click', handleActive);

  function handleActive({ target }) {
    if (target !== this) return;
    $sidebarContainer.classList.toggle('active');
    $activeSidebar.classList.toggle('active')
  }
}
function initAccordion({ selectorName, onlyOneOpen = false }) {
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
    });
  });
}

initLinkUnderline({
  linkSelector: 'header .gn-link',
});
initSidebar({
  activeSidebar: '#burger',
  closeSidebar: '#close-sidebar',
  sidebarContainer: '#sidebar-container',
});
initAccordion({
  selectorName: '[data-only]',
  onlyOneOpen: true,
});
