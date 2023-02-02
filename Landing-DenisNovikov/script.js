// const portfolioBlock = document.querySelector('.portfolio-block');
// console.log(portfolioBlock.classList[1])
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 2000) {
//         portfolioBlock.classList[1] = ''
//     }
//     console.log(window.scrollY)
// })

// import Splide from '@splidejs/splide';


var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}

// var flexGroup = document.querySelectorAll('.flex-subgroup');
// console.log(flexGroup);

