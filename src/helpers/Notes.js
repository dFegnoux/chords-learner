const Notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export function getNotesName() {
  return Notes;
}

export function getNoteByName(name, octave = 0) {
  return { name, octave };
}

/**
 * Get the note from the root + interval
 * @param {number} interval
 * @param {object} rootNote
 * @returns Note
 */
export function goToIntervalAfter(interval, rootNote) {
  const rootNoteIndex = Notes.indexOf(rootNote.name);

  if (rootNoteIndex + interval > Notes.length - 1) {
    /*
    Since Notes array starts on a C,
    we can tell that we are in the superior octave
    when when loop at the beginning of it
    */
    return {
      name: Notes[rootNoteIndex + interval - Notes.length],
      octave: rootNote.octave + 1
    };
  } else {
    return { ...rootNote, name: Notes[rootNoteIndex + interval] };
  }
}
