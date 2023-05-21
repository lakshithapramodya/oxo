import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <Bars3Icon className="h-7 text-gray-500 lg:hidden cursor-pointer" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {!user ? (
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="signup"
                    onClick={() => navigate("/signup")}
                    className={`${
                      active ? "bg-[#ff385c] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Sign up
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="login"
                    onClick={() => navigate("/login")}
                    className={`${
                      active ? "bg-[#ff385c] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Log in
                  </button>
                )}
              </Menu.Item>
            </div>
          ) : (
            <div className="divide-y">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div className="w-full items-center text-start rounded-md px-2 text-sm">
                      <p className="py-2 ">Logged in as</p>
                      <p className="font-semibold">{user.username}</p>
                    </div>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={`${
                        active ? "bg-[#ff385c] text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Log out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
