const React = require("react-native");

const { Dimensions } = React;

const primary = require("../../theme/variables/commonColor").brandPrimary;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  slides: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transparent'
  },
  iosText: {
    fontSize: 16,
    padding: 60,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 0,
    color: "#FFF"
  },
  aText: {
    fontSize: 16,
    padding: 40,
    textAlign: "center",
    fontWeight: "bold",
    margin: 40,
    color: "#FFF"
  },
  imageIcons: {
    fontSize: 120
  },
  Button: {
    width: '80%', 
    alignSelf: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginBottom: 10,
  },
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: primary
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },
  imgBackground: {
    backgroundColor: 'transparent',
    position: 'absolute'
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceHeight/4 
  },
  wBtn: {
    height: 50,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    marginHorizontal: '10%'
  },
  buttonTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
