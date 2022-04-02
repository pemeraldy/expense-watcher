import React from "react";

export default function TransactionItem({Icon, category, receiver, amount, type}) {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <Icon className="w-4 h-4" />
        <div className="ml-5">
          <h4 className="text-base font-semibold">{category}</h4>
          <p className="text-gray-400 font-light text-sm">{receiver}</p>
        </div>
      </div>
      <p className="font-semibold"> {` ${type === 'expense' ? '-' : ''} $${amount}`}</p>
    </div>
  );
}
