'use strict';

const PortfolioHolder = (function (){
  const portfolioStore=[
    {
      gif: 'img/DogGo.gif',
      picture: 'img/doggo.png',
      title: 'DogGo!',
      info: 'Find a dog-friendly route for you and your best bud. Login to save your route for later.',
      id: 'doggo-project',
      tools:['react', 'node', 'express', 'postgresql', 'heroku', 'js'],
      url: 'https://dog-go.netlify.com',
      repo: 'https://github.com/jamster10/doggo-client',
      backendRepo: 'https://github.com/jamster10/doggo-client'
    },
    {
      gif: 'img/Markdown.gif',
      picture: 'img/Markdown.png',
      title: 'Markdown Previewer',
      info: 'Practice and Preview Markdown syntax.',
      id: 'markdown-project',
      tools:['html', 'css', 'js', 'react'],
      url: '',
      repo: ''
    },
    {
      gif: 'img/landing-optimized.gif',
      picture: 'img/Landing.png',
      title: 'Landing Page',
      info: 'A fake company home page. A green, and simple focus.',
      id: 'landing-project',
      tools:['html', 'css', 'js'],
      url: 'https://jamster10.github.io/landing-page/',
      repo: 'https://github.com/jamster10/landing-page'
      
    },
    {
      gif: 'img/Bookmark.gif',
      picture: 'img/Bookmarks.png',
      title: 'Bookmark Manager',
      info: 'A place to create, manage, and rate your bookmarks.',
      id: 'bookmark-project',
      tools:['html', 'css', 'js'],
      url: 'https://thinkful-ei-cheetah.github.io/Kristof-Pierre-Bookmark-Project/',
      repo: 'https://github.com/thinkful-ei-cheetah/Kristof-Pierre-Bookmark-Project'
    },
  ];

  const logos =
    {
      css: 'img/icons/css.svg',
      html: 'img/icons/html.svg',
      js: 'img/icons/js.svg',
      mongo: 'img/icons/mongo.svg',
      react: 'img/icons/react.svg',
      heroku: 'img/icons/heroku.svg',
      express: 'img/icons/express.svg',
      postgresql: 'img/icons/postgresql.svg',
      node: 'img/icons/node.svg'
    };

  const getLogos=(arr)=>{
    let logosHTML = arr.map(item =>{
      return `<img class='logo-img' src=${logos[item]} alt = 'logo for ${item}'>`;
    });
    return logosHTML.join(' ');
  };  

  const getIcons =()=>{
    let iconsHTML = portfolioStore.map(item => {
      return `<a class="icon-links"href='#'><div class="portfolio-icon-container" id=${item.id} >
        <img class="icon" src="${item.picture}" alt="${item.title} icon"></img>
        <h5 class="icon-name">${item.title}</h5>
      </div></a>`;
    });
    return iconsHTML.join('');
  };

  return {
    portfolioStore,
    getIcons,
    getLogos,
  };

}());