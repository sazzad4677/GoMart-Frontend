import { ViewListIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myOrders } from "../../actions/orderAction";

const RecentOrder = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.myOrder);
  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch]);
  const date = (value) => new Date(value).toISOString().split("T")[0];
  return (
    <div className="font-display -mx-4 overflow-x-auto rounded-lg px-4 py-4 sm:-mx-8 sm:px-8">
      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <div className="border-b-2 border-gray-200 bg-gray-100 p-3 shadow-sm ">
          <p className="flex items-center gap-2 space-x-2 font-semibold leading-8 text-gray-900">
            <ViewListIcon className="h-4 w-4" />
            Recent Order
          </p>
        </div>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Order#
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Placed On
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Items
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Total
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Status
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((value, key) => (
              <tr key={key}>
                {/* Order id */}
                <td className="border border-gray-200 bg-white px-5 py-2 text-sm">
                  <div className="flex items-center">
                    <p className="whitespace-no-wrap text-skin-secondary">
                      {value._id}
                    </p>
                  </div>
                </td>
                <td className="border border-gray-200 bg-white px-5 py-3 text-sm">
                  <p className="whitespace-no-wrap text-gray-900">
                    {date(value.createdAt)}
                  </p>
                </td>
                {/* items */}
                <td className="border border-gray-200 bg-white px-5 py-3 text-sm">
                  {value.orderItems.map((value) => (
                    <tr className="w-full border-b border-gray-200 bg-white text-sm mb-2">
                      <div className="flex w-full items-center gap-2">
                        <div div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src={value.image}
                            alt={value.name}
                          />
                        </div>
                        <div>
                          <p className="whitespace-no-wrap text-skin-secondary text-gray-900">
                            {value.name}
                          </p>
                        </div>
                      </div>
                    </tr>
                  ))}
                </td>
                <td className="border border-gray-200 bg-white text-sm">
                  <p className="whitespace-no-wrap text-gray-900">
                    {value.totalPrice} TK
                  </p>
                </td>
                <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden
                      className={`absolute inset-0 rounded-full ${
                        value.orderStatus === "Processing"
                          ? "bg-yellow-500"
                          : "bg-green-200"
                      } opacity-50`}
                    ></span>
                    <span className="relative text-white">
                      {value.orderStatus}
                    </span>
                  </span>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-3 text-sm">
                  <Link to="#" className="text-blue-500">
                    Manage
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
