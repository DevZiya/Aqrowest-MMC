const haqqimizda = document.querySelector('.haqqimizda a');
const mehsullar = document.querySelector('.mehsullar a');
const hideBar = document.querySelector('.hide-bar');
const hideBarMehsul = document.querySelector('.hide-bar-mehsul');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.ham-lang i');
const hamIcon = document.querySelector('.ham-icon i');
const language = document.querySelectorAll('.language a');
const aClass = document.querySelector('.aclass p');
const aClass2 = document.querySelector('.aclass2 p');
const inp = document.querySelector('.input');
const searchIcon = document.querySelector('.inp i');
const mobilSearch = document.querySelector('.search .inp i')
const mobilInp = document.querySelector('.search .inp .input')
let togle=false;


searchIcon.addEventListener('click', () =>{
    togle=!togle
    if(togle){
        inp.style.width = '307px'
        inp.style.opacity = '1'
    }else{
        inp.style.width = '33px'
        inp.style.opacity = '0'
    }
})

mobilSearch.addEventListener('click', () =>{
    togle=!togle
    if(togle){
        mobilInp.style.width = '107px'
        mobilInp.style.opacity = '1'
    }else{
        mobilInp.style.width = '33px'
        mobilInp.style.opacity = '0'
    }
})


hamburgerIcon.addEventListener('click', () =>{
    hamburgerMenu.style.left='-500px'
})

hamIcon.addEventListener('click', () =>{
    hamburgerMenu.style.left='0'
})

language.forEach(a =>{
    a.addEventListener('click', () =>{
      language.forEach(z=>{
          z.classList.remove('active')
      })
        a.classList.add('active');
    })
    
})

document.querySelector('.aclass1').addEventListener('click',e=>{
    e.preventDefault();
    togle=!togle

    if(togle){
        document.querySelector('.ham-hide-bar').style.display='block';
        document.querySelector('.ham-hide-bar').style.display='flex';
        document.querySelector('.aclass1').style.color = '#FFC91E';
        document.querySelector('.ham-hide-bar').style.flexDirection = 'colum';
        document.querySelector('.aclass1 p').style.transform = 'rotate(90deg)';
        document.querySelector('.aclass1 p').style.color = '#FFC91E';

    }else{
        document.querySelector('.ham-hide-bar').style.display='none';
        document.querySelector('.aclass1').style.color = 'white';
        document.querySelector('.aclass1 p').style.transform = 'rotate(0deg)';
        document.querySelector('.aclass1 p').style.color = 'white';
    }
    
})

document.querySelector('.aclas2').addEventListener('click',(el)=>{
    el.preventDefault();
    togle=!togle

    if(togle){
        document.querySelector('.ham-hide-bar-mehsul').style.display='block';
        document.querySelector('.ham-hide-bar-mehsul').style.display='flex';
        document.querySelector('.aclas2').style.color = '#FFC91E';
        document.querySelector('.ham-hide-bar-mehsul').style.flexDirection = 'colum';
        document.querySelector('.aclas2 p').style.transform = 'rotate(90deg)';
        document.querySelector('.aclas2 p').style.color = '#FFC91E';

    }else{
        document.querySelector('.ham-hide-bar-mehsul').style.display='none';
        document.querySelector('.aclas2').style.color = 'white';
        document.querySelector('.aclas2 p').style.transform = 'rotate(0deg)';
        document.querySelector('.aclas2 p').style.color = 'white';
    }
})

haqqimizda.addEventListener('click',(e)=>{
    e.preventDefault()
    togle=!togle
    if(togle){
        hideBar.style.display='block';
        hideBar.style.display='grid';
        hideBar.style.gridTemplateColumns='repeat(2, 1fr)';
        aClass.style.transform='rotate(90deg)';
        aClass.style.color='#FFC91E';
         haqqimizda.style.color='#FFC91E';
        
    }else{
        haqqimizda.style.color='white';
        hideBar.style.display='none';
        aClass.style.transform='rotate(0deg)';
        aClass.style.color='white';
        
    }
  
})




mehsullar.addEventListener('click',(e)=>{
    e.preventDefault()
    togle=!togle
    if(togle){
        mehsullar.style.color='#FFC91E'
        hideBarMehsul.style.display='block'
        hideBarMehsul.style.display='grid'
        hideBarMehsul.style.gridTemplateColumns='repeat(2, 1fr)'
        aClass2.style.transform='rotate(90deg)';
        aClass2.style.color='#FFC91E';
    }else{
        hideBarMehsul.style.display='none'
        aClass2.style.transform='rotate(0deg)';
        aClass2.style.color='white';
        mehsullar.style.color='white';
    }
  
})


/* header end */


const elaqeClass = document.querySelectorAll('.elaqeclass');

elaqeClass.forEach(elaqe=>{
    elaqe.addEventListener('click', (e)=>{
        e.preventDefault();
    })
})