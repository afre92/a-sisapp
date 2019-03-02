const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../theme/variables/commonColor");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const primary = require("../../theme/variables/commonColor").brandPrimary;
const contentMarginVertical = deviceWidth < 330
        ? Platform.OS === "android"
          ? deviceHeight / 6 - 20
          : deviceHeight / 8 - 20
        : Platform.OS === "android"
          ? deviceHeight / 9 - 20
          : deviceHeight / 8 - 20

export default {
  setUpStepThree: {
    paddingLeft: 10,
    paddingBottom: 50,
    paddingRight: 10,
    marginBottom: contentMarginVertical,
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
    marginTop: 10,
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
    marginTop: deviceHeight / 25
  },
  container: {
    paddingVertical: 50,
    marginVertical: 10
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
  recapIcons: {
    fontSize: 50,
    textAlign: 'center',
  },
  recapText: {
    fontSize: 17
  },
  setUpReview: {
    paddingHorizontal: deviceWidth / 20,
    marginVertical: deviceHeight / 6,
  },
  recapRow: {
    paddingVertical: deviceHeight / 60,
  },
  title: {
    paddingVertical: deviceHeight / 30,
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  cardTittle: {
    fontColor: 'black',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    paddingVertical: 10
  }
};
