import { StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
};

export default function ScreenLayout({ children, contentContainerStyle }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.inner, contentContainerStyle]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  inner: {
    flex: 1,
  },
});
