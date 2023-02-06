import { useState } from "react";
import * as dayjs from "dayjs";
import "./index.css";

type Level1To5 = 1 | 2 | 3 | 4 | 5;
const level1To5 = [1, 2, 3, 4, 5] satisfies Level1To5[];

type Emotion = "happy" | "sad" | "angry" | "stressed" | "excited";

interface EnergyLevelEntry {
  unixTimestamp: number;
  level: Level1To5;
}

interface MoodEntry {
  unixTimestamp: number;
  level: Level1To5;
  emotions: Emotion[];
}

function App() {
  const [energyLevelEntries, setEnergyLevelEntries] = useState<
    EnergyLevelEntry[]
  >([]);
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const dateNow = dayjs();

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <h1 className="">Energy level</h1>
      {level1To5.map((level) => (
        <button key={level} className={`w-10 h-6 bg-level${level}`}>
          {level}
        </button>
      ))}
    </>
  );
}

export default App;
