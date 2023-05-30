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
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNavbar",
            offset: 74
        })
    } 
});


//Sayfaki .btn-close-canvas classlarına sahip elemanları bulacak.
//Daha sonra bu elemanlara tek tek click event'i eklenecek.
//Yani .btn-close-canvas class'ına sahip olan elemanlara tıklandığında bir fonksiyon gerçekleştirilecek.
//İlgili elemanlara tıklandığında dokümantasyondaki [data-bs-dismiss="offcanvas"] attribute'una tıklanacak.
//Böylelikle offcanvas'ı kapatmış olacağız.
var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click", function(){
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}



//Chrome tarayıcılarda ve large'ın altındaki ekranlarda offcanvas ile açılan navbar,
//seçilen bölüme giderken scroll-behavior: smooth özelliğini çalıştıramadığı için
//küçük ekranlarda tetiklenecek olan scroll-behavior: auto özelliğini aktif hale getirdim.

function checkScreenWidth(){
    var element = document.documentElement;;
    if(window.innerWidth < 991.98){
        if (navigator.userAgent.indexOf("Chrome") != -1) {    
            element.classList.add("chrome-scroll");
        }
    }
    else if (element.classList.contains("chrome-scroll")){
        element.classList.remove("chrome-scroll");
    }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

