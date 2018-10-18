const MAXITER = 100;

let Complex = class {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    pow() {
        let real = this.real ** 2 - this.imaginary
        let imaginary = 2 * this.real * this.imaginary
        return new Complex(real, imaginary)
    }
    abs() {
        return this.real ** 2 + this.imaginary ** 2 // should be a square root of expression,
                                                    // but in order to speed this up a little bit, we will use it like this
    }
    add(r, i) {
        let real = this.real + r
        let imaginary = this.imaginary + i
        return new Complex(real, this.imaginary)
    }
}
let mandelbrot = (z, MAXITER) => {
    let c = z
    for (i = 0; i < MAXITER; i++) {
        if (c.abs() > 4) {
            return i
        }
        z = z.pow().add(c.real, c.imaginary) 
    }
}

let mandelbrot_set = (canvas, xmin, xmax, ymin, ymax, MAXITER) => {
    let ctx = canvas.getContext('2d')
    width = canvas.width
    height = canvas.height
    let img = ctx.createImage(0, 0, width, height)
    let px = img.data
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

        }
    }
    
}
let canvas = document.getElementById('canvasMandelbrot')