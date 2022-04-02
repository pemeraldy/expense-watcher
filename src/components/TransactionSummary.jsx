import React from "react";
import { ChevronRightIcon, GiftIcon } from "@heroicons/react/solid";

export default function TransactionSummary() {
  return (
    <div className=" mt-16 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Transaction List</h1>
        <div className="text-gray-400 cursor-pointer flex items-center">
          <span className="text-sm ">View All</span>
          <span className="ml-1">
            <ChevronRightIcon className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* tabs and tab item */}
      <ul className="flex items-center text-base font-bold space-x-3 mt-9 ">
        <li>All</li>
        <li>Revenue</li>
        <li>Expense</li>
      </ul>
      <div className="mt-9 space-y-5">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <GiftIcon className="w-4 h-4" />
            <div className="ml-5">
              <h4 className="text-base font-semibold">Gamin Items</h4>
              <p className="text-gray-400 font-light text-sm">toi-rock.io</p>
            </div>
          </div>
          <p className="font-semibold"> -$6000</p>
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <GiftIcon className="w-4 h-4" />
            <div className="ml-5">
              <h4 className="text-base font-semibold">Gamin Items</h4>
              <p className="text-gray-400 font-light text-sm">toi-rock.io</p>
            </div>
          </div>
          <p className="font-semibold"> -$6000</p>
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <GiftIcon className="w-4 h-4" />
            <div className="ml-5">
              <h4 className="text-base font-semibold">Gamin Items</h4>
              <p className="text-gray-400 font-light text-sm">toi-rock.io</p>
            </div>
          </div>
          <p className="font-semibold"> -$6000</p>
        </div>
      </div>
    </div>
  );
}
