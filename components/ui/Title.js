import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    // fontWeight: "bold",
    color: "black",
    textAlign: "center",
    // borderWidth: Platform.OS === "ios",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "#ba8f02",
    padding: 12,
  },
});
