const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../theme/variables/commonColor");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  signupContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop:
      deviceWidth < 330
        ? Platform.OS === "android"
          ? deviceHeight / 9 - 100
          : deviceHeight / 10 - 100
        : Platform.OS === "android"
          ? deviceHeight / 9 - 100
          : deviceHeight / 8 - 100
  },
  signupHeader: {
    paddingBottom: 20,
    alignSelf: "center",
    fontSize: 22,
    padding: 10,
    fontWeight: "bold",
    color: "#FFF",
  
  },
  background: {
    flex: 1,
    width: null,
    height: null,
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
  signupBtn: {
    height: 50,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  otherLinkText: {
    alignSelf: "center",
    opacity: 0.8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#EFF"
  },
  otherLinksContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  helpBtns: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF"
  },
  imageContainer: {
    paddingTop: '35%',
    flexDirection: "row",
    alignSelf: "center"
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
    height: deviceHeight / 4.5,
    alignSelf: "center"
  },
  checkbox: {
    // marginleft: 5
    // flex: 1
    // marginHorizontal: deviceWidth / 30 - 7
  },
  weekDay: {
    marginRight: deviceWidth / 20 - 15,
    flex: 1,
    textAlign: 'center',
    paddingBottom: deviceWidth / 20 - 10
  }
};
