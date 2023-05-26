window.addEventListener("DOMContentLoaded", event=>{
    var navbarMobile = function(){
        const nCollapsible = document.body.querySelector("#mainNavbar");
        if(!nCollapsible){
            return;
        }
        if(window.scrollY === 0){
            nCollapsible.classList.remove("navbar-mobile");
        }
        else{
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    //Eğer sayfada bir scroll olayı gerçekleşirse navbarMobile() fonksiyonunu çalıştırır.
    document.addEventListener("scroll", navbarMobile);

    const myNavbar = document.body.querySelector("#mainNavbar");
    if(myNavbar){
        new Bootstrap.ScrollSpy(document.body, {
            target: "#mainNavbar",
            offset: 74
        })
    } 
})