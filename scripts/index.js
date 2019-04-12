'use strict';
/*global State, PortfolioHolder*/

console.log('up and running');

document.querySelector('.menu-button').onclick =(e)=>{
  e.stopPropagation();
  State.toggleMenu();
};

document.querySelector('.name').onclick =(e)=>{
  e.stopPropagation();
  State.controller.pageView = 1;
  State.controller.selectedProject = null;
  State.renderPage();
};

document.querySelector('#contact-me').onclick =(e)=>{

  e.stopPropagation();
  State.controller.pageView = 2;
  State.controller.selectedProject = null;
  State.renderPage();
};

(function init (){
  console.log(PortfolioHolder);
  document.querySelector('.portfolio-container').innerHTML = PortfolioHolder.getIcons();
  State.renderPage();
}() );
  



