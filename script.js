const body = document.querySelector("body")
const rocket = document.querySelector(".rocket")
const timerel = document.querySelector(".timer > p")
const scoreel = document.querySelector(".score > p")
const eventel = document.querySelector(".event > p")
const item = document.querySelector(".item")

let timer = 0;
let yPos = 320;
let Gravity = 3;
let xPos = 450;
let score = 0;
let enemydelay = 0;
let score2 = 0;
let enemyi = 0;
let countdown = 0;
let beforescore = 0;
let beforetime = 0;
let itemnumber = 1;
let enemyxPos, enemyyPos;
// let xPos , yPos = 0;
let itemxPos, itemyPos;
let itemcontents = false
let enemycontents = false
// let xPos = 900;

let goRocket;
let key = "ArrowUp";

const render2 = () => {

    goRocket = requestAnimationFrame(render2)
    countdown++
    timer++
    timerel.textContent = Math.round(timer / 60)

    if(Math.round(timer / 60) % 5 == 0 && !itemcontents){
        for(let i = 0; i < itemnumber; i++){
            itemcontents = true
            itemxPos = Math.round((Math.random() * (900 - 0)) + 0)
            itemyPos = Math.round((Math.random() * (700 - 0)) + 0)
            item.style.display = "block"
            item.style.left = `${itemxPos}px`
            item.style.bottom = `${itemyPos}px`
        }
    }else if(!(Math.round(timer / 60) % 5 == 0) ){
        itemcontents = false
    }
    
    if((Math.abs((parseInt(rocket.style.left) - parseInt(item.style.left)))) < 50 && (Math.abs((parseInt(rocket.style.bottom) - parseInt(item.style.bottom)))) < 50 && item.style.display == "block"){
        score += 100
        countdown = 0
        score2 = score
        item.style.display = "none"
        itemcontents = false;
        let itemevent = Math.round(Math.random() * 100)
        console.log(itemevent);
        if(itemevent < 70){
            Gravity += 2
            eventel.textContent = "중력 가속도 증가"
        }else if (71 < itemevent < 90){
            score += 50
            eventel.textContent = "스코어 증가"
        }else if (91 < itemevent < 99){
            score -= 50
            eventel.textContent = "스코어 감소"
        }else if (itemevent == 100){
            itemnumber += 1;
            eventel.textContent = "운석 갯수 증가"
        }
        scoreel.textContent = score 
    } 

    switch (key) {
        case "ArrowLeft":
            rocket.style.left = `${xPos}px`
            rocket.style.bottom = `${yPos}px`
            rocket.style.transform = `rotate(-90deg)`
    
            xPos -= Gravity;
            break;
        case "ArrowUp":
            rocket.style.left = `${xPos}px`
            rocket.style.bottom = `${yPos}px`
            rocket.style.transform = `rotate(0deg)`

            yPos += Gravity;
            break;
        case "ArrowDown":
            rocket.style.left = `${xPos}px`
            rocket.style.bottom = `${yPos}px`
            rocket.style.transform = `rotate(180deg)`

            yPos -= Gravity;
            break;
        case "ArrowRight":
            rocket.style.left = `${xPos}px`
            rocket.style.bottom = `${yPos}px`
            rocket.style.transform = `rotate(90deg)`

            xPos += Gravity;
            break;
    }
    
    if(xPos < 20 || xPos > 930 || yPos < 0 || yPos > 700){
        cancelAnimationFrame(goRocket);
        alert("게임 오버")
    }
    if((countdown / 60) == 10){
        cancelAnimationFrame(goRocket);
        alert("게임 오버")
    }
    // if(beforescore == score){
    //     if((Math.round(timer / 60))){
    //         countdown++
    //     }
    // }else{
    //     countdown = 0
    // }
}

render2();

window.addEventListener("keydown", (e) => {
    if(e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "ArrowUp" || e.key == "ArrowDown"){
        key = e.key;
    }
})