# Packages Used

_package.json_

<pre class="line-numbers"><code class="language-json">{
  "name": "StrapFlatApp",
  "version": "9.0.0",
  "private": true,
  "devDependencies": {
    "babel-eslint": "7.2.3",
    "eslint": "4.4.1",
    "eslint-plugin-flowtype": "2.35.0",
    "eslint-plugin-import": "2.7.0",
    "eslint-plugin-jsx-a11y": "6.0.2",
    "eslint-plugin-prettier": "2.1.2",
    "eslint-plugin-react": "7.1.0",
    "eslint-plugin-react-native": "3.0.1",
    "flow-bin": "0.52.0",
    "flow-typed": "2.1.5",
    "husky": "1.1.4",
    "jest": "23.5.0",
    "jest-expo": "28.0.0",
    "prettier": "1.5.3",
    "react-test-renderer": "16.3.1"
  },
  "main": "./node_modules/expo/AppEntry.js",
  "scripts": {
    "postinstall": "remotedev-debugger",
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "eject": "expo eject",
    "test": "jest && flow && eslint .",
    "precommit": "yarn test"
  },
  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!(react-native|lottie-react-native|expo|react-native-maps|react-native-svg|react-native-branch|native-base-shoutem-theme|react-native-easy-grid|react-native-drawer|react-native-vector-icons|react-native-keyboard-aware-scroll-view|react-native-swiper|react-navigation|native-base|@expo|react-native-scrollable-tab-view|react-native-simple-modal|react-native-iphone-x-helper)/)"
    ]
  },
  "dependencies": {
    "@expo/vector-icons": "^6.3.1",
    "babel-preset-expo": "^4.0.0",
    "color": "3.1.0",
    "expo": "28.0.0",
    "jest-cli": "23.5.0",
    "lodash": "4.17.11",
    "moment": "2.22.2",
    "native-base": "2.8.1",
    "react": "16.3.1",
    "react-native": "0.55.4",
    "react-native-calendars": "1.21.0",
    "react-native-carousel-view": "^0.5.1",
    "react-native-easy-grid": "0.2.0",
    "react-native-modalbox": "1.6.0",
    "react-navigation": "2.17.0",
    "react-redux": "5.1.1",
    "redux": "4.0.1",
    "redux-form": "7.4.2",
    "redux-persist": "5.10.0",
    "redux-thunk": "2.3.0",
    "remote-redux-devtools": "0.5.13",
    "remote-redux-devtools-on-debugger": "^0.8.3"
  }
}

</code></pre>