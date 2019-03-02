import { goToIntervalAfter, createNote } from "./Notes";

const chordsTypesIntervals = [
  {
    name: "major",
    intervals: [4, 7, 11]
  },
  {
    name: "dominant",
    intervals: [4, 7, 10]
  },
  {
    name: "minor",
    intervals: [3, 7, 10]
  }
];

/**
 * Get all notes of a chords based on root note
 * @param {object} rootNote
 * @param {string} chordName [major | dominant | minor]
 *
 * @return Chord note composition
 */
export function getChordFromRoot(rootNote, chordName) {
  const chord = [createNote(rootNote.name, rootNote.octave)];
  chordsTypesIntervals
    .find(chordType => chordType.name === chordName)
    .intervals.forEach(interval =>
      chord.push(goToIntervalAfter(interval, rootNote))
    );

  return chord;
}
