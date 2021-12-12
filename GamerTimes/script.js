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
    document.body.style.backgroundImage = "url(Images/snowtheme.jpg)";
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