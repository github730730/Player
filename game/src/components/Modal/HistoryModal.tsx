import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';

const demoData = Array.from({ length: 10 }, (_, i) => ({
  username: `user${i + 1}`,
  status: i % 2 === 0 ? 'active' : 'inactive',
  amount: `$${100 + i * 10}`,
  date: `2024-07-${30 - i}`,
}));
const HistoryModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;
  const itemsPerPage = 10;
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered>
      <ModalOverlay />
      <ModalContent
        className="dark:!bg-slate-800 dark:text-slate-200"
        maxW={'560px'}
      >
        <ModalHeader className="flex w-full items-center justify-center">
          Games History
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <table className="w-full text-left capitalize">
            <thead>
              <tr>
                <th className="border-b border-slate-600 px-4 py-2">
                  username
                </th>
                <th className="border-b border-slate-600 px-4 py-2">status</th>
                <th className="border-b border-slate-600 px-4 py-2">number</th>
                <th className="border-b border-slate-600 px-4 py-2">time</th>
              </tr>
            </thead>
            <tbody>
              {demoData.map((item, index) => (
                <tr key={index}>
                  <td className="border-b border-slate-600 px-4 py-2">
                    {item.username}
                  </td>
                  <td className="border-b border-slate-600 px-4 py-2">
                    {item.status}
                  </td>
                  <td className="border-b border-slate-600 px-4 py-2">
                    {item.amount}
                  </td>
                  <td className="border-b border-slate-600 px-4 py-2">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ModalBody>

        <ModalFooter className="flex w-full justify-center">
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HistoryModal;
