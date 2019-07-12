'use strict';

/*global PortfolioHolder*/


const ViewGenerator = ( function(){
  let firstContainer = document.querySelector('.left-top');
  let secondContainer = document.querySelector('.right-bottom');
  
  const homePage=()=>  {
    resetCSS();
    firstContainer.classList.add('info-left');

    let leftHTMLString = 
    `<div class= "welcome-text">
    <h2>Hey There!</h2>
     <p>I'm a full stack web developer located near Austin, Tx, and am excited to meet you!</p>
     <br>
     <p>Drop me a line: via<a href = "mailto: kpac.ja@gmail.com">email: kpac.ja@gmail.com</a>, or <a href="tel:5403081284">phone: 540-308-1284</a></p>
     </div>`


    let rightHTMLString =
     `<h3>Interesting facts about myself:</h3>
     
     <ul class ="fact-list">
      <li class ="fact-item"><p>I'm a massive Liverpool fan!</p></li>
      <li class ="fact-item"><p>I love to camp, cook, and crack open a beer- especially in that order.</p></li>
      <li class ="fact-item"><p>I once represented Jamaica in an international Chess tournament.</p></li>
      <li class ="fact-item"><p>I designed and created an app using JS that my previous employer now uses to analyze their data and clients.</p></li>
      </ul>`; 
  
    generatePage(leftHTMLString, rightHTMLString);
  };



  const contactPage=()=>  {
    resetCSS();
    firstContainer.classList.add('portfolio-left');
    secondContainer.classList.add('con-right');

    let leftHTMLString = 
    `<div>
      <iframe src="https://resume.creddle.io/embed/e5itbn56xtr"
      width="850" height="1100" seamless></iframe> 
    </div>`
     ;

    let rightHTMLString =
    ` <ul class="contact-list"> 
        <li class="contact-item">Phone: <a href="tel:+1-540-308-1284">540-308-1284</a></li>
        <li class="contact-item">Email: <a href =mailto: kristofpierre8@gmail.com">kristofpierre8@gmail.com</a></li>
      </ul>`;
  
    generatePage(leftHTMLString, rightHTMLString);
  };

  const aboutPage=()=>  {
    resetCSS();
    firstContainer.classList.add('about-left');
    secondContainer.classList.add('about-right');

    let leftHTMLString = 
    `<div class="me-container"><img class="myself" src="img/portfolio_picture.jpg" alt="A picture of myself"><p class="about-small-text">It started with a problem- <i>I'm lazy</i>. Why should I do a repetitive task when my efforts can be better utilized elsewhere?<br><br>
    At my previous job I was a developer, but not for the web. We researched resources for our clients, and created and used diagnostics to better measure and understand how to help them improve. It was a tutoring firm, handling the data of thousands of students throughout Texas, yet some of our processes were archaic. Upon recognizing this, I took it upon myself to find a better way. I spent my evenings at home learning the ins and outs of JavaScript. Many frustrating late nights, and roadblocks, culminated in me presenting my company with a better way to analyze our students that they still use to this day. This spurred my hunger and excitement to become a professional programmer, which is what I am today.</p></div>`;

    let rightHTMLString =
    ` <p class="about-text">It started with a problem- <i>I'm lazy</i>. Why should I do a repetitive task when my efforts can be better utilized elsewhere?<br><br>
    At my previous job I was a developer, but not for the web. We researched resources for our clients, and created and used diagnostics to better measure and understand how to help them improve. It was a tutoring firm, handling the data of thousands of students throughout Texas, yet some of our processes were archaic. Upon recognizing this, I took it upon myself to find a better way. I spent my evenings at home learning the ins and outs of JavaScript. Many frustrating late nights, and roadblocks, culminated in me presenting my company with a better way to analyze our students that they still use to this day. This spurred my hunger and excitement to become a professional programmer, which is where I am today.</p>
    `;
  
    generatePage(leftHTMLString, rightHTMLString);
  };

  const portfolioPage=(selection)=>  {
    resetCSS();
    firstContainer.classList.add('portfolio-left');
    secondContainer.classList.add('portfolio-right');

    let leftHTMLString = 
    `<h2>${selection.title}</h2>
     <h3>${selection.info}</h3>
     <a href='${selection.url}'>Visit Site</a>
     <a href='${selection.repo}'>Visit Repo</a>

     `;

    let rightHTMLString =
    `<div class ="project-container">
        <img class="project-vid" src="${selection.gif}" alt="gif of project">
        <div class= "lib-logo-container"></div>
     </div>`;
  
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
    aboutPage,
  };

}() );
