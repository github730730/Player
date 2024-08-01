'use client';
import Bets from '@/components/Bets/Bets';
import Chart from '@/components/Chart/Chart';
import NavBar from '@/components/Header/NavBar';
import HelpModal from '@/components/Modal/HelpModal';
import HistoryModal from '@/components/Modal/HistoryModal';
import Player from '@/components/Player/Player';
import Suspension from '@/components/Suspension/Suspension';
import useAppStore from '@/store/useAppStore';
import { useState } from 'react';
import { useConnect, useDisconnect } from 'wagmi';
import { useStore } from 'zustand';

export default function Home() {
  const appData = useStore(useAppStore, (state) => state);
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  const [isOpenHistoryModal, setIsOpenHistoryModal] = useState(false);
  const [isOpenHelpModal, setIsOpenHelpModal] = useState(false);

  return (
    <main className="flex h-screen min-h-screen flex-col items-center dark:bg-slate-950 dark:text-white">
      <div className="w-full">
        <NavBar
          setIsOpenHistoryModal={setIsOpenHistoryModal}
          setIsOpenHelpModal={setIsOpenHelpModal}
        />
      </div>

      {/* Suspension */}
      <div className="fixed left-3 top-2/3 z-50">
        <Suspension />
      </div>

      <HistoryModal
        isOpen={isOpenHistoryModal}
        setIsOpen={setIsOpenHistoryModal}
      />
      <HelpModal isOpen={isOpenHelpModal} setIsOpen={setIsOpenHelpModal} />

      {/* Main */}
      <div className="flex w-full flex-grow justify-between gap-x-6 px-16 py-8">
        {/* Left */}
        <div className="flex h-full w-3/5 flex-col gap-y-6">
          <div className="flex-grow">
            <Chart />
          </div>
          <div className="flex-grow">
            <Bets />
          </div>
        </div>
        {/* Right */}
        <div className="flex h-full w-2/5">
          <Player />
        </div>
      </div>
    </main>
  );
}
