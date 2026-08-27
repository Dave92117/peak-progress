type Session = {
  date: string;
  type: "strength" | "cardio" | "mobility";
  durationMin: number;
  intensity: number; // 1-10
  notes?: string;
};


