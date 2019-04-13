'use strict';
/*global State, PortfolioHolder*/


document.querySelector('.menu-button').onclick =(e)=>{
  e.stopPropagation();
  State.toggleMenu();
};

document.querySelector('.name').onclick =(e)=>{
  e.stopPropagation();
  State.controller.pageView = 1;
  State.removeSelection();
  State.renderPage();
};

document.querySelector('#contact-me').onclick =(e)=>{

  e.stopPropagation();
  State.controller.pageView = 2;
  State.removeSelection();
  State.renderPage();
};

document.querySelector('#about-me').onclick =(e)=>{

  e.stopPropagation();
  State.controller.pageView = 4;
  State.removeSelection();
  State.renderPage();
};


document.querySelector('footer').onclick =(e)=>{

  e.stopPropagation(); 
  let selected = event.target.closest('.portfolio-icon-container');
  if(!selected || selected === State.selectedProject) return;
  State.controller.pageView = 3; 
  State.selectProject(selected);
  State.renderPage();
  document.querySelector('.lib-logo-container').innerHTML = State.renderLogos();
};

(function init (){
  document.querySelector('.portfolio-container').innerHTML = PortfolioHolder.getIcons();
  State.renderPage();
}() );
  



