import classNames from 'classnames';
import React, { useState } from 'react';

const Bets = () => {
  const [selectedValue, setSelectedValue] = useState<number>(0.05);

  return (
    <div className="relative flex h-full min-h-[348px] w-full flex-col justify-center gap-y-6 overflow-hidden rounded-xl bg-slate-900 ring ring-slate-500">
      {/* Title */}
      <div className="absolute left-0 top-0 w-full bg-slate-950 py-2 text-center text-[20px] font-bold uppercase">
        Place your bet
      </div>

      {/* Auto Claimed */}
      {/* <div className='w-full flex items-center '>
        AUTO CASH OUT
      </div> */}

      {/* Value Buttons */}
      <div className="mt-10 flex w-full items-center justify-center">
        <div className="flex w-1/2 flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedValue(0.01)}
            className={classNames(
              'w-[100px] rounded-md py-1 ring-1 ring-slate-600 hover:ring-slate-400',
              selectedValue === 0.01
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ring-slate-300'
                : 'bg-slate-800 ring-slate-600 hover:bg-slate-700'
            )}
          >
            0.01
          </button>
          <button
            onClick={() => setSelectedValue(0.05)}
            className={classNames(
              'w-[100px] rounded-md py-1 ring-1 ring-slate-600 hover:ring-slate-400',
              selectedValue === 0.05
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ring-slate-300'
                : 'bg-slate-800 ring-slate-600 hover:bg-slate-700'
            )}
          >
            0.05
          </button>
          <button
            onClick={() => setSelectedValue(0.1)}
            className={classNames(
              'w-[100px] rounded-md py-1 ring-1 ring-slate-600 hover:ring-slate-400',
              selectedValue === 0.1
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ring-slate-300'
                : 'bg-slate-800 ring-slate-600 hover:bg-slate-700'
            )}
          >
            0.1
          </button>
          <button
            onClick={() => setSelectedValue(0.5)}
            className={classNames(
              'w-[100px] rounded-md py-1 ring-1 ring-slate-600 hover:ring-slate-400',
              selectedValue === 0.5
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ring-slate-300'
                : 'bg-slate-800 ring-slate-600 hover:bg-slate-700'
            )}
          >
            0.5
          </button>
          <button
            onClick={() => setSelectedValue(1)}
            className={classNames(
              'w-[100px] rounded-md py-1 ring-1 ring-slate-600 hover:ring-slate-400',
              selectedValue === 1
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ring-slate-300'
                : 'bg-slate-800 ring-slate-600 hover:bg-slate-700'
            )}
          >
            1
          </button>
          <button
            onClick={() => setSelectedValue(10)}
            className={classNames(
              'w-[100px] rounded-md py-1 ring-1 ring-slate-600 hover:ring-slate-400',
              selectedValue === 10
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ring-slate-300'
                : 'bg-slate-800 ring-slate-600 hover:bg-slate-700'
            )}
          >
            10
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-y-8">
        <input
          type="number"
          value={selectedValue}
          defaultValue={0.05}
          onChange={(e) => {
            setSelectedValue(Number(e.target.value));
          }}
          placeholder="Please enter your bet amount..."
          className="h-10 w-[268px] rounded bg-slate-950 pl-4 ring-1 ring-slate-500"
        />

        <button className="group relative w-[268px] rounded-md bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-500 py-1.5 font-extrabold">
          {/* Hover Mask */}
          <div className="invisible absolute left-0 top-0 h-[42px] w-full rounded-md bg-slate-900/20 group-hover:visible" />
          <span className="text-[20px] uppercase">Join Game</span>
        </button>

        <button className="group relative w-[268px] rounded-md bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-500 py-1.5 font-extrabold">
          {/* Hover Mask */}
          <div className="invisible absolute left-0 top-0 h-[42px] w-full rounded-md bg-slate-900/20 group-hover:visible" />
          <span className="text-[20px] uppercase">Receive award</span>
        </button>
      </div>
    </div>
  );
};

export default Bets;
