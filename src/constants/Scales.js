import { goToIntervalAfter } from "./Notes";

const scalesTypesIntervals = [
  {
    name: "major",
    intervals: [2, 2, 1, 2, 2, 2, 1]
  },
  {
    name: "minor",
    intervals: [2, 1, 2, 2, 1, 2, 2]
  }
];

/**
 * Get all notes of a chords based on root note
 * @param {object} rootNote
 * @param {string} scaleName [major | minor]
 *
 * @return Scale note composition
 */
export function getScaleNotesFromRoot(rootNote, scaleName) {
  const scale = [rootNote];
  let currentNote = rootNote;
  scalesTypesIntervals
    .find(scaleType => scaleType.name === scaleName)
    .intervals.forEach(interval => {
      currentNote = goToIntervalAfter(interval, currentNote);
      scale.push(currentNote);
    });

  return scale;
}
