import { useCallback, useEffect, useReducer, useRef } from 'react';
import type { TimerSession } from '../types/practice';

interface TimerState extends TimerSession {}

type TimerAction =
  | { type: 'start'; nowMs: number }
  | { type: 'stop'; nowMs: number }
  | { type: 'tick'; nowMs: number }
  | { type: 'reset' };

const initialState: TimerState = {
  state: 'idle',
  startAtMs: null,
  elapsedMs: 0,
  stoppedAtMs: null,
};

const reducer = (state: TimerState, action: TimerAction): TimerState => {
  switch (action.type) {
    case 'start': {
      if (state.state === 'running') {
        return state;
      }

      return {
        state: 'running',
        startAtMs: action.nowMs,
        elapsedMs: 0,
        stoppedAtMs: null,
      };
    }
    case 'tick': {
      if (state.state !== 'running' || state.startAtMs === null) {
        return state;
      }

      return {
        ...state,
        elapsedMs: Math.max(0, action.nowMs - state.startAtMs),
      };
    }
    case 'stop': {
      if (state.state !== 'running' || state.startAtMs === null) {
        return state;
      }

      return {
        state: 'stopped',
        startAtMs: null,
        elapsedMs: Math.max(0, action.nowMs - state.startAtMs),
        stoppedAtMs: action.nowMs,
      };
    }
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const useSolveTimer = () => {
  const [timer, dispatch] = useReducer(reducer, initialState);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (timer.state !== 'running') {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      return;
    }

    const update = () => {
      dispatch({ type: 'tick', nowMs: performance.now() });
      frameRef.current = requestAnimationFrame(update);
    };

    frameRef.current = requestAnimationFrame(update);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [timer.state]);

  const start = useCallback(() => {
    dispatch({ type: 'start', nowMs: performance.now() });
  }, []);

  const stop = useCallback(() => {
    dispatch({ type: 'stop', nowMs: performance.now() });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'reset' });
  }, []);

  return {
    timer,
    start,
    stop,
    reset,
    canStart: timer.state !== 'running',
    canStop: timer.state === 'running',
  };
};
