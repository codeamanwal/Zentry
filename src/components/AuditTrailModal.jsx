const AuditTrailModal = ({ data, onClose }) => {
  if (!data) return null;

  const auditDetails = [
    {
      dateTime: "25.09.2023 01:00:01",
      userId: "test1@test.com",
      action: "Assigned to me",
      actionDetails: "",
    },
    {
      dateTime: "25.09.2023 01:05:00",
      userId: "test1@test.com",
      action: "Updated Data",
      actionDetails: "RECU: '' -> 'RECU_1'",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-lg font-bold">Audit Trail: {data.uniqueRef}</h2>
          <button className="text-red-500 hover:text-red-700" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="overflow-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-sm font-semibold text-gray-600"
                >
                  Date Time
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-sm font-semibold text-gray-600"
                >
                  User Id
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-sm font-semibold text-gray-600"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-sm font-semibold text-gray-600"
                >
                  Action Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {auditDetails.map((detail, index) => (
                <tr key={index}>
                  <td className="px-3 py-2 text-sm text-gray-900">
                    {detail.dateTime}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-900">
                    {detail.userId}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-900">
                    {detail.action}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-900">
                    {detail.actionDetails}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditTrailModal;
