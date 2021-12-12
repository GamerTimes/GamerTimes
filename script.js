  // ---------------------------------------------function THEME CHANGER---------------------------------------------
 
 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        mtheme2();
        localStorage.setItem("backgroundImage", 2);
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-dark');
        theme1();
        localStorage.setItem("backgroundImage", 1);
        document.getElementById('slider').checked = true;
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('backgroundImage') === '2') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
        mtheme2();
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
        theme1();
    }
})();



// ---------------------------------------------function THEME CHANGES---------------------------------------------
function theme1() {
    document.body.style.backgroundImage = "url(Images/Xmas1.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  function mtheme2() {
    document.body.style.backgroundImage = "url(Images/Background_1.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }  

function keep(){
    if (localStorage.getItem('backgroundImage') === '2'){
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
        mtheme2();
    } else { 
            setTheme('theme-light');
            document.getElementById('slider').checked = true;
            theme1();}
}


// ---------------------------------------------function scroll up with animation---------------------------------------------
function fromthetop(){
//Get the button
var mybutton = document.getElementById("myBtn");
mybutton.style.display = "none";
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'}) 

}
// ------------------------------------------------------------------------------------------------------------------

