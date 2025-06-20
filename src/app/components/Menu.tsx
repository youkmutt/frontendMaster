import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import ThailandFlag from "@/app/assets/images/flags/th.svg";
import USFlag from "@/app/assets/images/flags/us.svg";
import {
  UserDetailModel,
  MenuResponseModelListBaseResponseModel,
} from "@/api_main";
import Link from "next/link";

export default function Menu({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [openSubMenuId, setOpenSubMenuId] = useState<number | null>(null);
  const [nowMenuId, setNowMenuId] = useState<number | null>(null);
  const [nowSubMenuId, setNowSubMenuId] = useState<number | null>(null);
  const [userDetail, setUserDetail] = useState<UserDetailModel | null>(null);
  const [menu, setMenu] = useState<MenuResponseModelListBaseResponseModel>({
    data: [],
    success: false,
    statusCode: 200,
    message: "",
  });

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const storedUserDetail = sessionStorage.getItem("userDetail");
    const storedMenu = sessionStorage.getItem("menu");
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

      if (pathname === "/pages/dashboard") {
        handleMenuToggle(0);
        setOpenMenuId(0);
        setOpenSubMenuId(0);
        setNowMenuId(0);
        setNowSubMenuId(0);
      } else if (menuResponse.data) {
        for (const item of menuResponse.data) {
          if (item.sub_menu) {
            for (const subItem of item.sub_menu) {
              if ("/pages/" + subItem.menu_route === pathname) {
                handleMenuToggle(item.menu_id ?? 0);
                setOpenMenuId(item.menu_id ?? 0);
                setOpenSubMenuId(subItem.menu_id ?? 0);
                setNowMenuId(item.menu_id ?? 0);
                setNowSubMenuId(subItem.menu_id ?? 0);
                break;
              }
            }
          }
        }
      }
    }
  }, [pathname]);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    if (width > 1024) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [width]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (path: string, subitemId: number) => {
    setOpenSubMenuId((currentId) =>
      currentId === subitemId ? null : subitemId
    );
    router.push(path);
  };

  const handleLogout = async () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("permission");
    sessionStorage.removeItem("menu");
    sessionStorage.removeItem("lang");
    sessionStorage.removeItem("user");
    router.push("/login");
  };

  const handleMenuToggle = (itemId: number) => {
    setOpenMenuId((currentId) => (currentId === itemId ? null : itemId));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 w-full">
        <nav className="bg-white shadow-sm h-16 flex items-center justify-between px-4 lg:px-6 z-50 fixed w-full top-0">
          <div className="flex items-center ml-4">
            <button
              className="text-xl p-2 font-semibold text-fa-primary tracking-wide rounded-md transition-colors duration-200 hover:bg-fa-primary hover:text-white"
              onClick={() => {
                handleClick("/pages/dashboard", 0);
              }}
            >
              FA BACKOFFICE
            </button>
            <button
              id="menu-toggle-button"
              onClick={toggleMenu}
              className="text-fa-primary focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 rounded-md  ml-4"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          <div className="flex items-left space-x-4">
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-800 p-1 rounded-full focus:outline-none">
                <img
                  src={ThailandFlag.src}
                  alt="Thailand Flag"
                  className="w-6 h-6"
                />
              </button>
              <div className="px-2 flex flex-col absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible transition-all duration-300 transform scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100">
                <div className="flex flex-col text-sm text-gray-500 text-left">
                  <button className="bg-white px-2 text-black py-2 rounded-lg hover:bg-fa-primary hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <img
                      src={ThailandFlag.src}
                      alt="Thailand Flag"
                      className="w-6 h-6"
                    />
                    <span>ไทย</span>
                  </button>
                </div>
                <div className="flex flex-col text-sm text-gray-500">
                  <button className="bg-white px-2 text-black py-2 rounded-lg hover:bg-fa-primary hover:text-white transition-colors duration-200 flex items-center space-x-2">
                    <img src={USFlag.src} alt="US Flag" className="w-6 h-6" />
                    <span>English</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                <div className="w-fit px-2 h-8 rounded-md bg-fa-primary flex items-center justify-center text-white font-bold text-sm">
                  {userDetail?.employee_code}
                </div>
                <span className="hidden md:block text-sm">
                  {userDetail?.firstName} {userDetail?.lastName}
                </span>
                <i className="pi pi-user-round"></i>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible transition-all duration-300 transform scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100">
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

            <button
              className="text-gray-600 hover:text-red-500 p-1 rounded-full focus:outline-none transition-colors duration-200"
              onClick={handleLogout}
            >
              {/* <LogOut className="w-6 h-6" /> */}
              <i className="w-6 h-6 pi pi-sign-out"></i>
            </button>
          </div>
        </nav>

        <div className="flex pt-16 mt-1">
          <aside
            className={`
            fixed top-0 left-0 h-max shadow-lg w-64 transform transition-transform duration-300 ease-in-out z-40 pt-16
            ${
              isMenuOpen
                ? "translate-x-0 lg:relative lg:translate-x-0 lg:pt-0 lg:shadow-none lg:bg-transparent lg:border-r lg:border-gray-200"
                : "-translate-x-full"
            }
            
          `}
          >
            <div className="p-0 mb-2 overflow-y-auto h-max min-w-max w-auto bg-white border border-gray-300 rounded-xl">
              <ul className={`space-y-1 ${isMenuOpen ? "p-2" : "px-0"}`}>
                {menu.data?.map((item) => (
                  <li key={item.menu_id}>
                    {item.sub_menu && item.sub_menu.length > 0 ? (
                      <>
                        <button
                          className="group flex items-center justify-between w-full p-3 text-gray-700 rounded-lg hover:bg-fa-primary hover:text-white transition-colors duration-200 focus:outline-none"
                          onClick={() => handleMenuToggle(item.menu_id ?? 0)}
                        >
                          <div className="flex items-center">
                            {item.menu_name}
                          </div>

                          {openMenuId === item.menu_id ? (
                            <i className="pi pi-chevron-down transform rotate-180 text-fa-primary group-hover:text-gray-50 transition-transform duration-300"></i>
                          ) : (
                            <i className="pi pi-chevron-down text-fa-primary group-hover:text-gray-50 transition-transform duration-300"></i>
                          )}
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            openMenuId === item.menu_id
                              ? "max-h-screen opacity-100 pt-1"
                              : "max-h-0 opacity-0 pt-0"
                          }`}
                        >
                          <ul
                            key={item.menu_id + "-sub"}
                            className="pl-8 space-y-1"
                          >
                            {item.sub_menu.map((subItem) => (
                              <li key={subItem.menu_id}>
                                <button
                                  onClick={() =>
                                    handleClick(
                                      "/pages/" + (subItem.menu_route ?? "#"),
                                      subItem.menu_id ?? 0
                                    )
                                  }
                                  className={`flex items-center justify-between w-full p-3 ${
                                    openSubMenuId === subItem.menu_id
                                      ? "text-fa-primary"
                                      : "text-gray-700 "
                                  } rounded-lg transition-colors duration-200 focus:outline-none hover:bg-fa-primary hover:text-white`}
                                >
                                  <div className="flex items-center">
                                    {subItem.menu_name}
                                  </div>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.menu_route || "#"}
                        className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
                      >
                        {item.menu_name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="flex-1 bg-gray-100 mt-4 lg:ml-0 lg:mt-0 w-fit">
            <div className="flex text-sm text-gray-500 px-6 py-2">
              <button
                aria-label="Home"
                className="mt-0 pr-1 pb-0.5 rounded-md transition-colors duration-200 hover:bg-gray-200 hover:text-fa-primary text-gray-500"
                onClick={() => handleClick("/pages/dashboard", 0)}
              >
                {/* <House className="w-4 h-4" /> */}
                <i className="pi pi-home w-4 h-4"></i>
              </button>{" "}
              {menu.data?.map((item) =>
                item.menu_id === nowMenuId ? " / " + item.menu_name : null
              )}
              {menu.data?.map((item) =>
                item.menu_id == nowMenuId
                  ? item.sub_menu?.map((subitem) =>
                      subitem.menu_id === nowSubMenuId
                        ? " / " + subitem.menu_name
                        : null
                    )
                  : null
              )}
            </div>
            <div className="px-6">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
