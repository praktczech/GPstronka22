
// document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", function () {
//         var sec4 = document.querySelector(".sec4");
//         var sec2 = document.querySelector(".sec2");
//         var flexLista = document.querySelector(".flexlista");
//         var budynki = document.querySelector(".budynki");
//         var opisan = document.querySelector(".opisan");
//         var storka = document.querySelector(".storka");
//         var kolaobrazy = document.querySelector(".kolaobrazy");
//         var koncowyan = document.querySelector(".koncowyan");
//         var triggerBottom = window.innerHeight / 5 * 4; // Настройте на ваше усмотрение

//         var parentTop = sec4.getBoundingClientRect().top;
       

//         if (parentTop < triggerBottom) {
//             sec4.querySelectorAll(".kratka2").forEach(child => {
//                 child.classList.add("scale-in-tr");
//             });
//             sec4.querySelectorAll(".pom2").forEach(child => {
//                 child.classList.add("animate-slide-in");
//             });
//             sec4.querySelectorAll(".zdjk").forEach(child => {
//                 child.classList.add("flipInX");
//             });
//             sec4.querySelectorAll(".blokdolan").forEach(child => {
//                 child.classList.add("blokdol-animate");
//             });
//             sec4.querySelectorAll(".nieb2an").forEach(child => {
//                 child.classList.add("scale-in-ver-bottom");
//             });
//         } else {
//             sec4.querySelectorAll(".kratka2").forEach(child => {
//                 child.classList.remove("scale-in-tr");
//             });
//             sec4.querySelectorAll(".pom2").forEach(child => {
//                 child.classList.remove("animate-slide-in");
//             });
//             sec4.querySelectorAll(".zdjk").forEach(child => {
//                 child.classList.remove("flipInX");
//             });
//             sec4.querySelectorAll(".blokdolan").forEach(child => {
//                 child.classList.remove("blokdol-animate");
//             });
//             sec4.querySelectorAll(".nieb2an").forEach(child => {
//                 child.classList.remove("scale-in-ver-bottom");
//             });
//         }
        
//         var sec2top = sec2.getBoundingClientRect().top;
//         if (sec2top < triggerBottom) {
//             sec2.querySelectorAll(".sec2h2an").forEach(child => {
//                 child.classList.add("slide-top");
//             });
//             sec2.querySelectorAll(".sec2p").forEach(child => {
//                 child.classList.add("slide-top-2");
//             });
//             sec2.querySelectorAll(".sec3an").forEach(child => {
//                 child.classList.add("slide-top-3");
//             });
            
//         } else {
//             sec2.querySelectorAll(".sec2h2an").forEach(child => {
//                 child.classList.remove("slide-top");
//             });
//             sec2.querySelectorAll(".sec2p").forEach(child => {
//                 child.classList.remove("slide-top-2");
//             });
//             sec2.querySelectorAll(".sec3an").forEach(child => {
//                 child.classList.remove("slide-top-3");
//             });
            
//         }
//         var flexListaTop = flexlista.getBoundingClientRect().top;
//         if (flexListaTop < triggerBottom) {
//             flexLista.querySelectorAll(".fl").forEach(child => {
//                 child.classList.add("up");
//             });
//         } else {
//             flexLista.querySelectorAll(".fl").forEach(child => {
//                 child.classList.remove("up");
//             });

//         }
//         var budynkiTop = budynki.getBoundingClientRect().top;
//         if (budynkiTop < triggerBottom) {
//             budynki.querySelectorAll(".blokbudmalan").forEach(child => {
//                 child.classList.add("slide-left");
//             });
//             budynki.querySelectorAll(".h2budan").forEach(child => {
//                 child.classList.add("zoomIn");
//             });
//             budynki.querySelectorAll(".blkbudan").forEach(child => {
//                 child.classList.add("slide-in-top");
//             });
//             budynki.querySelectorAll(".wolnymalyan").forEach(child => {
//                 child.classList.add("slide-in-top-2");
//             });
//             budynki.querySelectorAll(".aniguz").forEach(child => {
//                 child.classList.add("slide-in-bottom");
//             });
//         } else {
//             budynki.querySelectorAll(".blokbudmalan").forEach(child => {
//                 child.classList.remove("slide-left");
//             });
//             budynki.querySelectorAll(".h2budan").forEach(child => {
//                 child.classList.remove("zoomIn");
//             });
//             budynki.querySelectorAll(".blkbudan").forEach(child => {
//                 child.classList.remove("slide-in-top");
//             });
//             budynki.querySelectorAll(".wolnymalyan").forEach(child => {
//                 child.classList.remove("slide-in-top-2");
//             });
//             budynki.querySelectorAll(".aniguz").forEach(child => {
//                 child.classList.remove("slide-in-bottom");
//             });

