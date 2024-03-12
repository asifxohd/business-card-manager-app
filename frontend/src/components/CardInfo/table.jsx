

const Table = () => {

    return (
      <div className="">
        <div className="overflow-x-auto">
          {/* Search Bar */}
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black w-1/2 bg-white text-black"
            />
           <div className="flex gap-3">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
                Sort
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
                Filter 
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
                Add New
                </button>
           </div>
          </div>
  
          {/* Table */}
          <div className="shadow-md sm:rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Logo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Website
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Profession
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-black">
                {/* Add your data rows here */}
                {/* Example row */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Logo</td>
                  <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    john@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">1234567890</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    www.example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Developer</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    123 Main St, City, Country
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Table;
  