// TweenLite.to('.about-inner-container', 1, {
//   x: function(index, target) {
//     console.log(index, target)
//     return (index + 1) * 100 // 100, 200, 300
//   }
// })

// window.onload =

const title = document.querySelector('.header-logo')
title.addEventListener('click', slidein)
// title.style.border = "1px solid red"

function slidein() {
  console.log(title)
  TweenLite.from(title, 2, { opacity: 0, left: '300px' })
  // TweenLite.from(title, 1, { ease: Power4.easeOut, x: -500 })
}


