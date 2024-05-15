 //alert("Hello")


// document.getElementById("head").innerHTML="Binz"
// document.getElementById("para").innerHTML="hghshgasyghjjhjhu"
// document.getElementById("head").style.color="red"
// document.getElementById("head").innerText="sherin"

// let heading=document.getElementById("head")
// heading.style.backgroundColor="green"

 // let btn=document.getElementById("btn")
 //btn.style.backgroundColor="blue"

// let list=document.getElementsByClassName("tech")
// list[1].style.backgroundColor="yellow"

// let par=document.getElementsByTagName()
// par.style.backgroundColor="pink"

 //document.getElementsByTagName("li")[2].innerText="instagram"

//document.querySelector("h1").style.backgroundColor="pink"

// ADDING ATTRIBUTE

//  let list=document.querySelectorAll("li")
//  list[1].setAttribute("class","text-5xl")
//  list[0].classList.add("text-7xl","text-blue-700","fond-bold")

//  document.body.style.backgroundColor="yellow"

//  let input=document.querySelector("#input")
//  input.setAttribute("type","text")
//  input.setAttribute("placeholder","e-mail")
//  input.classList.add("rounded-xl","bg-gray-200","justify-center")


// const items=`
//       <li>list1</li>
//        <li>list2</li>
//       <li>list3</li>
//       `
// let ol=document.querySelector("ol")
// ol.innerHTML=items


// let span=document.createElement("span")
// span.setAttribute("class","text-xl")
// span.textContent="This is a span"
// document.body.appendChild(span)


// let h2=document.createElement("h2")
// h2.textContent="Java"
// document.body.appendChild(h2)


// let ul=document.querySelector("ul")
// let lists=document.querySelectorAll("li")
// for(let i of lists){
//     ul.removeChild(i)
// }


// addEventListener()

// let btn=document.querySelector("#btn")
// btn.addEventListener("click",()=>{
//     console.log("Hey I am binzi");
// })




// let btn=document.querySelector("#btn")
//  btn.addEventListener("click",()=>{
//     btn.style.backgroundColor="green"
//     btn.innerHTML="Click Me"

//     document.body.style.backgroundColor="yellow"

    
//  })


// let btn=document.querySelector("#btn")
//  btn.addEventListener("mouseover",()=>{
//     btn.style.backgroundColor="green"
//     btn.innerHTML="Click Me"

//     document.body.style.backgroundColor="yellow"

    
//  })


//? CLOCK

// let btn=document.querySelector("#btn")
//   btn.addEventListener("click",()=>{
    
//   if(btn.innerText==="dark"){
//     btn.innerText="light"
//     document.body.style.backgroundColor="black"
//     document.getElementById("clr").style.color="white"
//     btn.style.backgroundColor="white"
//     btn.style.color="black"
//   }
//   else if(btn.innerText==="light"){
//     btn.innerText="dark"
//     document.body.style.backgroundColor="white"
//     document.getElementById("clr").style.color="black"
//     btn.style.backgroundColor="black"
//     btn.style.color="white"
//   }
//   else{
//     btn.innerHTML=""
//   }


// })

//no need  let clock=document.querySelector("#clock")
//no need clock.innerHTML=new Date()

// let hours=document.querySelector("#hours")
// let minutes=document.querySelector("#min")
// let seconds=document.querySelector("#sec")
// let section=document.querySelector("#am")

// let displayTime=()=>{
  
  
// let hrs=new Date().getHours()

// let min=new Date().getMinutes()

// let sec=new Date().getSeconds()

// if(hrs>=12){
//   section.innerHTML="PM"
// }else{
//   section.innerHTML="AM"
// }

// if(sec < 10){
//   sec = "0" + sec
// }
// if(min < 10){
//   min = "0" + min
// }

// if(hrs < 10){
//   hrs="0"+hrs
// }

// if(hrs>12){
//   hrs=hrs-12
// }
// hours.innerHTML=hrs
// minutes.innerHTML=min
// seconds.innerHTML=sec
// }
// setInterval(displayTime,10)


// show text when click the button

// let text=document.querySelector("#txt")
// let btn=document.querySelector("#btn")
// btn.addEventListener("click",()=>{
// text.innerHTML="Hey I am here"

// })

// random number

// console.log(Math.random());

// console.log(Math.ceil(Math.random()*15));





// let arr=["item1","item2","item3"]
// let randomItem=arr[Math.floor(Math.random()*arr.length)]
// console.log(randomItem);



const btn=document.querySelector("#btn")
let randomColor=()=>{
  let val="123456789ABCDEF"
  let hash="#"
  for(i=0;i<6;i++){
    hash=hash+val[Math.floor(Math.random()*val.length)]
    btn.innerHTML=hash
  }
  return hash
    
}
let changeColor=()=>{
  document.body.style.backgroundColor=randomColor()
}
btn.addEventListener("click",changeColor)
