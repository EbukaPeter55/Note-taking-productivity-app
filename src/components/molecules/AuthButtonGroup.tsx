import { View } from "react-native";
import { useRouter } from "expo-router";
import AppButton from "../atoms/AppButton";

export default function AuthButtonGroup() {
  const router = useRouter();
  return (
    <View style={{ width: "100%" }}>
      <AppButton
        title="See My Notes"
        onPress={() => router.push("/notes" as any)}
      />
      <AppButton title="Create Account" onPress={() => console.log("Create")} />

      <AppButton
        title="Login"
        variant="outline"
        onPress={() => console.log("Login")}
      />
    </View>
  );
}