//         }
//         var opisanTop = opisan.getBoundingClientRect().top;
//         if (opisanTop < triggerBottom) {
//             opisan.querySelectorAll(".opdiv").forEach(child => {
//                 child.classList.add("slide-in-bottom-opisan");
//             });
//             opisan.querySelectorAll(".opisprawyan").forEach(child => {
//                 child.classList.add("slide-left-opisprawy");
//             });
//             opisan.querySelectorAll(".animacjaguz2").forEach(child => {
//                 child.classList.add("slide-in-bottom-guzopis");
//             });
            
//         } else {
//             opisan.querySelectorAll(".opdiv").forEach(child => {
//                 child.classList.remove("slide-in-bottom-opisan");
//             });
//             opisan.querySelectorAll(".opisprawyan").forEach(child => {
//                 child.classList.remove("slide-left-opisprawy");
//             });
//             opisan.querySelectorAll(".animacjaguz2").forEach(child => {
//                 child.classList.remove("slide-in-bottom-guzopis");
//             });
            

//         }
//         var storkaTop = storka.getBoundingClientRect().top;
//         if (storkaTop < triggerBottom) {
//             storka.querySelectorAll(".opdiv").forEach(child => {
//                 child.classList.add("slide-in-bottom-opisan");
//             });
//             storka.querySelectorAll(".blokdolan2").forEach(child => {
//                 child.classList.add("blokdol-animate-2");
//             });
//             storka.querySelectorAll(".pomaranczowy2").forEach(child => {
//                 child.classList.add("animate-slide-in-pomaranczowy");
//             });
//             storka.querySelectorAll(".zdjk2").forEach(child => {
//                 child.classList.add("slide-in-bottom-zdjk2");
//             });
//             storka.querySelectorAll(".niebieski2").forEach(child => {
//                 child.classList.add("slide-left-niebieski");
//             });
//             storka.querySelectorAll(".kratkalul").forEach(child => {
//                 child.classList.add("kratka-animate");
//             });
            
            
            
//         } else {
//             storka.querySelectorAll(".opdiv").forEach(child => {
//                 child.classList.remove("slide-in-bottom-opisan");
//             });
//             storka.querySelectorAll(".blokdolan2").forEach(child => {
//                 child.classList.remove("blokdol-animate-2");
//             });
//             storka.querySelectorAll(".pomaranczowy2").forEach(child => {
//                 child.classList.remove("animate-slide-in-pomaranczowy");
//             });
//             storka.querySelectorAll(".zdjk2").forEach(child => {
//                 child.classList.remove("slide-in-bottom-zdjk2");
//             });
//             storka.querySelectorAll(".niebieski2").forEach(child => {
//                 child.classList.remove("slide-left-niebieski");
//             });
//             storka.querySelectorAll(".kratkalul").forEach(child => {
//                 child.classList.remove("kratka-animate");
//             });
//         }
//         var kolaobrazyTop = kolaobrazy.getBoundingClientRect().top;
//         if (kolaobrazyTop < triggerBottom) {
//             kolaobrazy.querySelectorAll(".kobraz3").forEach(child => {
//                 child.classList.add("animate-slide-in");
//             });
//             kolaobrazy.querySelectorAll(".kobraz4").forEach(child => {
//                 child.classList.add("slide-left");
//             });
//             kolaobrazy.querySelectorAll(".kobraz2").forEach(child => {
//                 child.classList.add("scale-in-right");
//             });
//             kolaobrazy.querySelectorAll(".kobraz1").forEach(child => {
//                 child.classList.add("rotate-center");
//             });
//             kolaobrazy.querySelectorAll(".kobraztekst").forEach(child => {
//                 child.classList.add("up-2");
//             });
//             kolaobrazy.querySelectorAll(".kobrazyguz").forEach(child => {
//                 child.classList.add("slide-in-bottom");
//             });
//             kolaobrazy.querySelectorAll(".kobraz5").forEach(child => {
//                 child.classList.add("scale-up-left");
//             });
    
    
//         } else {
//             kolaobrazy.querySelectorAll(".kobraz3").forEach(child => {
//                 child.classList.remove("animate-slide-in");
//             });
//             kolaobrazy.querySelectorAll(".kobraz4").forEach(child => {
//                 child.classList.remove("slide-left");
//             });
//             kolaobrazy.querySelectorAll(".kobraz2").forEach(child => {
//                 child.classList.remove("scale-in-right");
//             });
//             kolaobrazy.querySelectorAll(".kobraz1").forEach(child => {
//                 child.classList.remove("rotate-center");
//             });
//             kolaobrazy.querySelectorAll(".kobraztekst").forEach(child => {
//                 child.classList.remove("up-2");
//             });
//             kolaobrazy.querySelectorAll(".kobrazyguz").forEach(child => {
//                 child.classList.remove("slide-in-bottom");
//             });
//             kolaobrazy.querySelectorAll(".kobraz5").forEach(child => {
//                 child.classList.remove("scale-up-left");
//             });
//         }
//         var koncowyanTop = koncowyan.getBoundingClientRect().top;
//         if (koncowyanTop < triggerBottom) {
//             koncowyan.querySelectorAll(".koncowyanimacja").forEach(child => {
//                 child.classList.add("slide-in-left");
//             });
//             koncowyan.querySelectorAll(".div4").forEach(child => {
//                 child.classList.add("slide-in-left-d4");
//             });
//         } else {
//             koncowyan.querySelectorAll(".koncowyanimacja").forEach(child => {
//                 child.classList.remove("slide-in-left");
//             });
//             koncowyan.querySelectorAll(".div4").forEach(child => {
//                 child.classList.remove("slide-in-left-d4");
//             });
//         }
//     });
// });





