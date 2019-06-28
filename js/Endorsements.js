class Carousel {
    constructor (carousel) {
      this.carousel = carousel
      this.leftButton = this.carousel.querySelector('.left-button i')
      this.rightButton = this.carousel.querySelector('.right-button i')
      this.quotes = this.carousel.querySelectorAll('.carousel-card')
      this.currentIndex = 0
      this.quotes[this.currentIndex].style.display = 'inline'

      this.leftButton.addEventListener('click', () => this.previousSlide())
      this.rightButton.addEventListener('click', () => this.nextSlide())
      // example of explicit binding
      // this.leftButton.addEventListener('click', this.previousSlide.bind(this))

      window.setInterval(()=> {
        return this.nextSlide()
      }, 5000)
    }

    previousSlide() {
      this.quotes[this.currentIndex].style.display = 'none'
      this.currentIndex -= 1
      if (this.currentIndex < 0) {
        this.currentIndex = this.quotes.length-1
      }
      this.quotes[this.currentIndex].style.display = 'inline'
    }

    nextSlide() {
      this.quotes[this.currentIndex].style.display = 'none'
      this.currentIndex += 1
      if (this.currentIndex >= this.quotes.length) {
        this.currentIndex = 0
      }

      this.quotes[this.currentIndex].style.display = 'inline'
    }
  }

  let carousel = document.querySelector('.carousel');

  new Carousel(carousel)
