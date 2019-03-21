const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const primary = require("../../theme/variables/commonColor").brandPrimary;
const commonColor = require("../../theme/variables/commonColor");

export default {
  buttonsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20

  },
  settingsHeader: {
    alignSelf: "center",
    fontSize: 35,
    padding: 10,
    fontWeight: "bold",
    color: "#FFF",
    marginTop:
      Platform.OS === "android" ? deviceHeight / 8 : deviceHeight / 8 + 10
  },
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: primary
  },
  submit: {
    height: 50,
    marginTop: deviceHeight / 30,
    borderWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#ddd",
  },
  headerText:{
    fontWeight: 'bold',
    paddingTop: 5
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
};
