const MAXITER = 100


let Complex = class {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    pow() {
        let real = this.real ** 2.0 - this.imaginary ** 2.0
        let imaginary = 2.0 * this.real * this.imaginary
        return new Complex(real, imaginary)
    }
    abs() {
        return (this.real ** 2.0 + this.imaginary ** 2.0) // should be a square root of expression,
                                                    // but in order to speed this up a little bit, we will use it like this
    }
    add(r, i) {
        let real = this.real + r
        let imaginary = this.imaginary + i
        return new Complex(real, imaginary)
    }
}

let mandelbrot = (z) => {
    let c = z
    for (let i = 0; i < MAXITER; i++) {
        if (z.abs() > 4) {
            return i
        }
        z = z.pow().add(c.real, c.imaginary)
    }
    return 0
}

let mandelbrot_set = (canvas) => {
    let ctx = canvas.getContext('2d')
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
    let img = ctx.createImageData(ctx.canvas.width, ctx.canvas.height)
    for (let x = 0; x < ctx.canvas.width; x++) {
        for (let y = 0; y < ctx.canvas.height; y++) {
            let cx = -2 + x/300
            let cy = -2 + y/300
            let i = mandelbrot(new Complex(cx, cy))
            if (i === 0) {
                ctx.fillStyle = '#000'
                ctx.fillRect(x, y, 1, 1)
            } else {
                ctx.fillStyle = `hsl(0, 100%, ${i}%)`
                ctx.fillRect(x, y, 1, 1)
            }
           
        }
    }

}

let canvas = document.getElementById('canvasMandelbrot')
mandelbrot_set(canvas)