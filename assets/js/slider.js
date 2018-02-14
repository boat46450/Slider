function slider(classElement, number) {
    let self = this
    let element = document.getElementsByClassName(classElement)[number]

    let items = [...element.getElementsByClassName('slider-item')]
    let n = items.length
    let positions = [null, 0, null]

    this.init = () => {
        items.map(item => item.style = 'left: 100%')
        setPosition(0)
        element.getElementsByClassName('next')[0].onclick = next
        element.getElementsByClassName('prev')[0].onclick = prev
        element.style = `height: ${getMaxHeigth()}px`;
    }

    function prev() {
        setPosition(positions[0])
        console.log('prev position: ', positions[0])
    }

    function next() {
        setPosition(positions[2])
        console.log('next position: ', positions[2])
    }

    function setPosition(newPosition) {
        positions[1] = newPosition
        if(positions[0] != null && positions[2] != null) {
            removeTransition(positions[0])
            removeTransition(positions[2])
        }
        positions[0] = positions[1] - 1 == -1 ? n - 1 : positions[1] - 1
        positions[2] = positions[1] + 1 == n ? 0 : positions[1] + 1
        items.map((item, index) => {
            if(index == positions[0]) {
                item.style = 'left: -100%'
            }
            else if (index == positions[1]) {
                item.style = 'left: 0%'
            }
            else if (index == positions[2]) {
                item.style = 'left: 100%'
            }
            else {
                item.style = 'left: 100%; display: none'
            }
        })
        positions.map(position => addTransition(position))
    }

    function addTransition(posi) {
        items[posi].classList.add("transition");
    }

    function removeTransition(posi) {
        items[posi].classList.remove("transition");
    }

    function getMaxHeigth() {
        let maxHeigth = items[0].offsetHeight
        items.map(item => {
            if (item.offsetHeight > maxHeigth) {
                maxHeigth = item.offsetHeight
            }
        })
        console.log('max height : ', maxHeigth)
        return maxHeigth
    }
}

window.onload = () => {
    let sliderOne  = new slider('slider', 0)
    sliderOne.init()
}