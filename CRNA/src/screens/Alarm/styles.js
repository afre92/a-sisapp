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
  signupContainer: {
    paddingLeft: 10,
    paddingBottom: 50,
    paddingRight: 10,
    marginVertical: contentMarginVertical,
  },
  signupHeader: {
    paddingBottom: 20,
    alignSelf: "center",
    fontSize: 22,
    padding: 10,
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
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#FFF",
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
    flexDirection: "row",
    alignSelf: "center"
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
    height: deviceHeight / 4.5,
    alignSelf: "center"
  },
  weekDay: {
    fontSize: 18,
    flex: 1,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: deviceWidth / 20 - 10,
  },
  datePicker: {
    marginVertical: deviceHeight / 20,
    backgroundColor: 'white',
    borderRadius: 20
  },
  moodContainer: {
    marginBottom: deviceHeight / 10,
    marginTop: deviceHeight / 20,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 22,
    paddingHorizontal: deviceWidth / 15,
    paddingVertical: deviceWidth / 10
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff', 
    paddingTop: 20, 
    paddingBottom: 10,
    width: deviceWidth / 5,
    textAlign: 'center'
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
    paddingTop: '15%'
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
