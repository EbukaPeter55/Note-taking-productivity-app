import { StyleSheet, View } from "react-native";
import AppText from "../atoms/AppText";
import AuthButtonGroup from "../molecules/AuthButtonGroup";

export default function AuthHero() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>Welcome to the app</AppText>
        <AppText style={styles.subtitle}>Let’s plan your day</AppText>
      </View>

      <AuthButtonGroup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    height: "60%",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
