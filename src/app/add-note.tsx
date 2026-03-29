import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import NoteForm from "@/components/molecules/NoteForm";
import ScreenLayout from "@/components/templates/ScreenLayout";

export default function AddNoteScreen() {
  const router = useRouter();

  const handleAddNote = (title: string, excerpt: string) => {
    // In a real app, this would be a context or API call
    console.log("Adding Note:", { title, excerpt });
    
    // We navigate back and pass the data (simplistic way for this demo)
    // In many Expo Router apps, you'd use a store or a global event emitter
    router.back();
  };

  return (
    <ScreenLayout contentContainerStyle={styles.container}>
      <View style={styles.formWrapper}>
        <NoteForm onSubmit={handleAddNote} />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  formWrapper: {
    marginTop: 20,
  },
});
