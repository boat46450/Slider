# Slider
## Homework for internship at Dek-D

Preview of my code : https://boat46450.github.io/Slider/

## How to use my Slider library
1. download ```slider.css``` and ```slider.js``` and import to your html
2. add script following after import ```slider.js``` line
```javascript
    window.onload = () => {
        let slider  = new slider('slider', index, intervel)
        slider.init()
    }
```
3. replace data index and interval in script
* index is equal index of slider
  * if you have only a slider, replace it with ```0```
  * if you have sliders more than 1, replace it with index of slider starting is 0
* intervel is number of millisecond that you to auto next
  * You can not fill this value because default value of this is ```0```
4. Structure of HTML is
```html
    <div class="slider">
        <div class="slider-item"></div>
        ...
        <div class="slider-item"></div>
        <div class="arrow">
            <div class="prev"></div>
            <div class="next"></div>
        </div>
        <div class="control"></div>
    </div>
```