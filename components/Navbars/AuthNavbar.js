import React from "react";
import Link from "next/link"; 

class AdminNavbar extends React.Component {
  render() {
    const links = [
      { href: "/auth/login", label: "ログイン" }
    ].map((link) => {
      link.key = `nav-link-${link.href}-${link.label}`;
      return link;
    });
    return (
      <>
          <nav className="text-center">
            <ul className="flex justify-center px-4 my-4 py-1">
              <li className="flex px-2 py-1">
                <Link href="/auth/register">
                  <a className="text-gray-500	no-underline text-xl tracking-tight">新規登録</a>
                </Link>
              </li>
              {links.map(({ key, href, label }) => (
                <li key={key} className="flex px-2 py-1">
                  <a className="text-gray-500	no-underline text-xl" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
      </>
    );
  }
}

export default AdminNavbar;
