import React from "react";

// layout for this page
import Admin from "layouts/Admin.js";

class Index extends React.Component {
  render() {
    return (
      <>
        {/* Page content */}
        <div class="text-gray-900">
          <div class="p-4 flex">
            <h1 class="text-3xl">
              授業員一覧
            </h1>
          </div>
          <div class="px-3 py-4 flex justify-center">
            <table class="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr class="border-b">
                  <th class="text-left p-3 px-5">Name</th>
                  <th class="text-left p-3 px-5">Email</th>
                  <th class="text-left p-3 px-5">Role</th>
                  <th></th>
                </tr>
                <tr class="border-b hover:bg-orange-100 bg-gray-100">
                  <td class="p-3 px-5">user.name</td>
                  <td class="p-3 px-5">user.email</td>
                  <td class="p-3 px-5">
                    user
                  </td>
                  <td class="p-3 px-5 flex justify-end"><button type="button"
                      class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button><button
                      type="button"
                      class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </>
    );
  }
}

Index.layout = Admin;

export default Index;
