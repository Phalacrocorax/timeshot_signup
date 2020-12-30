import React from "react";
import Link from "next/link";
// reactstrap components

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <div class="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
        <div class="flex justify-end w-full">
              <div className="mt-2">
                <Link href="/auth/login">Logout</Link>
              </div>
         </div>
        </div>
      </>
    );
  } 
}

export default AdminNavbar;
