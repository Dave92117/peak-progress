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

  {
    startDate: "2026-07-13",
    goalVolume: 800,
    sessions: [
      { date: "2026-07-13", type: "strength", durationMin: 80, intensity: 8 },
      { date: "2026-07-15", type: "cardio", durationMin: 70, intensity: 5 },
    ],
  },

  {
    startDate: "2026-07-20",
    goalVolume: 800,
    sessions: [
      { date: "2026-07-21", type: "mobility", durationMin: 110, intensity: 8 },
      { date: "2026-07-24", type: "cardio", durationMin: 50, intensity: 8 },
    ],
  },

  {
    startDate: "2026-07-27",
    goalVolume: 800,
    sessions: [
      { date: "2026-07-27", type: "strength", durationMin: 30, intensity: 2 },
      { date: "2026-07-30", type: "mobility", durationMin: 10, intensity: 2 },
    ],
  },

  {
    startDate: "2026-08-03",
    goalVolume: 800,
    sessions: [
      { date: "2026-08-03", type: "strength", durationMin: 60, intensity: 3 },
      { date: "2026-08-06", type: "cardio", durationMin: 40, intensity: 9 },
    ],
  },
];
