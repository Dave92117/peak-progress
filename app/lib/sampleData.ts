import type { Session, Week } from "./types";

export const sampleWeeks: Week[] = [
  {
    startDate: "2026-07-06",
    goalVolume: 800,
    sessions: [
      { date: "2026-07-06", type: "strength", durationMin: 60, intensity: 7 },
      { date: "2026-07-08", type: "cardio", durationMin: 30, intensity: 5 },
    ],
  },

    {startDate: "2026-07-13",
    goalVolume: 800,
    sessions: [
      { date: "2026-07-13", type: "strength", durationMin: 80, intensity: 8 },
      { date: "2026-07-15", type: "cardio", durationMin: 70, intensity: 5 },
    ],
  },
];