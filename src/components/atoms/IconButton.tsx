import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  name: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
  onPress: () => void;
};

export default function IconButton({
  name,
  size = 24,
  color = "#FF4D5A",
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialIcons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
