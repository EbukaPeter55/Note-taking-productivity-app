import { StyleSheet, View } from "react-native";
import AppText from "../atoms/AppText";
import IconButton from "../atoms/IconButton";

type Props = {
  title: string;
  excerpt: string;
  onEdit: () => void;
  onDelete: () => void;
};

export default function NoteListItem({
  title,
  excerpt,
  onEdit,
  onDelete,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.excerpt} numberOfLines={2}>
          {excerpt}
        </AppText>
      </View>
      <View style={styles.actions}>
        <IconButton name="edit" onPress={onEdit} size={20} />
        <IconButton
          name="delete"
          onPress={onDelete}
          size={20}
          color="#FF4D5A"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  excerpt: {
    fontSize: 14,
    color: "#666",
  },
  actions: {
    flexDirection: "row",
    marginLeft: 12,
  },
});
