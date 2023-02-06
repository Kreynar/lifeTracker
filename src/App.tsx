import { useCallback, useState } from "react";
import * as dayjs from "dayjs";
import "./index.css";

type Level1To5 = 1 | 2 | 3 | 4 | 5;
const level1To5 = [1, 2, 3, 4, 5] satisfies Level1To5[];

type Emotion = "happy" | "sad" | "angry" | "stressed" | "excited";

interface EnergyLevelEntry {
  timestampIso: string;
  level: Level1To5;
}

interface MoodEntry {
  timestampIso: string;
  level: Level1To5;
  emotions: Emotion[];
}

function App() {
  const [energyLevelEntries, setEnergyLevelEntries] = useState<
    EnergyLevelEntry[]
  >([]);
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const dateNow = dayjs();

  const addEnergyLevelEntry = useCallback(
    (level: Level1To5) => {
      setEnergyLevelEntries((prev) => [
        ...prev,
        {
          timestampIso: dayjs().toISOString(),
          level,
        },
      ]);
    },
    [setEnergyLevelEntries]
  );

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <h1 className="">Energy level</h1>
      {level1To5.map((level) => (
        <button
          key={level}
          className={`w-10 h-6 bg-level${level}`}
          onClick={() => addEnergyLevelEntry(level)}
        >
          {level}
        </button>
      ))}
      <h1 className="">Previous energy levels</h1>
      {energyLevelEntries.map((energyLevelEntry) => (
        <li key={energyLevelEntry.timestampIso}>
          {dayjs(energyLevelEntry.timestampIso).format()} |
          {energyLevelEntry.level}
        </li>
      ))}
      <h1 className="">Mood level</h1>
      {level1To5.map((level) => (
        <button key={level} className={`w-10 h-6 bg-level${level}`}>
          {level}
        </button>
      ))}
    </>
  );
}

export default App;
