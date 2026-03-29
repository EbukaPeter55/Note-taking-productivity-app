import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "outline";
};

export default function AppButton({
  title,
  onPress,
  variant = "primary",
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        variant === "primary" ? styles.primary : styles.outline,
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === "primary" ? styles.primaryText : styles.outlineText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  primary: {
    backgroundColor: "#FF4D5A",
  },
  outline: {
    borderWidth: 1,
    borderColor: "#FF4D5A",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryText: {
    color: "#fff",
  },
  outlineText: {
    color: "#FF4D5A",
  },
});
