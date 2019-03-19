const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../theme/variables/commonColor");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const primary = require("../../theme/variables/commonColor").brandPrimary;
const contentMarginVertical = deviceWidth < 330
        ? Platform.OS === "android"
          ? deviceHeight / 9 - 20
          : deviceHeight / 10 - 20
        : Platform.OS === "android"
          ? deviceHeight / 12 - 20
          : deviceHeight / 10 - 20

export default {
  setUpStepThree: {
    paddingLeft: 10,
    paddingBottom: 50,
    paddingRight: 10,
    marginBottom: contentMarginVertical - 20,
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
  input: {
    paddingLeft: 10,
    color: "#FFF"
  },
  signupBtn: {
    height: 50,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#FFF",
  },
  datePicker: {
    marginVertical: deviceHeight / 20,
    backgroundColor: 'white',
    borderRadius: 20
  },
  buttonsContainer: {
    // marginTop: deviceHeight / 25
  },
  container: {
  },
  progressBar: {
    height: 8,
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginHorizontal: 12
 },
 currentStep: {
    height: 8,
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 12
 },
  backArrowContainer: {
    paddingLeft: 10,
    backgroundColor: 'transparent'
  },
  reminderIcon: {
    borderColor: 'white',
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderRadius: '80%',
    padding: '9%',
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  moodContainer: {
    marginBottom: deviceHeight / 20,
    marginTop: deviceHeight / 30,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 22,
    paddingHorizontal: deviceWidth / 12,
    paddingVertical: deviceWidth / 10,
    backgroundColor: 'rgba(255, 255, 255, .2)'
  },
  signupContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  subHeader: {
    textAlign: 'center',
    fontSize: deviceWidth / 22,
    fontWeight: 'bold'
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff', 
    paddingTop: 20, 
    paddingBottom: 10,
    width: deviceWidth / 5,
    textAlign: 'center'
  }
};
