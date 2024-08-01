import classNames from 'classnames';
import React from 'react';
const demoData = Array.from({ length: 10 }, (_, i) => ({
  username: `user${i + 1}`,
  status: i % 2 === 0 ? 'active' : 'inactive',
  amount: `$${100 + i * 10}`,
  date: `2024-07-${30 - i}`,
}));
const Player = () => {
  return (
    <div className="relative h-full min-h-[852px] w-full overflow-hidden rounded-xl bg-slate-900 ring ring-slate-500">
      <table className="w-full text-left capitalize">
        <thead>
          <tr className="bg-slate-950 font-semibold">
            <th className="px-4 py-2">Player</th>
            <th className="px-4 py-2">Bet</th>
            <th className="px-4 py-2">Cash-out</th>
            <th className="px-4 py-2">Payout</th>
          </tr>
        </thead>
        <tbody>
          {demoData.map((item, index) => (
            <tr
              key={index}
              className={classNames(
                index % 2 !== 0 && 'bg-slate-950',
                'hover:bg-slate-700'
              )}
            >
              <td className="px-4 py-2">{item.username}</td>
              <td className="px-4 py-2">{item.status}</td>
              <td className="px-4 py-2">{item.amount}</td>
              <td className="px-4 py-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="absolute bottom-0 left-0 flex h-10 w-full items-center justify-around bg-slate-950">
        <p>
          <span className="font-semibold text-stone-300">Players:</span>
          {demoData.length}
        </p>
        <p>
          <span className="font-semibold text-stone-300">Round:</span>
          28319
        </p>
        <p>
          <span className="font-semibold text-stone-300">Online:</span>
          123
        </p>
      </div>
    </div>
  );
};

export default Player;
