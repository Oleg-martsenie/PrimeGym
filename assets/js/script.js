function menuMobili() {
    let menuarea = document.querySelector('#menu-area')

    if(menuarea.style.width == '200px'){
        menuarea.style.width = '0px'
    } else {
        menuarea.style.width = '200px'
    }
};