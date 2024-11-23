# Advent Calendar

This is an Advent Calendar built in JS, with 24 doors for the days of Advent (Dec 1 - Dec 24). A door is only active **on** or **after** the specific day displayed on it, until the end of the year. The active doors are white and clickable. After you click them an alert message with a Christmas quote pops up on the screen. The inactive doors are blue and cannot be clicked.

This means that, by default, the whole Calendar is **inactive before and after December**.

## How to Test the Calendar before December?

To test the Calendar before December, comment out the month checker in the `/scripts/calendar.js` file, in *line 24*:

```javascript
if( /* ( currentDate.getMonth() + 1 ) < 12 || */ currentDate.getDate() < day ) {
```

If you want the Calendar to check for the month again just uncomment the month checker in the same line.

## References

The project was inspired by this repository: http://azaleamollis.github.io/advent-calendar/ (I didn't know that you could fork on a repo so I wrote one myself, I'm sorryyyy).

For the snow animation, you can see Jemima Abu's explanation here: https://webdesign.tutsplus.com/how-to-create-animated-snow-on-a-website-with-css-and-javascript--cms-93562t.
