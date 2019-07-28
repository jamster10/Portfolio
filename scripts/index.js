'use strict';
/*global State, PortfolioHolder*/

//Toggle menu button. Exists only on mobile.
document.querySelector('.menu-button').onclick =(e)=>{
  e.stopPropagation();
  State.toggleMenu();
};

document.querySelector('#panel-btn').onclick = (e) => {
  e.stopPropagation();
  State.togglePanel(); 
};

//Allow navigation to home page when user clicks on my name
document.querySelector('.name').onclick =(e)=>{
  e.stopPropagation();
  State.controller.pageView = 1;
  State.removeSelection();
  State.renderPage();
};

//<<Deleted function as I removed my contact me page
// document.querySelector('#my-resume').onclick =(e)=>{

//   e.stopPropagation();
//   State.controller.pageView = 2;
//   State.removeSelection();
//   State.renderPage();
// };

//Allow users to access about me page
document.querySelector('#about-me').onclick =(e)=>{

  e.stopPropagation();
  State.controller.pageView = 4;
  State.removeSelection();
  State.renderPage();
};


document.querySelector('.nav-links').onclick =(e)=>{
  e.stopPropagation();
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width < 890){
    State.toggleMenu();
  }
};

//Unnesscary function maybe?
// document.querySelector('').onclick =(e)=>{
//   console.log('I am clicked')
//   e.stopPropagation();
//   State.controller.pageView = 4;
//   State.removeSelection();
//   State.renderPage();
// };

//Determine which portfolio item is clicked
document.querySelector('footer').onclick =(e)=>{
  e.stopPropagation(); 
  State.portfolioSelect(e);
};
//Allow access to portfolio using keyboard
document.querySelector('footer').onkeyup=(e)=> State.portfolioSelect(e);

//Initialize it all, Render the portfolio section, and grab the correct icons.
(function init (){
  document.querySelector('.portfolio-container').innerHTML = PortfolioHolder.getIcons();
  State.enableTransitions();
  State.renderPage();
  setTimeout(() =>State.shouldShowPanel(), 700); 
}() );
  



