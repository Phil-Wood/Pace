# Pace
A jquery plugin that allows you to set the pace of DOM elements while scrolling. Useful for parallax background effects.

## Requirements
jQuery 1.X and up.

## Usage

Add a data-scroll-speed attribute to an element:

```<div data-scroll-speed="1.5"></div>
```
Target them with a jQuery selector:
```

```$('[data-scroll-speed]').pace();
```

## Options

| Option        | Default       | Description                                             |
| ------------- |:-------------:| -------------------------------------------------------:|
| direction     | vertical      | Direction of movement ( **vertical** or **horizontal**) |
| reverse       | false         | **false** = down or left | **true** = up or right       |

### Example

```var options = {
    'direction' : 'horizontal',
    'reverse' : true
}
$('[data-scroll-speed]').pace(options);
```

## License
Pace is licensed under the MIT license
For more information click [here](https://github.com/Phil-Wood/Pace/blob/master/LICENSE)
