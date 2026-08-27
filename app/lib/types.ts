export type Session = {
  date: string;
  type: "strength" | "cardio" | "mobility";
  durationMin: number;
  intensity: number; // 1-10
  notes?: string;
};

export type Week = {
  startDate: string;
  goalVolume: number;
  sessions: Session[];
};


export const TYPE_COLORS: Record<Session["type"], string> = {
  strength: "#712B13",
  cardio: "#0F6E56",
  mobility: "#F2C94C",
};

export const getWeekVolume = (week: Week): number => {
  return week.sessions.reduce(
    (total, session) => total + session.durationMin * session.intensity,
    0
  );
};