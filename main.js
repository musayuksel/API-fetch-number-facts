function fetchApi(url){
  fetch(url)
  .then(response => response.text())
  .then(data => {
    if(data !== 0 || data !==""){
      factText.innerText =data
      fact.style.display ='block'
    }
  })
  .catch(error=>console.log('Opps : ',error))
}
const fact = document.getElementById('fact');
const factText = document.getElementById('factText');
document.getElementById('numberInput').addEventListener('input',(event)=>{
  const url= `http://numbersapi.com/${event.target.value !==''?event.target.value : 0}`;
  fetchApi(url)
})
