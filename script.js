const nobe=document.querySelector('.nobe')
let theme='white'
console.log(nobe)
nobe.addEventListener('click',()=>{
   if(theme=='white'){
    theme='black'
    nobe.classList.toggle('js-nobe-onclick')
    document.body.style.backgroundColor='black'
   }
   else{
    theme='white'
    nobe.classList.toggle('js-nobe-onclick')
    document.body.style.backgroundColor='white'
   }
    
})