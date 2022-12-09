(() => {
  const ppc = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  ppc.openMenuBtn.addEventListener("click", toggleModal);
  ppc.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("menu-open");
    ppc.menu.classList.toggle("is-open");
  }
})();
