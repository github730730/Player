'use client';
import classNames from 'classnames';
import React, { useState } from 'react';

const rouletteNumbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 24, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const Roulette: React.FC = () => {
  const [startRound, setStartRound] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div
        className={classNames(
          `ring-3 relative flex h-64 w-64 justify-center rounded-full ring-slate-800/80`
        )}
      >
        <img
          src="/svg/roulette-wheel.svg"
          alt="Roulette Wheel"
          className={classNames('absolute left-0 top-0 rounded-full', 'spin')}
        />

        {/* ball */}
        <div
          className={classNames(
            'z-50 flex h-full w-3 justify-center border',
            !startRound ? 'spin' : ''
          )}
        >
          <div
            className={classNames(
              'h-2 w-2 rounded-full bg-white',
              !startRound ? 'translate-y-9' : 'translate-y-[6px]'
            )}
          />
        </div>
      </div>

      <button onClick={() => setStartRound(true)}>start ball round</button>

      <style jsx>
        {`
          .spin {
            animation: spin-slow 10s linear infinite;
          }

          @keyframes spin-slow {
            0% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Roulette;
