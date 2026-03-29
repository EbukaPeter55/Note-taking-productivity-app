import { useRouter } from "expo-router";
import { useState } from "react";
import NotesTemplate from "@/components/templates/NotesTemplate";
import ScreenLayout from "@/components/templates/ScreenLayout";

const MOCK_NOTES = [
  {
    id: "1",
    title: "Grocery List",
    excerpt: "Milk, Bread, Eggs, Cheese, Vegetables...",
  },
  {
    id: "2",
    title: "Project Ideas",
    excerpt: "1. AI Note Taking App\n2. Fitness Tracker...",
  },
  {
    id: "3",
    title: "Meeting Notes",
    excerpt: "Discussed the new architecture and atomic design...",
  },
];

export default function NotesScreen() {
  const router = useRouter();
  const [notes, setNotes] = useState(MOCK_NOTES);

  const handleAdd = () => {
    router.push("/add-note");
  };

  const handleEdit = (id: string) => {
    console.log(`Edit Note clicked for ID: ${id}`);
    // Implementation for editing a note would go here
  };

  const handleDelete = (id: string) => {
    console.log(`Delete Note clicked for ID: ${id}`);
    setNotes((prev) => prev.filter((note) => note.id !== id));
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
