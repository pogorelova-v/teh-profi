const burgerBar = document.querySelector('.burger-bar');
const burgerBarClose = document.querySelector('.burger-bar-close');
const burgerBarContent = document.querySelector('.burger-bar-content');

burgerBar.addEventListener('click', () => {
    burgerBar.classList.add('scale0');
    burgerBarClose.classList.remove('scale0');
    burgerBarContent.classList.remove('height0');    
});

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(burgerBarContent);
	const withinBoundariesIx = e.composedPath().includes(burgerBar);
	if ( !withinBoundaries && !withinBoundariesIx ) {
        burgerBar.classList.remove('scale0');
        burgerBarClose.classList.add('scale0');
        burgerBarContent.classList.add('height0'); 
	}
});


//-------------------------------------

const serviceItems = document.querySelectorAll('.service');
const serviceImg = document.querySelectorAll('.service-img');

serviceItems.forEach((element,index) => {
    element.addEventListener('mouseover', () => {
        serviceImg[index].classList.add('scale12')
    })    
});
serviceItems.forEach((element,index) => {
    element.addEventListener('mouseout', () => {
        serviceImg[index].classList.remove('scale12')
    })    
});

//---------------------------------------------------
const stickyMenu = document.querySelector('.sticky-menu-contain');
const scrollHeight = stickyMenu.offsetTop + stickyMenu.clientHeight;

window.addEventListener('scroll', function() {
    let windowHeight = window.pageYOffset;
    if(windowHeight > scrollHeight){
        stickyMenu.classList.add('sticky-menu')
    } else {
        stickyMenu.classList.remove('sticky-menu')
    }
  });

