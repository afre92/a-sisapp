const React = require("react-native");
const {Dimensions, Platform} = React;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  trackArt: {
    marginVertical: 20,
    marginHorizontal: deviceWidth / 8,
    height: 250,
    width: null,
    flex: 1,
    position: "relative",
    shadowRadius: 5,
     shadowColor: 'red',
  },
  slide: {
    flex: 1,
    width: deviceWidth,
    backgroundColor: "transparent"
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  text: {
    fontSize: 15,
    color: "#000",
    marginBottom: 10
  },
  header: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: Platform.OS === "ios" ? undefined : -30
  },
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: primary
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  recordInfo: {
    paddingHorizontal: deviceWidth / 12,
    marginBottom: deviceHeight / 40
  },
  recordInfoNames: {
    marginVertical: deviceHeight / 40
  },
  recordCover: {
    marginVertical: deviceHeight / 30
  },
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  headerText: {
    fontWeight: 'bold',
    paddingTop: 5
  },
  playlistName: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 20
  },
  authorName: {
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize: 20
  },
  albumName: {
    textAlign: 'center', 
    opacity: 0.9, 
    fontSize: 16
  },
  thumbStyle: {
    width: 8,
    height: 8,
    backgroundColor: 'white'
  },
  currentStep: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  maxStep: {
    textAlign: 'right', 
    flex: 1, 
    fontSize: 16, 
    fontWeight: 'bold'
  }
};
