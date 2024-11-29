# Christian Advent Calendar

This is an Advent Calendar built in JS, with 24 doors for the days of Advent (Dec 1 - Dec 24). A door is only active **on** or **after** the specific day displayed on it, until the end of the year. The active doors are white and clickable. After you click them, a popup will appear on the screen containing a Bible verse to accompany you and your friends during Advent season. The inactive doors are blue and cannot be clicked.

This means that, by default, the whole Calendar is **inactive before and after December**.

## Project structure

The folders are organized as follow:
```
christian-advent-calendar/
├─ electron-scripts/
│  ├─ preload.js
│  ├─ renderer.js
├─ favicon/
├─ images/
│  ├─ NativityImage.jpg
├─ scripts/
│  ├─ calendar.js
│  ├─ messages.js
│  ├─ snow.js
├─ .gitignore
├─ index.html
├─ main.js
├─ package-lock.json
├─ package.json
├─ readme.md
├─ style.css
```
- `favicon`: contains all the icons used when the app is opened on the browser

- `images` : folder used to store the background image, it can be used to organize possible images to show in calendar doors

- `scripts`: it contains JS files used in the project, divided by task

- `main.js`: this is the main file in which ElectronJS elements are defined

- `electron-scripts`: it contains JS files used to build the Electron app (their are now empty but can be used for customization, see [Preload Tutorial](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload)).

## How to Test the Calendar before December?

To test the Calendar before December, comment out the month checker in the `/scripts/calendar.js` file, in *line 31*:

```javascript
if( /* ( currentDate.getMonth() + 1 ) < 12 || */ currentDate.getDate() < day ) {
```

If you want the Calendar to check for the month again just uncomment the month checker in the same line.

## Popup messages

In the `/scripts/messages.js` file are stored 24 Bible verses and 1 image as examples of how to insert text or image files in each door. 

## Electron JS

In this branch I'm trying to build a desktop app with electron JS. 

To start the app, these are the steps to follow:

### Install Node.js

If it's not already installed on your computer, download Node.js.

### Install Electron js

Open the terminal and run:

```powershell
npm install electron
```

If you want to develop your own application based on this repo, run this command instead:

```powershell
npm install --save-dev electron
```

and compile your `package.json` file.

### Start the app

To run the electron application, on the terminal run:

```powershell
npm run start
```

## How to create .exe file

For the curious ones, I used ```electron-forge``` to build the package.

Terminal commands:

```javascript
npm install --save-dev @electron-forge/cli
npx electron-forge import
npm run make
```

After this, a folder named `out` will appear in your directory; now you can run the .exe file `out/make/squirrel.windows/x64/christian-advent-calendar-1.0.0 Setup.exe` and the app will automatically open.

## References

- The project was inspired by this repository: http://azaleamollis.github.io/advent-calendar/ (I didn't know that you could fork on a repo so I wrote one myself, I'm sorryyyy 😭).

- For the snow animation, you can see Jemima Abu's explanation here: https://webdesign.tutsplus.com/how-to-create-animated-snow-on-a-website-with-css-and-javascript--cms-93562t.

# 🎀Merry Christmas!🎀
