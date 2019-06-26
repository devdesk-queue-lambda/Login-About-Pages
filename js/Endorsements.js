class Carousel {
    constructor (carousel) {
      // creating a copy of the carousel div to recieve cool extra functionality
      this.carousel = carousel
      // create selectors for left and right buttons (from carousel element)
      this.leftButton = this.carousel.querySelector('.left-button')
      this.rightButton = this.carousel.querySelector('.right-button')
      // select a Nodelist of the carousel images (from carousel element)
      this.quotes = this.carousel.querySelectorAll('.carousel-quote')
    //   this.quotes.forEach(quote => {
    //       quote.style.display = 'none'; 
    //   })
      // we're starting the index at 0. it will increment/decr when pic changes
      this.currentIndex = 0
      // default image set to 0th index in nodelist by making it visible
      this.quotes[this.currentIndex].style.display = 'inline';
      console.log(this.quotes[this.currentIndex]);
      // event listeners set to activate methods in this class
      this.leftButton.addEventListener('click', () => this.previousSlide())
      this.rightButton.addEventListener('click', () => this.nextSlide())
      // example of explicit binding
      // this.leftButton.addEventListener('click', this.previousSlide.bind(this))
  
    //   window.setInterval(()=> {
    //     return this.nextSlide()
    //   }, 5000)
    }
  
    previousSlide() {
      // use current index to change current image styling to be hidden
      this.quotes[this.currentIndex].style.display = 'none'
      // decrement current index by 1 because we're going to the previous slide
      this.currentIndex -= 1
      // conditional if we are at the end of the list, start over
      if (this.currentIndex < 0) {
        // this.images.length-1 is more dynamic than saying '4'
        this.currentIndex = this.quote.length-1
      }
      // change of image we want to show style to visible
      this.quotes[this.currentIndex].style.display = 'inline'
      // TweenLite.from(this.images[this.currentIndex], 1.5, {
      //   ease: Power4.easeOut, x: -500 })
  
      // future animaion to be configured
    }
  
    nextSlide() {
      const beforeQuote = this.quote[this.currentIndex]
      // console.log('before', beforeImg)
  
      // for this method, increment the current index to go to next node/image
      this.currentIndex += 1
      if (this.currentIndex >= this.quote.length) {
        this.currentIndex = 0
      }
  
      this.quotes[this.currentIndex].style.display = 'inline'
  
      // TweenLite.from(this.images[this.currentIndex], 1, {
      //   ease: Power4.easeOut, opacity: 0, x: 500 })
  
        // console.log('after', beforeImg, this.images[this.currentIndex])
  
        // TweenLite.to(beforeImg, 1, {
        //   ease: Power4.easeOut, opacity: 0, x: -100 })
  
      beforeQuote.style.display = 'none'
    }
  }
  
  // select the whole carousel element so we can add functionality
  let carousel = document.querySelector('.carousel');
  // instantiate the class constructor function and give our 'dumb' component
  new Carousel(carousel)