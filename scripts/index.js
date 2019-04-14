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
  State.portfolioSelect(e);
};

document.querySelector('footer').onkeyup=(e)=> State.portfolioSelect(e);

(function init (){
  document.querySelector('.portfolio-container').innerHTML = PortfolioHolder.getIcons();
  State.renderPage();
}() );
  



