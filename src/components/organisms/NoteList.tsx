import { FlatList, StyleSheet, View } from "react-native";
import NoteListItem from "../molecules/NoteListItem";

type Note = {
  id: string;
  title: string;
  excerpt: string;
};

type Props = {
  notes: Note[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function NoteList({ notes, onEdit, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteListItem
            title={item.title}
            excerpt={item.excerpt}
            onEdit={() => onEdit(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  listContent: {
    paddingBottom: 20,
  },
});
