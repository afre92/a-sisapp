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
  signupBtn: {
    height: 50,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#FFF",
    marginBottom: 30
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
  AlarmsContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  subHeader: {
    textAlign: 'center',
    fontSize: deviceWidth / 22,
    fontWeight: 'bold'
  },
  editSubHeader: {
    textAlign: 'center',
    fontSize: deviceWidth / 22,
    fontWeight: 'bold',
    paddingVertical: 20
  },
  labelStyle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff', 
    paddingTop: 20, 
    paddingBottom: 10,
    width: deviceWidth / 5,
    textAlign: 'center'
  },
  headerText:{
    fontWeight: 'bold',
    paddingTop: 5
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  buttonText: {
    color: "#FFF", 
    fontWeight: 'bold'
  },
  card: {
    height: deviceHeight / 10,
    borderRadius: 20,
  },
  cardTittle: {
    fontColor: 'black',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    paddingTop: 10
  },
};
