'use strict';

const SessionControls = (function(){
  const addToken = () => {
    const currentDate = Date.now();
    try{
      sessionStorage.setItem('last-access', currentDate);
      console.log('here')
    } catch(e){
      console.log('Unable to store last access data. Will show overlay again on next visit')
    }
  };
  const checkToken = () => {
    const lastVisit = sessionStorage.getItem('last-access');
    if (!lastVisit){
      return true;
    }
    const currentDate = Date.now();
    return  (currentDate - 600000 > lastVisit) ? true : false;
  };

  return {
    addToken,
    checkToken
  };
}() );