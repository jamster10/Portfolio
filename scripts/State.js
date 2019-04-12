'use strict';
/*global ViewGenerator */

const State = (function(){
  let controller = {
    showMenu: false,
    pageView: 1,
    selectedProject: null
  };

  const toggleMenu=()=> {
    controller.showMenu = !controller.showMenu;
    const options = document.querySelector('.nav-links');
    if (controller.showMenu){
      options.classList.add('show-menu');
    } else {
      options.classList.remove('show-menu');
    }
  };

  const renderPage=()=>{
    console.log(State.controller.pageView);
    switch (controller.pageView){
    case 1:  ViewGenerator.homePage();
      break;
    case 2:  ViewGenerator.contactPage();
      break;
    case 3:  ViewGenerator.portfolioPage();
      break;
    }
  };

  return {
    controller,
    toggleMenu,
    renderPage,
  };
}() );