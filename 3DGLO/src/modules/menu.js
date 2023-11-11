const menu = () => {
    const menu = document.querySelector("menu");
    const body = document.querySelector("body");
    let showMenu = 'false';

    body.addEventListener("click", (e) => {

        if (e.target.closest(".menu")) {
            menu.classList.toggle("active-menu");
            showMenu = 'true';
        } else if (
            e.target.classList.contains("close-btn") ||
            e.target.classList.contains("close-link")
        ) {
            menu.classList.toggle("active-menu");
            showMenu = 'false';
        } else if (!e.target.classList.contains("active-menu") && showMenu == 'true') {
            console.log(e.target)
            menu.classList.toggle("active-menu");
            showMenu = 'false';
        }
    });
};

export default menu;