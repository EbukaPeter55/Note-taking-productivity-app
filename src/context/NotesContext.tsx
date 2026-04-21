import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Note = {
  id: string;
  title: string;
  excerpt: string;
};

interface NotesContextType {
  notes: Note[];
  addNote: (title: string, excerpt: string) => void;
  deleteNote: (id: string) => void;
  updateNote: (id: string, title: string, excerpt: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

const MOCK_NOTES: Note[] = [
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

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>(MOCK_NOTES);

  const addNote = (title: string, excerpt: string) => {
    const newNote: Note = {
      id: Math.random().toString(36).substring(7),
      title,
      excerpt,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const updateNote = (id: string, title: string, excerpt: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, title, excerpt } : note))
    );
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
