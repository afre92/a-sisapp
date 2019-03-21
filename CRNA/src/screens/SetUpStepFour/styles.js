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
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary
  },
  input: {
    paddingLeft: 10,
    color: "#FFF"
  },
  susfBtn: {
    height: 50,
    marginTop: 10,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#FFF",
  },
  buttonsContainer: {
    marginTop: deviceHeight / 25
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
    marginVertical: deviceHeight / 7,
  },
  recapRow: {
    paddingVertical: deviceHeight / 60,
  },
  title: {
    paddingVertical: deviceHeight / 30,
    fontSize: 25,
    fontWeight: 'bold'
  }
};
