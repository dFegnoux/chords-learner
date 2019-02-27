const Notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

export function getNotes() {
  return Notes;
}

export function goToIntervalAfter(interval, rootNote) {
  const rootNoteIndex = Notes.indexOf(rootNote.name);
  let newNote = rootNote;
  let currentOctave = rootNote.octave;
  if (rootNoteIndex + interval > Notes.length - 1) {
    newNote.name = Notes[rootNoteIndex + interval - Notes.length];
  } else {
    newNote = Notes[rootNoteIndex + interval];
  }

  return newNote;
}
