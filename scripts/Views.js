'use strict';
/*global PortfolioHolder*/

const ViewGenerator = ( function(){
  let firstContainer = document.querySelector('.left-top');
  let secondContainer = document.querySelector('.right-bottom');
  
  const homePage=()=>  {
    resetCSS();
    firstContainer.classList.add('info-left');

    let leftHTMLString = 
    `<h2>Hey There!</h2>
     <p>I'm a full stack web developer located near Austin, Tx, and am excited to meet you!</p>`;


    let rightHTMLString =
     `<h3>Interesting facts about myself:</h3>
     
     <ul class ="fact-list">
      <li class ="fact-item">I'm a massive Liverpool fan!</li>
      <li class ="fact-item">I love to camp, cook, and crack open a beer- especially in that order</li>
      <li class ="fact-item">I once represented Jamaica in an international Chess tournament.</li>
      <li class ="fact-item">I designed and created an app using JS that my previous employer now uses to analyze their data and clients.</li>
      </ul>`; 
  
    generatePage(leftHTMLString, rightHTMLString);
  };



  const contactPage=()=>  {
    resetCSS();
    firstContainer.classList.add('contact-left');
    secondContainer.classList.add('contact-right');

    let leftHTMLString = 
    `<form class="message-form" role="form">
      <h3 class="form-heading">Send me a message</h3>
      <label for="anon-name">Name</label>
      <br>
      <input type="text" required name="anon-name" id="anon-name" placeholder="Name Namington">
      <br>
      <label for="email">Email</label>
      <br>
      <input type="email" required name="anon-email" id="anon-email">
      <br>
      <label for="anon-message">Message</label>
      <br>
      <textarea maxlength="250" required name="anon-message" id="anon-message" rows="5" cols="25"></textarea>
      <br><br>
      <button type="button" class="message-btn">Send</button>
      <br>
    </form>`
     ;

    let rightHTMLString =
    ` <ul class="contact-list"> 
        <li class="contact-item">Phone: <a href="tel:+1-540-308-1284">540-308-1284</a></li>
        <li class="contact-item">Email: <a href =mailto: kristofpierre8@gmail.com">kristofpierre8@gmail.com</a></li>
      </ul>`;
  
    generatePage(leftHTMLString, rightHTMLString);
  };

  const portfolioPage=(selection)=>  {
    const selected = PortfolioHolder.portfolioStore[selection];
    resetCSS();
    firstContainer.classList.add('portfolio-left');
    secondContainer.classList.add('portfolio-right');

    let leftHTMLString = 
    `<h2>${selected.title}</h2>
     <h3>${selected.info}</h3>`;

    let rightHTMLString =
    `<div class ="project-container">
        <img class="project-vid" src="${selected.gif}" alt="gif of project">
        <div class= "lib-logo-container"></div>
     </div>`  ;
  
    generatePage(leftHTMLString, rightHTMLString);
  };

  const resetCSS =()=>{
    firstContainer.className='left-top';
    secondContainer.className='right-bottom';
  };

  const generatePage =(left, right)=>{
    firstContainer.innerHTML= left;
    secondContainer.innerHTML= right;
  };

  return {
    homePage,
    contactPage,
    portfolioPage,
  };

}() );
