const burgerBar = document.querySelector('.burger-bar');
const burgerBarClose = document.querySelector('.burger-bar-close');
const burgerBarContent = document.querySelector('.burger-bar-content');

burgerBar.addEventListener('click', () => {
    burgerBar.classList.add('scale0');
    burgerBarClose.classList.remove('scale0');
    burgerBarContent.classList.remove('height0');    
});

document.addEventListener( 'click', (e) => {
	const withinBoundariesIx = e.composedPath().includes(burgerBar);
	const withinBoundaries = e.composedPath().includes(servicesMainMenu);
	if ( !withinBoundariesIx && !withinBoundaries) {
        burgerBar.classList.remove('scale0');
        burgerBarClose.classList.add('scale0');
        burgerBarContent.classList.add('height0'); 
	}
});

//-----------для второстип страниц

const servicesMainMenu = document.querySelector('.services-main-menu');

servicesMainMenu.addEventListener('click', () => {
    burgerBarContent.classList.toggle('height0');    
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
const scrollHeight = stickyMenu.offsetTop;

window.addEventListener('scroll', function() {
    let windowHeight = window.pageYOffset;
    if(windowHeight > scrollHeight){
        stickyMenu.classList.add('sticky-menu')
    } else {
        stickyMenu.classList.remove('sticky-menu')
    }
  });

  //------------------------------------------------------------

const detailedData = document.querySelector('.detailed-data-span');
const detailedDataWrap = document.querySelector('.detailed-data');
const detailedDataImg = document.querySelector('.detailed-data-img');
const detailedDataContent = document.querySelector('.detailed-data-content');

let openData = detailedData.textContent;

detailedDataWrap.addEventListener('click', () => {
    let textC = detailedData.textContent;
        if(textC === 'Развернуть подробные данные'){
            detailedData.textContent = 'Свернуть подробные данные';
            openData = 'Свернуть подробные данные';
            detailedDataImg.classList.add('detailed-data-active-img')
            detailedDataContent.classList.add('detailed-data-content-active')
        } else {
            detailedData.textContent = 'Развернуть подробные данные';
            openData = 'Развернуть подробные данные';
            detailedDataImg.classList.remove('detailed-data-active-img')
            detailedDataContent.classList.remove('detailed-data-content-active')
        }
});

//--------------------------------------------------------------

const formPopap = document.querySelector('.form');
const formbody = document.querySelector('form');
const buttonFormPopup = document.querySelector('.button-formPopup');
const closePopup = document.querySelector('.close-popup');
const formButton = document.querySelector('.form__button');

buttonFormPopup.addEventListener('click', () => {
    formPopap.classList.add('form-active')
});

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(formbody);
	const withinBoundariesBut = e.composedPath().includes(buttonFormPopup);
	const withinBoundariesIx = e.composedPath().includes(closePopup);
	const withinBoundariesFB = e.composedPath().includes(formButton);
 
	if ( ! withinBoundaries && ! withinBoundariesBut) {
		formPopap.classList.remove('form-active')
	} else if (withinBoundariesIx || withinBoundariesFB){
        formPopap.classList.remove('form-active')
    }
})

//---------------------------------------------

const servicesPageImg = document.querySelectorAll('.services-img')
const servicesPageDescription = document.querySelector('.services-description')
const reasonsText = document.querySelector('.reasons')

servicesPageImg.forEach((element) => {
    element.addEventListener('click', () => {
        if(index = 0){
            element.classList.toggle('services-img-open')
            servicesPageDescription.classList.toggle('services-description-open')
        } else {
            element.classList.toggle('services-img-open')
        }

        if(element.classList.contains('reasons-img')){
            reasonsText.classList.toggle('dn')
        }

    })    
});


document.addEventListener( 'click', (e) => {
    servicesPageImg.forEach((element) => {
        const withinBoundaries = e.composedPath().includes(element);
	    if ( ! withinBoundaries) {
		    element.classList.remove('services-img-open')
            
	    }   
    });
})