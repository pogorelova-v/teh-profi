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
})
