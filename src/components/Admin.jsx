import React from "react";

const delegates = [
  {
    id: 1,
    userId: "user1@test.com",
    viewOnly: false,
    viewAndUpdate: true,
    admin: true,
  },
  {
    id: 2,
    userId: "user2@test.com",
    viewOnly: false,
    viewAndUpdate: true,
    admin: false,
  },
  {
    id: 3,
    userId: "user3@test.com",
    viewOnly: true,
    viewAndUpdate: false,
    admin: false,
  },
];

export default function DelegatesTable() {
  return (
    <div>
      <div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            User Id
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            group@test.com
          </dd>
        </div>
      </div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-lg font-semibold text-gray-900">
            List of delegates
          </h1>
        </div>
      </div>
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    User Id
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    View Only
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    View & Update
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Admin
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {delegates.map((delegate) => (
                  <tr key={delegate.id}>
                    <td className="px-3 py-4 text-sm text-gray-900">
                      {delegate.id}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-900">
                      {delegate.userId}
                    </td>
                    <td className="px-3 py-4 text-sm text-center text-gray-500">
                      <input
                        type="checkbox"
                        checked={delegate.viewOnly}
                        readOnly
                      />
                    </td>
                    <td className="px-3 py-4 text-sm text-center text-gray-500">
                      <input
                        type="checkbox"
                        checked={delegate.viewAndUpdate}
                        readOnly
                      />
                    </td>
                    <td className="px-3 py-4 text-sm text-center text-gray-500">
                      <input
                        type="checkbox"
                        checked={delegate.admin}
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
