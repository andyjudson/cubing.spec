export type ScrambleSource = 'initial' | 'manual';

export interface ScrambleState {
  value: string;
  generatedAtMs: number;
  source: ScrambleSource;
}

export type TimerPhase = 'idle' | 'running' | 'stopped';

export interface TimerSession {
  state: TimerPhase;
  startAtMs: number | null;
  elapsedMs: number;
  stoppedAtMs: number | null;
}

export interface PracticeAttemptView {
  scramble: ScrambleState;
  timer: TimerSession;
  finalTimeText: string | null;
}
