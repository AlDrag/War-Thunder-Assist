# electron-quick-start-typscript

**Clone and run for a quick way to see Electron in action.**

This is a typescript port of the [Electron Quick Start repo](https://github.com/electron/electron-quick-start) -- a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.ts` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start-typescript
# Go into the repository
cd electron-quick-start-typescript
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## License

[CC0 1.0 (Public Domain)](LICENSE.md)


## War Thunder API Example Responses

#### state.json

```
{
  "valid": true,
  "aileron, %": 0,
  "elevator, %": 27,
  "rudder, %": -1,
  "flaps, %": 0,
  "gear, %": 0,
  "TAS, km/h": 233,
  "IAS, km/h": 231,
  "M": 0.19,
  "AoA, deg": 7.0,
  "AoS, deg": -0.2,
  "Ny": 1.03,
  "Vy, m/s": 4.8,
  "Wx, deg/s": -0,
  "throttle 1, %": 82,
  "RPM throttle 1, %": 93,
  "mixture 1, %": 100,
  "radiator 1, %": 0,
  "compressor stage 1": 1,
  "magneto 1": 3,
  "power 1, hp": 1028.9,
  "RPM 1": 2310,
  "manifold pressure 1, atm": 1.06,
  "oil temp 1, C": 72,
  "pitch 1, deg": 26.8,
  "thrust 1, kgs": 899,
  "efficiency 1, %": 74
}
```

#### indicators.json

```
{
  "valid": true,
  "type": "la-5_type37_early",
  "speed": 78.608604,
  "pedals1": -0.003906,
  "stick_elevator": 0.183599,
  "stick_ailerons": -0.002228,
  "vario": 10.026550,
  "altitude_hour": 691.749268,
  "altitude_min": 691.749268,
  "bank": -0.037685,
  "turn": -0.000709,
  "turn2": -0.000712,
  "compass": 52.675644,
  "clock_hour": 10.533334,
  "clock_min": 32.000000,
  "manifold_pressure": 1.056344,
  "rpm_min": 309.000000,
  "rpm_hour": 2309.010742,
  "oil_pressure": 76.578247,
  "oil_temperature": 76.578247,
  "head_temperature": 202.034637,
  "mixture": 0.833333,
  "fuel1": 123.322319,
  "fuel_pressure": 8.180426,
  "gears_lamp": 1.000000,
  "trimmer": 0.000000,
  "throttle": 0.818043,
  "weapon1": 0.000000,
  "weapon2": 0.000000,
  "weapon3": 0.000000,
  "prop_pitch": 0.930016,
  "supercharger": 0.000000,
  "radiator": 0.352941
}
```

#### gamechat?lastId=x
x can be any number. It acts as an offset for pagination.

```
[
  { "id": 1, "msg": "Attack the C point!", "sender": "Hjwzuishuai", "enemy": false, "mode": "Team" },
  { "id": 2, "msg": "Attack the C point!", "sender": "Hjwzuishuai", "enemy": false, "mode": "Team" },
  { "id": 3, "msg": "Need backup!<color=#FF00FF50> [e7]</color>", "sender": "Hjwzuishuai", "enemy": false, "mode": "Team" },
  { "id": 4, "msg": "Hey", "sender": "AlDrag", "enemy": false, "mode": "Team" },
  { "id": 5, "msg": "Need cover!<color=#FF00FF50> [e7]</color>", "sender": "Hjwzuishuai", "enemy": false, "mode": "Team" }
]
```
