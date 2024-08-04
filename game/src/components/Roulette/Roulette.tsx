'use client';
import React, { useState } from 'react';

const numbers = Array.from({ length: 37 }, (_, i) => i); // 包括0到36
const rouletteNumbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 24, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const Roulette: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [ballPosition, setBallPosition] = useState<number>(0);
  const [bet, setBet] = useState('');

  const degreesPerNumber = 360 / numbers.length;

  const spinWheel = () => {
    setIsSpinning(true);
    const newResult = Math.floor(Math.random() * numbers.length);
    setResult(newResult);

    const spins = 5; // 旋转的圈数
    const endRotation = spins * 360 + newResult * degreesPerNumber;

    setBallPosition(endRotation);

    setTimeout(() => {
      setIsSpinning(false);
    }, 5000); // 旋转5秒
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="relative h-64 w-64">
        <div
          className={`relative h-64 w-64 rounded-full border-4 border-gray-700 ${isSpinning ? 'animate-spin-slow' : ''}`}
          style={{ animationDuration: '5s' }}
        >
          <img
            src="/svg/roulette-wheel.svg"
            alt="Roulette Wheel"
            className="rounded-full"
          />
          <div className="absolute h-2 w-2 rounded-full bg-white transition-transform"></div>
        </div>
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-red-500"></div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl">
          {result !== null ? result : '?'}
        </div>
      </div>
      <div className="mt-8">
        <input
          type="number"
          value={bet}
          onChange={(e) => setBet(e.target.value)}
          className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2"
          placeholder="Enter your bet"
        />
        <button
          onClick={spinWheel}
          className="ml-4 rounded-md bg-blue-600 px-4 py-2 hover:bg-blue-700"
        >
          Spin
        </button>
      </div>
    </div>
  );
};

export default Roulette;
