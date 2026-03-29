import { StyleSheet, TextInput } from "react-native";

export default function AppInput(props: any) {
  return (
    <TextInput {...props} style={styles.input} placeholderTextColor="#999" />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});
