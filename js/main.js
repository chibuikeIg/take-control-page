window.onload = () => {
    newRiskPannel();
    marketDirectoryPannel();


   const sharebtn = document.getElementById('sharebtn');
   const shareContainer = document.getElementById('share-container');
   const iconContainer = document.getElementById('icon-container');
   const clickedBtn = document.getElementById('clickedBtn');
         sharebtn.addEventListener('click',() => {
             shareContainer.setAttribute('class','onclicksharebtn');
             iconContainer.setAttribute('class','share-icons');
             iconContainer.style.display = 'block';
             document.querySelector('.banner-contents').style.paddingBottom = '20px';
             clickedBtn.style.display = 'block';
             sharebtn.style.display = 'none';
         })
    
        clickedBtn.addEventListener('click',()=>{
            shareContainer.setAttribute('class','share');
             iconContainer.removeAttribute('class');
             iconContainer.style.display = 'none';
             document.querySelector('.banner-contents').style.paddingBottom = '0px';
             clickedBtn.style.display = 'none';
             sharebtn.style.display = 'block';
        })
  
        
}


newRiskPannel = () => {
    const newRiskTab = document.getElementById('new-risk-tab');
    const pannel = document.querySelector('.new-risk-tab-pannel');
    const newTabLink = document.getElementById('tab-link');
    newRiskTab.onmouseover = () => {
        pannel.style.display = 'block';
        newRiskTab.style.backgroundColor = "#f1f1f1";
        newTabLink.style.textDecoration = "underline";
    }

    pannel.onmouseover = () => {
        pannel.style.display = 'block';
        newRiskTab.style.backgroundColor = "#f1f1f1";
        newTabLink.style.textDecoration = "underline";
    }

    newRiskTab.onmouseout = () => {
        pannel.style.display = 'none';
        newTabLink.style.textDecoration = "none";
        newRiskTab.style.backgroundColor = "#ccc";
    }

    pannel.onmouseout = () => {
        pannel.style.display = 'none';
        newRiskTab.style.backgroundColor = "#ccc";
        newTabLink.style.textDecoration = "none";
        
    }
}


marketDirectoryPannel = () => {

    const mTab = document.getElementById('m-tab');
    const pannel = document.querySelector('.market-directory-tab-pannel');
    const mTabLink = document.getElementById('m-tab-link');
    mTab.onmouseover = () => {
        pannel.style.display = 'block';
        mTab.style.backgroundColor = "#f1f1f1";
        mTabLink.style.color = "#000";
        mTabLink.style.textDecoration = "underline";
    }

    pannel.onmouseover = () => {
        pannel.style.display = 'block';
        mTab.style.backgroundColor = "#f1f1f1";
        mTabLink.style.color = "#000";
        mTabLink.style.textDecoration = "underline";
    }

    mTab.onmouseout = () => {
        pannel.style.display = 'none';
        mTabLink.style.textDecoration = "none";
        mTab.style.backgroundColor = "#282f54";
        mTabLink.style.color = "#fff";
    }

    pannel.onmouseout = () => {
        pannel.style.display = 'none';
        mTab.style.backgroundColor = "#282f54";
        mTabLink.style.textDecoration = "none";
        mTabLink.style.color = "#fff";
        
    }
}