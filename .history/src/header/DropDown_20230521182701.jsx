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
        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="signup"
                    className={`${
                      active
                        ? " bg-gradient-to-l from-[#8649c1] to-[#6f43b5] text-white"
                        : " text-[#1d265f]"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold`}
                  >
                    Home
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="login"
                    className={`${
                      active
                        ? " bg-gradient-to-l from-[#8649c1] to-[#6f43b5] text-white"
                        : " text-[#1d265f]"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold`}
                  >
                    What We Do
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="signup"
                    className={`${
                      active
                        ? " bg-gradient-to-l from-[#8649c1] to-[#6f43b5] text-white"
                        : " text-[#1d265f]"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold`}
                  >
                    Why Us?
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="signup"
                    className={`${
                      active
                        ? " bg-gradient-to-l from-[#8649c1] to-[#6f43b5] text-white"
                        : " text-[#1d265f]"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold`}
                  >
                    Our Work
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="signup"
                    className={`${
                      active
                        ? " bg-gradient-to-l from-[#8649c1] to-[#6f43b5] text-white"
                        : " text-[#1d265f]"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold`}
                  >
                    Get Started Free
                  </button>
                )}
              </Menu.Item>
            </div>
          }
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
