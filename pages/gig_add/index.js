// import { Header } from "antd/lib/layout/layout";
import React from "react";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const GigCreation = () => {
  return (
    <div>
      <Header />
      <div className="mt-16 feature-font ">
        <div className="text-green-500 flex gap-4 md:gap-8 flex-col md:flex-row lg:flex-row  border-b border-t border-gray-400 py-2 text-md mt-20  pl-6 justify-start">
          <div className="flex gap-2">
            <div className=" bg-green-400 text-white h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">1</p>
            </div>
            <button> Personal Info</button>
          </div>
          <div className="flex gap-2 ">
            <div className="border-2  h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">2</p>
            </div>
            <button>Pofessional Info</button>
          </div>
          <div className="flex gap-2 ">
            <div className="border-2   h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">3</p>
            </div>
            <button>Linekd Account</button>
          </div>
          <div className="flex gap-2 ">
            <div className="border-2   h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">4</p>
            </div>
            <button>Account Security</button>
          </div>
        </div>
        {/* my info section */}
        <div className="w-10/12 mx-auto mt-6">
          <div className="w-6/12  mb-3">
            <h2 className="text-3xl font-bold text-gray-700">Personal Info</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis et deserunt eligendi voluptatem eius incidunt!
            </p>
          </div>
          <hr />
          {/* details input */}
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
              <div className="flex items-center">
                <p className="text-lg  font-bold text-gray-600 ">Full Name</p>
              </div>
              <div className="col-span-2 flex gap-3">
                <input
                  required
                  className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-4/12 py-2"
                  type="text"
                  placeholder="first name"
                />
                <input
                  required
                  className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-4/12 py-2"
                  type="text"
                  placeholder="last name"
                />
              </div>
            </div>
            <div className="my-24 md:my-36 lg:my-36">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="">
                  <h2 className="text-lg font-bold text-gray-600 mb-2">
                    Profile Picture
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque enim voluptates ad ipsum inventore. Impedit!
                  </p>
                </div>
                <div className="col-span-2 flex items-center">
                  <input required type="file" name="" id="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="">
                  <h2 className="text-lg font-bold text-gray-600 mb-2">
                    Description
                  </h2>
                </div>
                <div className="col-span-2 flex items-center">
                  <textarea
                    required
                    className="outline-green-400 border border-gray-300 w-full"
                    name=""
                    id=""
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="">
                  <h2 className="text-lg font-bold text-gray-600 mb-2">
                    Languages
                  </h2>
                </div>
                <div className="col-span-2 gap-4 ">
                  <div className="flex w-full gap-4">
                    <input
                      required
                      className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                      type="text"
                      placeholder="language"
                    />
                    <input
                      required
                      className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                      type="text"
                      placeholder="level"
                    />
                  </div>
                  <div className="flex w-full gap-4 mt-4">
                    <input
                      className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                      type="text"
                      placeholder="language (optional)"
                    />
                    <input
                      className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                      type="text"
                      placeholder="level (optional)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="bg-green-500 text-white px-8 py-2 rounded-sm">
                Continue
              </button>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GigCreation;