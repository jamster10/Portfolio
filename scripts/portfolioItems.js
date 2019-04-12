'use strict';

const PortfolioHolder = (function (){
  const portfolioStore=[
    {
      gif: 'img/landing-optimized.gif',
      picture: 'img/Landing.png',
      title: 'Landing Page',
      info: 'A fake company home page. A green, and simple focus.'
    },
    {
      gif: 'img/Bookmark.gif',
      picture: 'img/Bookmarks.png',
      title: 'Bookmark Manager',
      info: 'A place to create, manage, and rate your bookmarks.'
    }
  ];

  const getIcons =()=>{
    let iconsHTML = portfolioStore.map(item=>{
      return `<div class="portfolio-icon-container">
        <img class="icon" src="${item.picture}" alt="${item.title} icon"></img>
        <h5 class="icon-name">${item.title}</h5>
      </div>`;
    });
    return iconsHTML.join('');

  };

  return {
    portfolioStore,
    getIcons,
  };

}());