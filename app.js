const logo = document.querySelector('svg')
const container = document.querySelector('.container')
const homePTag = document.querySelector('.container p')
const orderNowButton = document.querySelector(".orderNowButton")








let start=0;

function appearWhenWidthIsOk(currentTime){
    let containerHeight = container.style.height;
    let elapsed= currentTime-start;
  
        if (elapsed>=1500){
            homePTag.style.display="unset"
            orderNowButton.style.display="unset"
            return
    
        }
        else{
            homePTag.style.display="none";
            orderNowButton.style.display="none";
            window.requestAnimationFrame(appearWhenWidthIsOk);
           
    
        }

}






window.requestAnimationFrame(appearWhenWidthIsOk);