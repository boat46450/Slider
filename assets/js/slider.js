function slider(classElement, number, intervalTime = 0) {
    let element = document.getElementsByClassName(classElement)[number]

    let items = [...element.getElementsByClassName('slider-item')]
    let itemControls = []
    let n = items.length
    let positions = [null, null, null]

    this.init = () => {
        element.getElementsByClassName('arrow')[0].style = `height: ${getMaxHeigth()}px;`
        element.style = `height: ${getMaxHeigth() + getHeightControl()}px;`
        element.getElementsByClassName('control')[0].innerHTML = renderFlowControl()
        itemControls = [...element.getElementsByClassName('control-item')]
        items.map(item => item.style = 'left: 100%')
        setPosition(0)
        let interval = intervalTime > 0 ? setInterval(() => {
            next()
        }, intervalTime) : null
        element.getElementsByClassName('next')[0].onclick = () => {
            next()
            clearInterval(interval)
        }
        element.getElementsByClassName('prev')[0].onclick = () => {
            prev()
            clearInterval(interval)
        }
        itemControls.map((item, index) => {
            item.onclick = () => {
                setPosition(index)
                clearInterval(interval)
            }
        })
    }

    function prev() {
        setPosition(positions[0])
    }

    function next() {
        setPosition(positions[2])
    }

    function setPosition(newPosition) {
        if(Math.abs(positions[1] - newPosition) > 1) {
            removeTransition(positions[1])
        }
        positions[1] = newPosition
        if(positions[0] != null && positions[2] != null) {
            removeTransition(positions[0])
            removeTransition(positions[2])
        }
        positions[0] = positions[1] - 1 == -1 ? n - 1 : positions[1] - 1
        positions[2] = positions[1] + 1 == n ? 0 : positions[1] + 1
        items.map((item, index) => {
            if(index == positions[0]) {
                item.style = 'left: -100%; visibility: hidden'
            }
            else if (index == positions[1]) {
                item.style = 'left: 0%'
            }
            else if (index == positions[2]) {
                item.style = 'left: 100%; visibility: hidden'
            }
            else {
                item.style = 'left: 100%; visibility: hidden'
            }
        })
        positions.map(position => addTransition(position))
        itemControls.map((item, index) => {
            if(index == positions[1]) {
                item.classList.add('active')
            }
            else {
                item.classList.remove('active')
            }
        })
    }

    function addTransition(posi) {
        items[posi].classList.add("transition")
    }

    function removeTransition(posi) {
        items[posi].classList.remove("transition")
    }

    function getMaxHeigth() {
        let maxHeigth = items[0].offsetHeight
        items.map(item => {
            if (item.offsetHeight > maxHeigth) {
                maxHeigth = item.offsetHeight
            }
        })
        return maxHeigth
    }

    function getHeightControl() {
        let control = element.getElementsByClassName('control')[0]
        let height = control.offsetHeight
        return height
    }

    function renderFlowControl() {
        let render = ''
        items.map(() => {
            render += "<span class='control-item'></span>"
        })
        return render
    }
}
