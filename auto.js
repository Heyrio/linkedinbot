const btnBoi = document.querySelectorAll(".js-discover-person-card__action-btn");

while(true){

window.addEventListener('load', (event) => {
    for(let i =0; i < 28; i++){
  setInterval(()=>{
    if(i < 28){
      btnBoi[i].click()
    }else{
    }
  },2000)
  location.reload(true);
  
  }
});
}
