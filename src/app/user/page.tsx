'use clien';

import React from 'react';
import CustomerTable from './components/Table';
import { Button } from '@radix-ui/themes';
import { PiPlusCircleBold } from 'react-icons/pi';
import Search from '@/components/Search';
import UserDialog from './components/UserDialog';
const LableTHeader: string[] = [
  '#ID',
  'NAME',
  'EMAIL',
  'PHONE NUMBER',
  'STATUS',
  'ADDRESS',
  'CREATED DATE',
];

const User = () => {
  return (
    <div className="h-[calc(100vh-88px)] overflow-auto">
      <div
        className="card no-hover flex flex-col gap-5 !p-5 md:!p-[26px] lg:!py-5 lg:flex-row
lg:items-center lg:gap-4 "
      >
        <h1 className="text-white flex-1 text-center lg:text-left text-4xl font-bold bg-[#171F29] rounded-lg !p-5 md:!p-[26px] lg:!py-5">
          Products Management
        </h1>
      </div>
      <div className="flex flex-col-reverse gap-4  md:flex-col lg:flex-row lg:justify-between p-5 pt-0">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <UserDialog />
        </div>
        <div className="relative lg:w-[326px]">
          <Search placeholder="Search Product ..." />
        </div>
      </div>
      <div className="px-5">
        <CustomerTable lableTHeaders={LableTHeader} />
      </div>
    </div>
  );
};

export default User;
