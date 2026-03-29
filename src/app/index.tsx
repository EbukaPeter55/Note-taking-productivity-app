import AuthHero from "@/components/organisms/AuthHero";
import ScreenLayout from "@/components/templates/ScreenLayout";

export default function HomeScreen() {
  return (
    <ScreenLayout contentContainerStyle={styles.container}>
      <AuthHero />
    </ScreenLayout>
  );
}

const styles = {
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  } as const,
};
