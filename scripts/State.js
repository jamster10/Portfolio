'use strict';
/*global ViewGenerator, PortfolioHolder */

const State = (function(){
  let controller = {
    showMenu: false,
    pageView: 1,
    selectedProject: null
  };

  const selectProject=(newProject)=>{
    removeSelection();
    newProject.classList.add('selected-project');
    State.controller.selectedProject = newProject.id;
  };

  const removeSelection=()=>{
    let preSelected =document.querySelector(`#${State.controller.selectedProject}`);
    if (preSelected) preSelected.classList.remove('selected-project');
  };

  const findProject=()=> PortfolioHolder.portfolioStore.find(item => item.id === State.controller.selectedProject);

  const renderLogos=()=>{
    const selected = findProject();
    return PortfolioHolder.getLogos(selected.tools);
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

  const portfolioSelect=(event)=>{
    let selected = event.target.closest('.portfolio-icon-container');
    if(!selected || selected === State.selectedProject) return;
    State.controller.pageView = 3; 
    State.selectProject(selected);
    State.renderPage();
    document.querySelector('.lib-logo-container').innerHTML = State.renderLogos();
  };

  const renderPage=()=>{
    switch (controller.pageView){
    case 1:  ViewGenerator.homePage();
      break;
    case 2:  ViewGenerator.contactPage();
      break;
    case 3:  ViewGenerator.portfolioPage(findProject());
      break;
    case 4:  ViewGenerator.aboutPage();
      break;
    }
  };

  return {
    controller,
    toggleMenu,
    renderPage,
    selectProject,
    removeSelection,
    renderLogos,
    portfolioSelect
  };
}() );