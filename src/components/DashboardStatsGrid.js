import React from 'react';
import { IoBagHandle } from 'react-icons/io5';

const DashboardStatsGrid = () => {
  const BoxWrapper = ({ children }) => {
    return (
      <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
        {children}
      </div>
    );
  };
  return (
    <div className='flex gap-4 w-full'>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
          <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>
              $5936.78
            </strong>
            <span className='text-sm text-green-500 pl-2'>+421</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-[#ea580c]'>
          <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>
            Total Expenses
          </span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>
              $5936.78
            </strong>
            <span className='text-sm text-green-500 pl-2'>+421</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
          <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>
            Total Customers
          </span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>
              $5936.78
            </strong>
            <span className='text-sm text-red-500 pl-2'>-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
          <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Orders</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>
              $5936.78
            </strong>
            <span className='text-sm text-red-500 pl-2'>-43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStatsGrid;
