console.log('slider')

const slides = [
{
   imgSrc: './img/01.jpg',
   isActive: true
},
{
	imgSrc: './img/02.jpg',
	isActive: false
},
{
	imgSrc: './img/03.jpg',
	isActive: false
},
{
	imgSrc: './img/04.jpg',
	isActive: false
},
{
	imgSrc: './img/05.jpg',
	isActive: false
},
]

const app = new Vue ( {
	el: '#root',
	data: {
		slides: slides,
		index: 0,
	},
	methods: {
		goPrevslide() {
			const slideActive = slides[this.index]
			slideActive.isActive = false
			if (this.index === 0) {
				this.index = this.slides.length - 1
			} else {
				this.index = this.index - 1
			}
		},

		goNextslide() {
			const slideActive = slides[this.index]
			slideActive.isActive = false;

			if (this.index === this.slides.length - 1) {
				this.index = 0;
			} else {
				this.index = this.index + 1;
			}

			const nextSlide = slides[this.index];
			nextSlide.isActive = true;
		}
	}
})
