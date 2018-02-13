function slider(classElement, number) {
    let self = this
    let element = document.getElementsByClassName(classElement)[number]

    let item = element.getElementsByClassName('slider-item')
    let n = item.length
    let position = 0

    this.init = () => {
        setPosition()
        element.getElementsByClassName('next')[0].onclick = next
    }

    function prev() {
        position -= 1

    }

    function next() {
        position += 1
        setPosition()
        console.log('position: ', position)
    }

    function setPosition() {
        for (let i = 0; i < n; i++) {
            item[i].style = `left: ${position + ( 100 * i )}%;`
        }
    }

    function setPositionReverse() {
        for (let i = n-1; i >= 0; i++) {
            item[i].style = `left: ${position + ( 100 * i )}%;`
        }
    }
}

window.onload = () => {
    let sliderOne  = new slider('slider', 0)
    sliderOne.init()
}