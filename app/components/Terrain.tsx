import type { Week } from "../lib/types";
import { getWeekVolume } from "../lib/types";

const CHART_HEIGHT = 300;
const MAX_VOLUME = 1000;

export const volumeToY = (volume: number): number => {
  return CHART_HEIGHT - (volume / MAX_VOLUME) * CHART_HEIGHT;
};

const WEEK_WIDTH = 150;

export const indexToX = (index: number): number => {
  return index * WEEK_WIDTH;
};