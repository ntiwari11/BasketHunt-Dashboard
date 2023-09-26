import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const NavbarProfile = () => {
  const user = {
    name: "DemoUser",
    email: "demo@gmail.com",
    role: "user",
    token: "fuifweghfuigsaedfjkhfghui",
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const adminProfileOptions = [
    {
      id: "1",
      optionName: "View Profile",
      optionLogo: CgProfile,
    },

    {
      id: "2",
      optionName: "Add Application",
      optionFunction: openModal,
    },
    {
      id: "3",
      optionName: "Remove Application",
    },
    {
      id: "4",
      optionName: "modify Application",
    },
    {
      id: "5",
      optionName: "Sign Out ",
    },
  ];

  const userProfileOptions = [
    {
      id: "1",
      optionName: "View Profile",
      optionLogo: CgProfile,
    },
    {
      id: "2",
      optionName: "Change Password",
    },
    {
      id: "3",
      optionName: "Sign Out",
    },
  ];
  const profileOptions =
    user.role === "admin" ? adminProfileOptions : userProfileOptions;

  return (
    <>
      {/* profile  */}
      <div
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        className=" flex items-center justify-between relative cursor-pointer"
      >
        <span className="mr-2">
          <CgProfile size={30} />
        </span>
        <span className="mr-2 text-lg">{user.name}</span>
        <span>
          {isProfileOpen ? (
            <IoMdArrowDropup size={30} />
          ) : (
            <IoMdArrowDropdown size={30} />
          )}
        </span>

        {isProfileOpen && (
          <div className=" absolute shadow-lg py-3 top-10 -right-0 w-72 z-20 flex flex-col gap-2 bg-white border border-rounded-lg border-gray-200">
            {profileOptions.map((items, index) => (
              <>
                <button
                  onClick={items.optionFunction}
                  className=" ml-7 flex justify-start items-center gap-1"
                >
                  {/* <span></span> */}
                  <span>{items.optionName} </span>
                </button>
              </>
            ))}
          </div>
        )}
      </div>

      {/* Model  */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavbarProfile;
