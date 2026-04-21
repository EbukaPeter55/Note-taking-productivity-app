import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useNotes } from "@/context/NotesContext";
import NoteForm from "@/components/molecules/NoteForm";
import ScreenLayout from "@/components/templates/ScreenLayout";

export default function AddNoteScreen() {
  const router = useRouter();
  const { addNote } = useNotes();

  const handleAddNote = (title: string, excerpt: string) => {
    addNote(title, excerpt);
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
