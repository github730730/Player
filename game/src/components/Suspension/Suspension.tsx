import { DiscordIcon, TelegramIcon, TwitterIcon } from '@/tool/Icon';
import React from 'react';

const Suspension = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700"
      >
        <TwitterIcon width={24} height={24} className="" />
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700"
      >
        <TelegramIcon width={24} height={24} className="" />
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700"
      >
        <DiscordIcon width={24} height={24} className="" />
      </a>
    </div>
  );
};

export default Suspension;
