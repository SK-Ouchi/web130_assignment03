const DROPDOWN = document.querySelector("#dropDown");
const MENUTEXT = document.querySelector("#menuText");
const TOGGLEMENU = document.querySelector("#toggleMenu");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
        document.getElementById("toggleMenu").innerHTML = "&#9747;";
    } else {
        nav.className = "topnav";
        document.getElementById("toggleMenu").innerHTML = "&#9776;";
    }
}

//Drop down mennu for header when clicked. Shows content defined in the html
function navDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");

    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var dropdownMenu = document.getElementById("dropdownMenu");
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    }
}

//Set event listeners
DROPDOWN.addEventListener("click",navDropdown,false);
TOGGLEMENU.addEventListener("click",toggleNav,false);