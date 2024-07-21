
        
    const burgerMenuButton = document.querySelector('.burger-menu-button');
    const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i');
    const burgerMenu = document.querySelector('.burgeu-menu ');


    
    burgerMenuButton.onclick =function ()
    {
        burgerMenu.classList.toggle('open');
        const isOpen = burgerMenu.classList.contains('open');
        burgerMenuButtonIcon.classList= isOpen? 'fa-solid fa-xmark':'fa-solid fa-bars'
    }

// dynamic filed  creation 

// const addbtn = document.querySelector('.add');
// const input = document.querySelector('.inpu-group');



// function removeinput() 
// {
//     this.parentElement.remove()
// }


// function addiput(){
//     const name = document.createElement("input");
//     name.type = "text";
//     name.placeholder = "Membres";
//     name.required = true;

//     const NomPrenom = document.createElement("input");
//     NomPrenom.type = "text";
//     NomPrenom.placeholder = "Nom et prenom";
//     NomPrenom.required = true;

//     const Emargement = document.createElement("input");
//     Emargement.type = "text";
//     Emargement.placeholder = "Emargement";
//     Emargement.required = true;

//     // 

//     const btn = document.createElement("a");
//     btn.className = "delete" ;
//     btn.innerHTML = "&times"

//     btn.addEventListener("click",removeinput);

//     const flex = document.createElement("div");
//     flex.className = "flex";

//     input.appendChild(flex);
//     flex.appendChild(name);
//     flex.appendChild(NomPrenom);
//     flex.appendChild(Emargement);
//     flex.appendChild(btn);
// }

// addbtn.addEventListener("click",addiput);

//js dyal button de scroll
let btn = document.getElementById('btn');

window.onscroll = function () {
    if (window.scrollY >= 299) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

btn.onclick = function () {
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth',
    });
}