import { useCallback, useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useSolveTimer } from '../hooks/useSolveTimer';
import type { ScrambleSource, ScrambleState } from '../types/practice';
import { generateRandom333Scramble } from '../utils/scramble';
import { formatElapsedMs, formatTimerLabel } from '../utils/timeFormat';
import './PracticeSessionModal.css';

interface PracticeSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PracticeSessionModal({ isOpen, onClose }: PracticeSessionModalProps) {
  const [scramble, setScramble] = useState<ScrambleState | null>(null);
  const [isScrambleLoading, setIsScrambleLoading] = useState(false);
  const [scrambleError, setScrambleError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const requestIdRef = useRef(0);
  const { timer, start, stop, reset, canStart, canStop } = useSolveTimer();

  const loadScramble = useCallback(
    async (source: ScrambleSource) => {
      const requestId = ++requestIdRef.current;

      setIsScrambleLoading(true);
      setScrambleError(null);

      try {
        const nextScramble = await generateRandom333Scramble(source);
        if (requestId !== requestIdRef.current) {
          return;
        }

        setScramble(nextScramble);
      } catch (error) {
        console.error('Failed to generate scramble:', error);
        if (requestId !== requestIdRef.current) {
          return;
        }

        setScrambleError('Could not generate a scramble. Please try again.');
      } finally {
        if (requestId === requestIdRef.current) {
          setIsScrambleLoading(false);
        }
      }
    },
    [],
  );

  const clearTransientState = useCallback(() => {
    setScrambleError(null);
    setStatusMessage(null);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    requestIdRef.current += 1;
    reset();
    clearTransientState();
    loadScramble('initial');
  }, [clearTransientState, isOpen, loadScramble, reset]);

  const handleNewScramble = async () => {
    if (timer.state === 'running') {
      setStatusMessage('Finish your current solve before generating a new scramble.');
      return;
    }

    clearTransientState();
    reset();
    await loadScramble('manual');
  };

  const handleStart = () => {
    clearTransientState();
    start();
  };

  const handleStop = () => {
    stop();
    setStatusMessage('Solve recorded. Generate a new scramble for the next attempt.');
  };

  if (!isOpen) {
    return null;
  }

  const timerDisplay = formatElapsedMs(timer.elapsedMs);
  const timerStatus = formatTimerLabel(timer.elapsedMs, timer.state);

  return (
    <div className="practice-modal-backdrop" onClick={onClose}>
      <div className="practice-modal" onClick={(event) => event.stopPropagation()}>
        <header className="practice-modal-header">
          <h2 className="title is-4">Practice Session</h2>
          <button className="button is-white" onClick={onClose} aria-label="Close practice session">
            <MdClose size={20} />
          </button>
        </header>

        <section className="practice-modal-content">
          <div className="practice-block">
            <div className="practice-block-header">
              <h3 className="title is-6">Scramble</h3>
              <button
                className="button is-link is-light is-small"
                onClick={handleNewScramble}
                disabled={isScrambleLoading}
              >
                {isScrambleLoading ? 'Generating...' : 'New Scramble'}
              </button>
            </div>

            <div className="scramble-display" aria-live="polite">
              <span className="scramble-text">{scramble?.value ?? 'No scramble available yet.'}</span>
            </div>
            {scrambleError && <p className="practice-error">{scrambleError}</p>}
          </div>

          <div className="practice-block">
            <div className="practice-block-header">
              <h3 className="title is-6">Timer</h3>
              <span className={`timer-state-pill timer-state-${timer.state}`}>{timerStatus}</span>
            </div>

            <div className="timer-display" aria-live="polite">
              {timerDisplay}
            </div>

            <div className="timer-controls">
              <button className="button is-primary" onClick={handleStart} disabled={!canStart || isScrambleLoading}>
                Start
              </button>
              <button className="button is-warning is-light" onClick={handleStop} disabled={!canStop}>
                Stop
              </button>
            </div>
          </div>

          {statusMessage && <p className="practice-status">{statusMessage}</p>}
        </section>
      </div>
    </div>
  );
}
