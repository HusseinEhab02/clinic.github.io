let offerContainer = document.querySelector(".offers .container .inner-offers")
let bel  =document.querySelector("body")
let dmode = document.querySelector(".dm")
dmode.addEventListener("click" ,()=>{
    bel.classList.toggle("bl")
})
let offersBigCont = document.querySelector(".offers-big-container")
let prevbtn = document.querySelector(".prev")
let nextbtn = document.querySelector(".next")

let afterOffer = window.getComputedStyle(offersBigCont , "::after")
let beforeOffer = window.getComputedStyle(offersBigCont , "::before")
offersBigCont.style.setProperty(`--bw` , "300px")
offersBigCont.style.setProperty(`--aw` , "300px")
// setInterval(()=>{
//     offerContainer.style.transform = `translateX(-600px) `
//     // console.log(1)
// },500)
let offers = document.querySelectorAll(".offer")
// console.log(offers)
let index = 1
nextbtn.addEventListener("click" ,()=>{
    index++
    if(index == 4){
        index = -1
    }
    console.log(index)
    offerContainer.style.transform = `translateX(${-(index -1) * 300}px) `
    if(index == 3){
        
        offersBigCont.style.setProperty(`--aw` , "0px")
    }
    else{
        offersBigCont.style.setProperty(`--aw` , "300px")
    }
    if(index == -1){
        offersBigCont.style.setProperty(`--bw` , "0px")
    }
    else{
        offersBigCont.style.setProperty(`--bw` , "300px")
    }
})
prevbtn.addEventListener("click" ,()=>{
    index--
    if(index == -2){
        index =3
    }
    offerContainer.style.transform = `translateX(${-(index -1) * 300}px) `
    if(index == -1){
        offersBigCont.style.setProperty(`--bw` , "0px")
    }
    else{
        offersBigCont.style.setProperty(`--bw` , "300px")
    }
    if(index == 3){
        
        offersBigCont.style.setProperty(`--aw` , "0px")
    }
    else{
        offersBigCont.style.setProperty(`--aw` , "300px")
    }
})
