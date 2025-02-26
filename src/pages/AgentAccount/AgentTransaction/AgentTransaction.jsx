import useAgentTransactions from "../../../hooks/useAgentTransactions";

const AgentTransaction = () => {
  const [transaction] = useAgentTransactions();

  return (
    <div className="container mx-auto p-4 text-center mt-12">
      <h2 className="text-4xl text-white font-bold mb-4">All Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white font-bold text-xl">
            <tr>
              <th className="py-3 px-4 text-center">SL/No.</th>
              <th className="py-3 px-4 text-center">Sender Name</th>
              <th className="py-3 px-4 text-center">Sender Mobile</th>
              <th className="py-3 px-4 text-center">Receiver Mobile</th>
              <th className="py-3 px-4 text-center">Amount</th>
              <th className="py-3 px-4 text-center">Transaction ID</th>
              <th className="py-3 px-4 text-center">Transfer Type</th>
              <th className="py-3 px-4 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((tx, index) => (
              <tr key={tx._id} className="border-b text-center">
                <td className="py-3 px-4 font-bold text-indigo-800">
                  {index + 1}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  {tx.sender}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  0{tx.senderMobileNumber}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  0{tx.mobileNumber}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  ${tx.amount}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  {tx.transactionId}
                </td>
                <td
                  className={`py-3 px-4 font-bold ${
                    tx.transferType === "Cashout" ||
                    tx.transferType === "SendMoney"
                      ? "text-red-600"
                      : "text-green-800"
                  }`}
                >
                  {tx.transferType}
                </td>
                <td className="py-3 px-4 font-bold text-indigo-800">
                  {new Date(tx.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentTransaction;
