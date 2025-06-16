import router from "next/router";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { UsersRound, LogOut } from "lucide-react";
import ThailandFlag from "@/app/assets/images/flags/th.svg";
import {
  UserDetailModel,
  MenuResponseModelListBaseResponseModel,
  MenuResponseModelListBaseResponseModelFromJSON,
} from "@/api_main";
import Link from "next/link";

export default function Menu({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const menuRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // const [userDetail, setUserDetail] = useState<UserDetailModel>(
  //   JSON.parse(sessionStorage.getItem("userDetail") ?? "")
  // );
  // const [menu, setMenu] = useState<MenuResponseModelListBaseResponseModel>({
  //   data: JSON.parse(sessionStorage.getItem("menu") ?? ""),
  // });
  const [userDetail, setUserDetail] = useState<UserDetailModel | null>(null);
  const [menu, setMenu] = useState<MenuResponseModelListBaseResponseModel>({
    data: [],
    success: false,
    statusCode: 200,
    message: "",
  });

  useEffect(() => {
    const storedUserDetail = sessionStorage.getItem("userDetail");
    const storedMenu = sessionStorage.getItem("menu"); // Assuming you also store 'menu'
    if (storedUserDetail) {
      const parsedUserDetail: UserDetailModel = JSON.parse(storedUserDetail);
      setUserDetail(parsedUserDetail);
    }

    if (storedMenu) {
      const menuResponse: MenuResponseModelListBaseResponseModel = {
        data: JSON.parse(storedMenu),
        success: true,
        message: "Menus loaded from session storage",
      };
      setMenu(menuResponse);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (path: string) => {
    router.push(path); // This pushes
  };

  const handleLogout = async () => {
    console.log("Dashboard");
    // sessionStorage.removeItem("authToken");
    // sessionStorage.removeItem("refreshToken");
    // sessionStorage.removeItem("permission");
    // sessionStorage.removeItem("menu");
    // router.push("/login");

    console.log("logout");
    console.log(menu);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 w-full">
        <nav className="bg-white shadow-sm h-16 flex items-center justify-between px-4 lg:px-6 z-50 fixed w-full top-0">
          <div className="flex items-center ml-4">
            <span className="text-xl font-semibold text-fa-primary tracking-wide">
              FA BACKOFFICE
            </span>
            <button
              id="menu-toggle-button"
              onClick={toggleMenu}
              className="text-fa-primary focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 rounded-md  ml-4"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800 p-2 rounded-full focus:outline-none">
              <img
                src={ThailandFlag.src}
                alt="Thailand Flag"
                className="w-6 h-6"
              />
            </button>

            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                <div className="w-fit px-2 h-8 rounded-full bg-fa-primary flex items-center justify-center text-white font-bold text-sm">
                  {userDetail?.employeeCode}
                </div>
                <span className="hidden md:block text-sm">
                  {userDetail?.firstName} {userDetail?.lastName}
                </span>
                <UsersRound></UsersRound>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg"
                >
                  Logout
                </a>
              </div>
            </div>

            {/* Logout Icon */}
            <button
              className="text-gray-600 hover:text-red-500 p-2 rounded-full focus:outline-none transition-colors duration-200"
              onClick={handleLogout}
            >
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </nav>

        <div className="flex pt-16">
          <aside
            className={`
            fixed top-0 left-0 h-full shadow-lg w-64 transform transition-transform duration-300 ease-in-out z-40 pt-16
            ${
              isMenuOpen
                ? "translate-x-0 lg:relative lg:translate-x-0 lg:pt-0 lg:shadow-none lg:bg-transparent lg:border-r lg:border-gray-200"
                : "-translate-x-full"
            }
            
          `}
          >
            <div className="p-4 overflow-y-auto h-screen bg-white">
              <ul className="space-y-1">
                {menu.data?.map((item) => (
                  <li key={item.menuId} className="group">
                    {item.subMenu && item.subMenu.length > 0 ? (
                      <>
                        <button className="flex items-center justify-between w-full p-3 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none">
                          <div className="flex items-center">
                            {item.menuName}
                          </div>
                        </button>
                        <ul
                          key={item.menuId + "-sub"}
                          className="pl-8 pt-1 space-y-1 hidden group-hover:block lg:group-hover:block"
                        >
                          {item.subMenu.map((subItem) => (
                            <li key={subItem.menuId}>
                              <button
                                onClick={() =>
                                  handleClick(subItem.menuRoute || "#")
                                }
                                className="flex items-center justify-between w-full p-3 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
                              >
                                <div className="flex items-center">
                                  {subItem.menuName}
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={item.menuRoute || "#"}
                        className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
                      >
                        {item.menuName}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="flex-1 bg-gray-100 p-6 mt-4 lg:ml-0 lg:mt-0 w-auto">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-500 mb-4">
              <span className="text-gray-700">หน้าหลัก</span> / Bank Reconcile /{" "}
              <span className="font-semibold text-blue-600">
                นำเข้า Statement
              </span>
            </div>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