document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const elements = {
            sec4: [
                { selector: ".kratka2", class: "scale-in-tr" },
                { selector: ".pom2", class: "animate-slide-in" },
                { selector: ".zdjk", class: "flipInX" },
                { selector: ".blokdolan", class: "blokdol-animate" },
                { selector: ".nieb2an", class: "scale-in-ver-bottom" }
            ],
            sec2: [
                { selector: ".sec2h2an", class: "slide-top" },
                { selector: ".sec2p", class: "slide-top-2" },
                { selector: ".sec3an", class: "slide-top-3" }
            ],
            flexlista: [{ selector: ".fl", class: "up" }],
            budynki: [
                { selector: ".blokbudmalan", class: "slide-left" },
                { selector: ".h2budan", class: "zoomIn" },
                { selector: ".blkbudan", class: "slide-in-top" },
                { selector: ".wolnymalyan", class: "slide-in-top-2" },
                { selector: ".aniguz", class: "slide-in-bottom" }
            ],
            opisan: [
                { selector: ".opdiv", class: "slide-in-bottom-opisan" },
                { selector: ".opisprawyan", class: "slide-left-opisprawy" },
                { selector: ".animacjaguz2", class: "slide-in-bottom-guzopis" }
            ],
            storka: [
                { selector: ".opdiv", class: "slide-in-bottom-opisan" },
                { selector: ".blokdolan2", class: "blokdol-animate-2" },
                { selector: ".pomaranczowy2", class: "animate-slide-in-pomaranczowy" },
                { selector: ".zdjk2", class: "slide-in-bottom-zdjk2" },
                { selector: ".niebieski2", class: "slide-left-niebieski" },
                { selector: ".kratkalul", class: "kratka-animate" }
            ],
            kolaobrazy: [
                { selector: ".kobraz3", class: "animate-slide-in" },
                { selector: ".kobraz4", class: "slide-left" },
                { selector: ".kobraz2", class: "scale-in-right" },
                { selector: ".kobraz1", class: "rotate-center" },
                { selector: ".kobraztekst", class: "up-2" },
                { selector: ".kobrazyguz", class: "slide-in-bottom" },
                { selector: ".kobraz5", class: "scale-up-left" }
            ],
            koncowyan: [
                { selector: ".koncowyanimacja", class: "slide-in-left" },
                { selector: ".div4", class: "slide-in-left-d4" }
            ]
        };

        const triggerBottom = window.innerHeight / 4 * 4;

        Object.entries(elements).forEach(([sectionName, animations]) => {
            const section = document.querySelector(`.${sectionName}`);
            const sectionTop = section.getBoundingClientRect().top;

            animations.forEach(({ selector, class: animationClass }) => {
                const elements = section.querySelectorAll(selector);
                elements.forEach(element => {
                    if (sectionTop < triggerBottom) {
                        element.classList.add(animationClass);
                    } else {
                        element.classList.remove(animationClass);
                    }
                });
            });
        });
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const HTML = document.getElementById("hj"); // Assuming your main content has an id of "main-content"

    menuBtn.addEventListener("click", function () {
        menu.style.left = "0";
        overlay.style.display = "block";
        HTML.style.overflow = "hidden"; // Disable scrolling for main content
    });

    overlay.addEventListener("click", function () {
        menu.style.left = "-300px";
        overlay.style.display = "none";
        HTML.style.overflow = "auto"; // Enable scrolling for main content
    });
});




