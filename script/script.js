let menuToggler = document.querySelector(".icon-menu");
let nav = document.getElementById("menu1")

if (menuToggler){
    menuToggler.addEventListener("click", (e) => {
        if (menuToggler.classList.contains("pushed"))
        {
            menuToggler.classList.remove("pushed");
            nav.classList.remove("opened");
        } 
        else
        {
            menuToggler.classList.add("pushed");
            nav.classList.add("opened");
        }
    });
}