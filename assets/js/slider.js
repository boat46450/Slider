function slider(classElement, number) {
    let self = this
    let element = document.getElementsByClassName(classElement)[number]

    let item = element.getElementsByClassName('slider-item')
    let n = item.length
    let position = 0

    this.init = () => {
        setPosition(0)
        element.getElementsByClassName('next')[0].onclick = next
        element.getElementsByClassName('prev')[0].onclick = prev
    }

    function prev() {
        let newPosition = position - 1 == -1 ? n - 1 : position - 1
        setPosition(newPosition)
        console.log('prev position: ', position)        
    }

    function next() {
        let newPosition = position + 1 == n ? 0 : position + 1        
        setPosition(newPosition)
        console.log('next position: ', position)
    }

    function setPosition(newPosition) {
        position = newPosition
        for (let i = 0; i < n; i++) {
            item[i].style = `left: ${100 * (i - position)}%`
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