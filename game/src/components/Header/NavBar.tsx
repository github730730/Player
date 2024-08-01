import React from 'react';

const NavBar = ({
  setIsOpenHistoryModal,
  setIsOpenHelpModal,
}: {
  setIsOpenHistoryModal: (open: boolean) => void;
  setIsOpenHelpModal: (open: boolean) => void;
}) => {
  return (
    <div className="flex w-full items-center justify-between px-10 py-2">
      {/* Logo */}
      <a href="/" className="h-12 w-20 rounded-full bg-slate-400"></a>

      {/* Section */}
      <div className="flex items-center gap-x-10">
        <button className="group flex flex-col items-center justify-center">
          <div className="h-6 w-6 bg-slate-400"></div>
          <span className="text-slate-200 group-hover:text-slate-50">
            online:{123}
          </span>
        </button>

        <button
          onClick={() => setIsOpenHistoryModal(true)}
          className="group flex flex-col items-center justify-center"
        >
          <div className="h-6 w-6 bg-slate-400"></div>
          <span className="text-slate-200 group-hover:text-slate-50">
            history
          </span>
        </button>

        <button
          onClick={() => setIsOpenHelpModal(true)}
          className="group flex flex-col items-center justify-center"
        >
          <div className="h-6 w-6 bg-slate-400"></div>
          <span className="text-slate-200 group-hover:text-slate-50">help</span>
        </button>
      </div>

      {/* Wallet */}
      <div>
        <w3m-button />
      </div>
    </div>
  );
};

export default NavBar;
