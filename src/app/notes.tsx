import { useRouter } from "expo-router";
import { useState } from "react";
import NotesTemplate from "@/components/templates/NotesTemplate";
import ScreenLayout from "@/components/templates/ScreenLayout";

import { useNotes } from "@/context/NotesContext";

export default function NotesScreen() {
  const router = useRouter();
  const { notes, deleteNote } = useNotes();

  const handleAdd = () => {
    router.push("/add-note");
  };

  const handleEdit = (id: string) => {
    console.log(`Edit Note clicked for ID: ${id}`);
    // Implementation for editing a note would go here
  };

  const handleDelete = (id: string) => {
    deleteNote(id);
  };

  return (
    <ScreenLayout>
      <NotesTemplate
        notes={notes}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </ScreenLayout>
  );
}
