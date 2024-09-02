// src/pages/NotFound.tsx

import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] w-full text-center text-slate-200 font-light">
      <p className='text-5xl p-2'>404</p>
      <p className='text-3xl border border-t-1 border-b-0 border-x-0 border-slate-600 p-2'>Not Found</p>
    </div>
  );
};

export default NotFound;
