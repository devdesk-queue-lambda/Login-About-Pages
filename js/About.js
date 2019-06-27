// TweenLite.to('.about-inner-container', 1, {
//   x: function(index, target) {
//     console.log(index, target)
//     return (index + 1) * 100 // 100, 200, 300
//   }
// })

window.onload = function() {
  var title = document.querySelector('.how-it-works')
  console.log(title)
  TweenLite.from(title, 2, { opacity: 0, left: '300px' })
  // TweenLite.from(logo, 1, { ease: Power4.easeOut, x: -500 })
}
