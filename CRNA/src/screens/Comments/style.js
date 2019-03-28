const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceWidth = Dimensions.get("window").width;
const commonColor = require("../../theme/variables/commonColor");
const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  container: {
    width: null,
    height: null,
    flex: 1
  },
  headerContainer: {
    marginTop: Platform.OS === "android" ? -5 : undefined,
    marginLeft: Platform.OS === "android" ? -5 : undefined
  },
  headerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    elevation: 0
  },
  headerBtns: {
    padding: 10,
    alignSelf: "center"
  },
  headerIcons: {
    fontSize: 30
  },
  headerTextIcon: {
    fontSize: 28,
    paddingTop: 10,
    marginTop: Platform.OS === "android" ? -10 : 0
  },
  commentHeadbg: {
    backgroundColor: "transparent",
    flex: 1
  },
  commentHeader: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  },
  channelBtn1: {
    borderWidth: 1,
    borderColor: Platform.OS === "android" ? "#ddd" : "rgba(255,255,255,0.5)"
  },
  card: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    flex: 1,
    backgroundColor: "transparent",
    marginTop: null,
    marginBottom: null,
    marginLeft: null,
    marginRight: null
  },
  cardHeader: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    paddingBottom: 15,
  },
  cardItem: {
    backgroundColor: "transparent",
    paddingTop: 5
  },
  timeIcon: {
    fontSize: 16,
    color: "#666",
    width: null
  },
  date: {
    fontWeight: "400",
    fontSize: 12,
    color: "#FFF",
    lineHeight: 16,
    paddingLeft: 5,
    paddingRight: 10
  },
  likeIcon: {
    fontSize: 16,
    color: "#FFF",
    width: null
  },
  commentBox: {
    backgroundColor: "#EEE",
    alignItems: "center",
    paddingLeft: 10
  },
  attachIconContainer: {
    padding: 10
  },
  attachIcon: {
    color: "#797979",
    fontSize: 27
  },
  input: {
    color: "#222",
    alignSelf: "center"
  },
  arrowForwardIcon: {
    color: commonColor.brandPrimary
  },
  arrowForwardIconContainer: {
    paddingTop: 5
  },
  commentName: {
    fontSize: deviceWidth < 330 ? 15 : 17,
    paddingLeft: 12,
    color: "#FFF",
    fontWeight: "bold"
  },
  commentText: {
    color: "#FFF",
    fontWeight: '400',
    paddingHorizontal: 12,
    fontSize: 18,
  },
  commentDateView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 20
  },
  commentLikeView: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    top: 17
  },
  headerText:{
    fontWeight: 'bold',
    paddingTop: 5,
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
};
