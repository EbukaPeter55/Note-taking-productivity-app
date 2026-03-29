import { StyleSheet, View } from "react-native";
import AppText from "../atoms/AppText";
import IconButton from "../atoms/IconButton";
import NoteList from "../organisms/NoteList";

type Note = {
  id: string;
  title: string;
  excerpt: string;
};

type Props = {
  notes: Note[];
  onAdd: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function NotesTemplate({
  notes,
  onAdd,
  onEdit,
  onDelete,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.title}>All Notes</AppText>
      </View>

      <NoteList notes={notes} onEdit={onEdit} onDelete={onDelete} />

      <View style={styles.fab}>
        <IconButton
          name="add"
          onPress={onAdd}
          size={32}
          color="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f2f2f2",
  },
  header: {
    marginTop: 20,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#FF4D5A",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
