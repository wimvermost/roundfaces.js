# Roundfaces.js

Roundfaces.js is a jQuery plugin based on the Stripe.io [about](http://www.example.com/)  page. This plugin randomly places different sized images without overlapping eachother. Animations are added with CSS. See a live demo [here](https://www.vermost.net/faces).

## Usage

- Include jQuery & Roundfaces.js.
- Edit the variables and call the function


```html
<script src="js/jquery.js"></script>
<script src="js/roundfaces.js"></script>
<script>
$(document).ready(function() {
    faces({
        size: 75,
        /* size of photos */
        density: 0.3,
        /* density of container, smaller number = denser, suggested: 0.5 - 1 */
        random: true
        /* makes some photos smaller than others */
    });
});
</script>

```

- Use this markup or change it to whatever you like in code itself.


```html
<div class="container-outer">
    <div class="container-inner">
        <div class="picture">
            <div class="user_description">
                <h4>Dries van Bever</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div><img src='https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg' />
        </div>
    </div>
</div>
```


- Make sure your outer container and picture class have position: absolute set. The image itself should have an position: relative.


```css
.picture {
    position: absolute;
    height: 75px;
    width: 75px;
    cursor: pointer;
}

.picture img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: relative;
    z-index: 1;
}

.container-outer {
    position: absolute;
    width: 100%;
    height: 500px;
    overflow: hidden;
    padding-bottom: 60px;
}

```

- Add some animations, and you're set.


```css
.container-inner {
    animation-name: slowly;
    animation-duration: 100s;
    z-index: 1;
    width: 100%;
    animation-timing-function: linear;
    padding-bottom: 100px;
}
@keyframes slowly {
    100% {
        transform: translateX(-60%);
    }
}
```

## Options

- `size`: (default: `75`) Size in pixels of your images.
- `density`: (default: `0.3`) Density of the container, smaller number equals denser container.
- `random`: (default: `'true'`) Makes the images more dynamic and different sized. You can adjust the values in the script.

## Demo

See a live demo [here](https://www.vermost.net/faces)
