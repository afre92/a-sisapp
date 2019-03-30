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
  input: {
    paddingLeft: 10,
    color: "#FFF"
  },
  container: {
    marginVertical: 10,
  },
  title: {
    paddingVertical: deviceHeight / 30,
  },
  cardTittle: {
    fontColor: 'black',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    paddingTop: 10
  },
  newsPoster: {
    height:  deviceHeight / 2.2,
    width: null,
    position: "relative",
    marginHorizontal: 20,
  },
  newsPosterHeader: {
    fontWeight: "900"
  },
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  mainTextContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userInfoContianer: {
    height: deviceHeight / 10, 
    paddingHorizontal: 20, 
    paddingVertical: 10
  },
  shareIcon: {
    alignSelf: 'flex-end', 
    paddingHorizontal: 20
  },
  cardsContainer: {
    paddingHorizontal: 40, 
    paddingTop: deviceHeight / 20
  },
  cardBody: {
    backgroundColor: 'transparent',
    textAlign: 'center', 
    justifyContent: 'center'
  },
  card: {
    height: deviceHeight / 9,
    borderRadius: 20,
  },
  weekDay: {
    fontSize: 15,
    flex: 1,
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: deviceWidth / 20 - 15
  },
  disabledWeekDay: {
    color: "rgba(255, 255, 255, .5)",
    fontSize: 15,
    flex: 1,
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: deviceWidth / 20 - 15
  }
};
