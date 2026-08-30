import type { Week } from "../lib/types";
import { getWeekVolume } from "../lib/types";
import { sampleWeeks } from "../lib/sampleData";
const CHART_HEIGHT = 300;
const MAX_VOLUME = 1000;

export const volumeToY = (volume: number): number => {
  return CHART_HEIGHT - (volume / MAX_VOLUME) * CHART_HEIGHT;
};

const WEEK_WIDTH = 150;

export const indexToX = (index: number): number => {
  return index * WEEK_WIDTH;
};

export const points = sampleWeeks.map(
  (week, index) => ({
    x: indexToX(index),
    y: volumeToY(getWeekVolume(week))
  })
);

export  const pointStrings = points.map((point) => `${point.x},${point.y}`).join(" ");

export function Terrain() {
  return (
    <svg viewBox="0 0 300 300">
      <polyline points={pointStrings} fill="none" stroke="black" strokeWidth="2" />
    </svg>
  );
}