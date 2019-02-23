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
          ? deviceHeight / 15 - 20
          : deviceHeight / 15 - 20

export default {
  datePickerContainer: {
    marginTop: contentMarginVertical,
  },
  signupHeader: {
    paddingBottom: 20,
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF"
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
  formContainer: {
    flexDirection: "row",
    alignSelf: "center"
  },
  weekDay: {
    fontSize: 18,
    flex: 1,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: deviceWidth / 20 - 10
  },
  datePicker: {
    marginVertical: deviceHeight / 20,
    backgroundColor: 'white',
    borderRadius: 20
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff', 
    paddingTop: 20, 
    paddingBottom: 10,
    width: deviceWidth / 5,
    textAlign: 'center',
    paddingLeft: 10
  },
  buttonsContainer: {
  },
  header: {
    textAlign: 'center',
    paddingVertical:  '10%',
    fontSize: 20,
    fontWeight: '600'
  },
  container: {
  },
  checkBoxes: {
    CheckboxIconSize: 50
  },
  subHeader: {
    textAlign: 'center',
    fontSize: deviceWidth / 22,
    fontWeight: 'bold'
  },
    loginBtn: {
    marginTop: 7,
    height: 50
  },
};
