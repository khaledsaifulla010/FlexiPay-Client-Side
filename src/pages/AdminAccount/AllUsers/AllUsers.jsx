import useAllUsers from "../../../hooks/useAllUsers";

const AllUsers = () => {
  const [allUsers] = useAllUsers();

  return (
    <div className="container mx-auto p-4 text-center mt-12">
      <h2 className="text-4xl text-white font-bold mb-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-400 shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white font-bold text-xl">
            <tr>
              <th className="text-center py-3 px-4">SL/No.</th>
              <th className="py-2 px-4 text-center">Name</th>
              <th className="py-2 px-4 text-center">Email</th>
              <th className="py-2 px-4 text-center">Mobile</th>
              <th className="py-2 px-4 text-center">Role Type</th>
              <th className="py-2 px-4 text-center">Current Balance</th>
              <th className="py-2 px-4 text-center">NID</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr key={user._id} className="border-b text-center">
                <td className="text-center py-3 px-4 font-bold text-indigo-800 text-base">
                  {index + 1}
                </td>
                <td className="py-2 px-4 font-bold text-indigo-800">
                  {user.name}
                </td>
                <td className="py-2 px-4 font-bold text-indigo-800">
                  {user.email}
                </td>
                <td className="py-2 px-4 font-bold text-indigo-800">
                  0{user.mobileNumber}
                </td>
                <td className="py-2 px-4 font-bold text-indigo-800">
                  {user.accountType}
                </td>
                <td className="py-2 px-4 font-bold  text-indigo-800">
                  ${user.myBalance}
                </td>
                <td className="py-2 px-4 font-bold text-indigo-800">
                  {user.nid}
                </td>
                <td className="py-2 px-4 ">
                  <button className="px-3 py-1 rounded bg-red-500 hover:bg-red-700 text-white">
                    Block
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
