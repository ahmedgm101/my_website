let settings =document.querySelector('.box-gear')

let mainContainer = document.querySelector('.settings');

settings.onclick = function (){
    mainContainer.classList.toggle('open')
}

let colorLi = document.querySelectorAll('.lists li')


colorLi.forEach(li =>{

    li.addEventListener("click", (e) =>{
       const setColor = e.target.dataset.color;
        document.documentElement.style.setProperty('--main-color', setColor);
       
    })
    li.addEventListener("onmousemove", (e) =>{
       const setColor = e.target.dataset.color;
       document.documentElement.style.setProperty('--hover-color', setColor);
       
    })
})



let span = document.querySelector('.backToUp');
console.log(span);

window.onscroll = function (){
    if(this.scrollY >= 1400){
        span.classList.add("btn-show")
        mainContainer.classList.remove('open')
    } else{
        span.classList.remove("btn-show")
    }
}

span.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",    })
}