console.log("hi")

const string = "IF YOU WANT YOUR NEWS TO BE"
let str = string.split("")
let header = document.getElementById("wow")
;(function animate() {
  let running = setTimeout(animate, 40)
  str.length > 0 ? (header.innerHTML += str.shift()) : clearTimeout(running)
})()

const many = document.getElementById("many")
const icon = document.querySelector("#icon")

function classAdding() {
  setTimeout(function () {
    many.style.display = "block"
    if (document.querySelector("#many").style.display != "none") {
      // many.addEventListener('animationend', () => {
      //     icon.style.display = 'block'
      // })
      setTimeout(function () {
        icon.style.display = "block"
      }, 2000)
    }
  }, 9000)
}
classAdding()

const hide = document.querySelector("#disappear")
const cross = document.querySelector("#cross")
const crest = document.querySelector(".crest-img")
const icon1 = document.querySelector("#icon1")

icon1.addEventListener("animationend", () => {
  crest.style.display = "block"

  const slogan = document.querySelector("#slogan")
  //   if (hide.style.opacity === '1') {
  //     hide.style.opacity = '0'
  //     slogan.style.display = 'block'
  //   }

  //   if (slogan.style.display === 'block') {
  //       cross.style.display = 'block'
  //   }
})

icon1.addEventListener("animationend", () => {
  hide.style.opacity = "0"
  if (hide.style.opacity === "0") {
    slogan.style.display = "block"
  } 

  slogan.addEventListener("animationend", () => {
    if (slogan.style.display === 'block') {
      cross.style.display = 'block'
    }
  })
})

const have = document.querySelector("#have")
const elem = document.querySelector('.crest-img');
    // elem.classList.add('animate__animated');

elem.addEventListener('animationend', () => {
    if (cross.style.display === 'block') {
      have.style.display = "block"
        // cross.style.display = 'none'
        // icon.style.display = 'none'
    }
});

// const remov = document.querySelector('.remove');
const logo = document.querySelector('#logo2');
const imageMain = document.querySelector("#logo")
const wrap = document.querySelector(".wrapper")

// const logoLrn = document.querySelector('.image__lrn');

have.addEventListener('animationend', () => {
  cross.classList.add('remove')
  icon.classList.add('remove')

  if (document.querySelector("#cross").classList.contains("remove")) {
    imageMain.style.display = "block"
  } 
});

imageMain.addEventListener('animationend', () => {
  // slogan.classList.add('force')
  // have.classList.add('force')
    if (imageMain.style.display === 'block') {
      wrap.classList.add('force');
    } if (document.querySelector(".wrapper").classList.contains("force")) {
      hide.classList.add('move')
      logo.style.display = 'block'
    } 
  })


  



// document.querySelector("#icon")
// document.querySelector("#cross")



// function boo() {
//   if (document.querySelector(".cross").classList.contains("remove")) {
//     alert('gifg')
//   }
// }

// boo();







                                                                    
// const remov = document.querySelector('.remove');

//                                 have.addEventListener("animationend", () => {
//                                 //   if (slogan.style.display === "block") {
//                                 //     have.style.display = "block"
//                                 //   }
//                                   if (have.style.display === "block") {
//                                 // cross.classList.add("animate__animated", 'animate__bounceOutLeft')
//                                 // icon.classList.add("animate__animated", 'animate__bounceOutLeft')
//                                     // cross.style.display = "none"
//                                     // icon.style.display = "none"
//                                     remov.style.display = "block"
//                                   }
//                                   remov.addEventListener('animationend', () => {
//                                     if (remov.style.display === 'block') {
//                                       remov.style.display = 'none'
//                                     }
//                                   })
//                                 })

// const logo = document.querySelector('.image__lrn');
//     logo.classList.add('animate__animated');

// have.addEventListener('animationend', () => {
//     if (have.style.display === 'block') {
//         logo.style.display = 'block'
//     }
// });

                                              // const imageMain = document.querySelector("#logo")
                                              // have.classList.add("animate__animated", "animate__fadeIn")

                                              // have.addEventListener("animationend", () => {
                                              //   imageMain.style.display = "block"
                                              // })

                                              // const bubble = document.getElementById("bubble")
                                              // bubble.classList.add("animate__animated", "animate__fadeIn")

                                              // imageMain.addEventListener("animationend", () => {
                                              //   bubble.style.display = "block"
                                              // })

// const image = document.querySelector(".image__lrn")
// const balanceAnimation = document.getElementById("balance-animation")
// const balance = document.getElementById("balanced")
// const owl = document.getElementById("owl")
// const bubble = document.getElementById("bubble")
// const textImg = document.querySelector(".image__text")

// imageMain.classList.add("animate__animated",'animate__zoomInDown')

// have.addEventListener("animationend", () => {
// //   image.style.display = "block" //none for now only, has to be block
// //   balanceAnimation.style.display = "block"
// //   owl.style.display = "block"
// //   bubble.style.display = "none"
// //   textImg.style.display = 'block'

// })

// image.addEventListener("animationend", () => {
//   balance.style.display = "block"
// })

// balanceAnimation.classList.add("animate__animated", "animate__fadeIn")

// balance.addEventListener("animationend", () => {
//   balanceAnimation.style.display = "block"
// })

// owl.classList.add("animate__animated", "animate__fadeIn")

// balance.addEventListener("animationend", () => {
//   owl.style.display = "block"
// })

// bubble.classList.add("animate__animated", "animate__fadeIn")

// owl.addEventListener("animationend", () => {
//   bubble.style.display = "block"
//   slogan.style.display = "none"
// })
