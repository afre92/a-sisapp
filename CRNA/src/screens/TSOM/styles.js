const React = require("react-native");
const {Dimensions, Platform} = React;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const primary = require("../../theme/variables/commonColor").brandPrimary;
const commonColor = require("../../theme/variables/commonColor");


export default {
  meditationPoster: {
    height: 280,
    width: null,
    flex: 1,
    position: "relative",
    marginHorizontal: 20
  },
  meditationPosterHeader: {
    fontWeight: "900"
  },
  slide: {
    flex: 1,
    width: deviceWidth,
    height: 280,
    backgroundColor: "transparent"
  },
  swiperTextContent: {
    position: "absolute",
    bottom: -5,
    padding: 20,
    paddingBottom: 50
  },
  swiperDot: {
    backgroundColor: "rgba(0,0,0,.8)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 0
  },
  swiperActiveDot: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 0
  },
  swiperContentBox: {
    paddingTop: 20,
    paddingBottom: 20
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  logoHeader: {
    width: 20,
    height: 28,
    alignSelf: "center"
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
  rowHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingTop: Platform.OS === "android" ? 0 : 0
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: primary
  },
  headerText:{
    fontWeight: 'bold',
    paddingTop: 5
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  mainContainer: {
    paddingHorizontal: 30, 
    paddingBottom: 40, 
    paddingTop: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'left'
  },
  subtitle: {
    color: 'white', 
    fontSize: 22, 
    textAlign: 'left', 
    paddingTop: 30
  },
};
