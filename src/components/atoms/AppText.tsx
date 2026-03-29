import { Text, TextProps } from "react-native";

export default function AppText({ style, ...props }: TextProps) {
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: 16,
          color: "#222",
        },
        style,
      ]}
    />
  );
}
