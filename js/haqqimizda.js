/* haqqimizda html start */
 
let tarixim = document.querySelector('.tarixim');
let meqsedim = document.querySelector('.meqsedim');
let strukturumuz  = document.querySelector('.strukturumuz');
let deyer= document.querySelector('.deyer');
let haqqimizda = document.querySelector('.haqqimizda a');

const aClass = document.querySelector('.aclass p');
const mehsullar = document.querySelector('.mehsullar a');
const aClass2 = document.querySelector('.aclass2 p');
const hideBar = document.querySelector('.hide-bar');
const hideBarMehsul = document.querySelector('.hide-bar-mehsul');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.ham-lang i');
const hamIcon = document.querySelector('.ham-icon i');
const language = document.querySelectorAll('.language a');
const searchIcon = document.querySelector('.inp i');
const mobilSearch = document.querySelector('.search .inp i')
const mobilInp = document.querySelector('.search .inp .input')
const inp = document.querySelector('.input');
let togle = false;

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

haqqimizda.onclick=function(e){
    e.preventDefault();
}
 
    tarixim.addEventListener('click', () => {
    document.querySelector('.yol p').innerHTML='Tariximiz';
    document.querySelectorAll('.tab').forEach(e=>
        e.classList.remove('actives'))
    document.querySelector('.menu1').classList.add('actives')
    document.querySelector('.tarixim .image').classList.add('active'),
    document.querySelector('.meqsedim .image1').classList.remove('active1'),
    document.querySelector('.strukturumuz .image2').classList.remove('active2'),
    document.querySelector('.deyer .image3').classList.remove('active3');
     
 })

 meqsedim.addEventListener('click', () => {
     document.querySelector('.yol p').innerHTML='Məqsəd';
    document.querySelectorAll('.tab').forEach(e=>
        e.classList.remove('actives'))
    document.querySelector('.menu2').classList.add('actives')
    document.querySelector('.meqsedim .image1').classList.add('active1'),
    document.querySelector('.tarixim .image').classList.remove('active'),
    document.querySelector('.strukturumuz .image2').classList.remove('active2'),
    document.querySelector('.deyer .image3').classList.remove('active3');
     
 })

 strukturumuz.addEventListener('click', () => {
    document.querySelector('.yol p').innerHTML='Struktur';
    document.querySelectorAll('.tab').forEach(e=>
        e.classList.remove('actives'))
    document.querySelector('.menu3').classList.add('actives')
    document.querySelector('.strukturumuz .image2').classList.add('active2'),
    document.querySelector('.tarixim .image').classList.remove('active'),
    document.querySelector('.meqsedim .image1').classList.remove('active1'),
    document.querySelector('.deyer .image3').classList.remove('active3');
     
 })

 deyer.addEventListener('click', () => {
    document.querySelector('.yol p').innerHTML='Dəyərlərimiz';
    document.querySelectorAll('.tab').forEach(e=>
        e.classList.remove('actives'))
    document.querySelector('.menu4').classList.add('actives')
    document.querySelector('.deyer .image3').classList.add('active3'),
    document.querySelector('.tarixim .image').classList.remove('active'),
    document.querySelector('.meqsedim .image1').classList.remove('active1'),
    document.querySelector('.strukturumuz .image2').classList.remove('active2')
     
 })

 haqqimizda.addEventListener('click',(e)=>{
    e.preventDefault()  
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


 /* haqqimizda html end */