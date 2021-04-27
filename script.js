let background = document.body;
let pepsiImage = document.querySelector(".mid-back");

function Pepsi(index){
        
            if ( index === 0) {
                background.style.cssText = "background-color: #2980b9;";
                pepsiImage.setAttribute("src","img/pepsi001.png");
                background.style.transition = "all ease-in-out 300ms;";
            } else if (index === 1) {
                background.style.cssText = "background-color: #e74c3c;";
                pepsiImage.setAttribute("src","img/pepsi002.png");
                background.style.transition = "all ease-in-out 300ms;";

            } else if (index === 2) {
                background.style.cssText = "background-color: #111;";
                pepsiImage.setAttribute("src","img/pepsi003.png");
                background.style.transition = "all ease-in-out 300ms;";

            } 
        }
 