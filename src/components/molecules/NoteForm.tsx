import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../atoms/AppButton";
import AppInput from "../atoms/AppInput";
import AppText from "../atoms/AppText";

type Props = {
  onSubmit: (title: string, excerpt: string) => void;
  initialTitle?: string;
  initialExcerpt?: string;
};

export default function NoteForm({
  onSubmit,
  initialTitle = "",
  initialExcerpt = "",
}: Props) {
  const [title, setTitle] = useState(initialTitle);
  const [excerpt, setExcerpt] = useState(initialExcerpt);

  const handleSubmit = () => {
    if (title.trim() && excerpt.trim()) {
      onSubmit(title, excerpt);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.formTitle}>Add New Note</AppText>
      <AppText style={styles.label}>Title</AppText>
      <AppInput
        placeholder="Enter note title"
        value={title}
        onChangeText={setTitle}
      />

      <AppText style={styles.label}>Content</AppText>
      <AppInput
        placeholder="Enter note content"
        value={excerpt}
        onChangeText={setExcerpt}
        multiline
        numberOfLines={4}
        style={[styles.input, styles.textArea]}
      />

      <View style={styles.buttonContainer}>
        <AppButton title="Save Note" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    // Overriding some AppInput styles if needed
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
