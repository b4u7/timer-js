# Countdown Date
Countdown Date is a simple javascript plugin that countdowns to a specified date.

## Usage
First download the plugin and import it before your body tag and boom you're done!
All you need is to create an element with a `timer` id and initialize the plugin. 

Example:
```html
<html lang="en">
<head>
    <title>Countdown Date Example</title>
</head>
<body>
<section>
    <div id="timer"></div>
</section>
<script src="countdownDate.js"></script>
<script>
    countdownDate.init();
</script>
</body>
</html>
```

## Documentation
|     Setting     |    Type    |                 Description                          |             Default Value             |                                    Example                                    |
| --------------- | :--------: | ---------------------------------------------------  | :-----------------------------------: | ----------------------------------------------------------------------------- |
| endDateTime     | String     | Set the date you want to countdown from              | Empty string (invalid)                | 'Jun 30, 2030 23:59:59'                                                       |
| initId          | String     | The id of the element that will be used as a timer   | timer                                 | 'timer-wrapper'                                                               |
| interval        | Int        | Seconds that it will take to countdown               | .5                                    | 5                                                                             |
| textColour      | String     | Set the text colour                                  | #fff                                  | '#ff00ff'                                                                     |
| fontSize        | String     | Set the font size                                    | Uses the element's default font size  | '3rem'                                                                        |
| fontFamily      | String     | Set the font family                                  | sans-serif                            | 'Inter, sans-serif'                                                           |
| fontWeight      | Int        | Seconds that it will take to countdown               | bold                                  | 700                                                                           |
| onFinishMessage | String     | Message that is shown when the countdown is over     | .5                                    | 'The event has started!'                                                      |
| onFinish        | Callback   | Message that is shown when the countdown is over     | .5                                    | ```onFinish: function() { console.log("The timer has reached it's end.") }``` |

Example:
```javascript
    countdownDate.init({
        endDateTime: 'Jan 01, 2025 00:00:00',
        fontFamily: 'Inter, sans-serif',
        fontSize: '5rem',
        onFinishMessage: 'Happy new year!'
    });
```

## Requirements
None!

## License
This plugin is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).