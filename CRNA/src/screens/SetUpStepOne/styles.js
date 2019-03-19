const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const primary = require("../../theme/variables/commonColor").brandPrimary;
const commonColor = require("../../theme/variables/commonColor");

export default {
  setUpStepOneContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop:
      deviceWidth < 330
        ? Platform.OS === "android"
          ? deviceHeight / 9 - 10
          : deviceHeight / 8 - 10
        : Platform.OS === "android"
          ? deviceHeight / 7 - 10
          : deviceHeight / 6 - 10
  },
  welcome: {
    alignSelf: "center",
    padding: 10,
    marginTop:
      Platform.OS === "android" ? deviceHeight / 6 : deviceHeight / 6 - 20
  },
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: primary
  },
  formErrorIcon: {
    color: "#fff",
    marginTop: 5,
    right: 10
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: commonColor.brandDanger,
    textAlign: "right",
    top: -10
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "right",
    top: -10
  },
  inputGrp: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    borderWidth: 0,
    borderColor: "transparent"
  },
  input: {
    paddingLeft: 10,
    color: "#FFF"
  },
  button: {
    height: 50,
    marginTop: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#ddd"
  },
  helpBtns: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF"
  },
  imageContainer: {
    paddingTop: '15%',
    flexDirection: "row",
    alignSelf: "center"
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
    height: deviceHeight / 4.5,
    alignSelf: "center"
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  welcomeHeader: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
    paddingBottom: 20
  }
};
