const txts=document.querySelector(".animate-text").children, txtsLen=txts.length;
let index=0;
const textInTimer=2300, textOutTimer=2000;

function animateText(){
  for(let i=0; i<txtsLen; i++){
    txts[i].classList.remove("text-in","text-out");  
  }

  txts[index].classList.add("text-in");

  setTimeout(function(){
    txts[index].classList.add("text-out");              
  },textOutTimer)

  setTimeout(function(){
    if(index == txtsLen-1){
      index=0;
    }
    else{
      index++;
    }
    animateText();
    },textInTimer); 
}
         
window.onload=animateText;

const selectElement = (s) => document.querySelector(s);

selectElement('.close-icon').addEventListener('click', () =>{
  if(selectElement('.close-icon').style.transform==="rotate(0deg)"){
    selectElement('.nav-search-text-box').style.transform="rotate(180deg)";
  }
  else{
    selectElement('.nav-search-text-box').style.transform="rotate(0deg)";
  }
});