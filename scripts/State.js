'use strict';
/*global ViewGenerator, PortfolioHolder, SessionControls */

const State = (function(){
  let controller = {
    showMenu: false,
    pageView: 1,
    selectedProject: null,
    showPanel: false
  };

  //Control to toggle black overlay
  const togglePanel = () => {
    controller.showPanel = !controller.showPanel;
    const overPanel = document.querySelector('.over-panel');
    const panelBtn = document.querySelector('.button-holder');

    if (controller.showPanel){
      overPanel.classList.add('show-panel');
      panelBtn.classList.add('move-btn');
    } else {
      overPanel.classList.remove('show-panel');
      panelBtn.classList.remove('move-btn');
    }
  };

  //Control to show current project is selected
  const selectProject=(newProject)=>{
    removeSelection();
    newProject.classList.add('selected-project');
    State.controller.selectedProject = newProject.id;
  };

  //controls to remove any past selected project
  const removeSelection=()=>{
    let preSelected = document.querySelector(`#${State.controller.selectedProject}`);
    if (preSelected) preSelected.classList.remove('selected-project');
  };

  //controls to find projects
  const findProject=()=> PortfolioHolder.portfolioStore.find(item => item.id === State.controller.selectedProject);

  const renderLogos=()=>{
    const selected = findProject();
    return PortfolioHolder.getLogos(selected.tools);
  };

  //toogle menu if screen size is right width
  const toggleMenu=()=> {
    controller.showMenu = !controller.showMenu;
    const options = document.querySelector('.nav-links');
    if (controller.showMenu){
      options.classList.add('show-menu');
    } else {
      options.classList.remove('show-menu');
    }
  };


  //Enable CSS transitions after page load properly
  const enableTransitions=()=>{
    let body = document.querySelector(`body`);
    body.classList.remove('preload');
  };

  const portfolioSelect=(event)=>{
    let selected = event.target.closest('.portfolio-icon-container');
    if(!selected || selected === State.selectedProject) return;
    State.controller.pageView = 3; 
    State.selectProject(selected);
    State.renderPage();
    document.querySelector('.lib-logo-container').innerHTML = State.renderLogos();
  };

  //Determine whether to show panel on visit
  const shouldShowPanel = () =>{
    const shouldShow = SessionControls.checkToken();
    if (shouldShow){
      State.togglePanel();
      SessionControls.addToken(); 
    }
  };

  //decide which view to show a user
  const renderPage=()=>{
    switch (controller.pageView){
    case 1:  ViewGenerator.homePage();
      break;
    // case 2:  ViewGenerator.contactPage();
    //   break; //removed contact page in favour of resume
    case 3:  ViewGenerator.portfolioPage(findProject());
      break;
    case 4:  ViewGenerator.aboutPage();
      break;
    }
  };

  return {
    controller,
    enableTransitions,
    togglePanel,
    shouldShowPanel,
    toggleMenu,
    renderPage,
    selectProject,
    removeSelection,
    renderLogos,
    portfolioSelect
  };
}() );