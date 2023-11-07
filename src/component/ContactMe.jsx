import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const country = [
  { name: "Indonesia" },
  { name: "India" },
  { name: "US State" },
  { name: "Malaysia" },
  { name: "Singapura" },
  { name: "Thailand" },
];

const ContactMe = () => {
  const [selected, setSelected] = useState(country[0]);

  return (
    <div className="hero mb-0 relative min-h-screen z-50 bg-blue-kc">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center ml-10 lg:text-left">
          <h1 className="text-2xl  font-bold">Get started <p className="mt-3 flex text-6xl">With Say <p className= "ml-3 hover:underline hover:transition hover:duration-700 delay-700 hover:ease-in-out text-shushime hover:decoration-pink-500"> HI</p>!</p></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form action="" method="get">
            <div className="block lg:flex p-10">
              {/* <label htmlFor="">your name</label> */}
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-[100%] lg:w-[50%] mr-6 px-3 py-2 bg-base-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-black disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              {/* <label htmlFor="">your email</label> */}
              <input
                type="text"
                placeholder="Your Email"
                className="mt-10 lg:mt-1 block w-[100%] lg:w-[50%] px-3 py-2 bg-base-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative  px-10">
                <Listbox.Button className="relative w-full border-2 cursor-default rounded-lg bg-base-100 py-2 pl-3 placeholder-slate-400 border-slate-300 pr-10 text-left shadow-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 hover:rotate-90 flex items-center pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      fill="currentColor"
                      className="w-5  h-5"
                    >
                      <pathl
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in-out duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 align-items-right max-h-60 w-[50%] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {country.map((country, countryIdx) => (
                      <Listbox.Option
                        placeholder="Your Country"
                        key={countryIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-shushime"
                              : "text-gray-900"
                          }`
                        }
                        value={country}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {country.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="w-5 h-5"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            <div className="h-80 px-10">
              <div className="text-2xl py-6">Lorem</div>
              <textarea
                placeholder="Massage"
                name=""
                className="border-2 placeholder:p-3 focus:border-sky-500 placeholder-slate-300 border-slate-300/70 resize-none focus:ring-1 focus:ring-sky-500 w-full rounded-md h-[60%] bg-base-100"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <label htmlFor="my_modal_7" className="btn w-full">
                Submit
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Thank you for u feed!!</h3>
                  <p className="py-4">
                  u can restart this website
                  </p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
            <div className=" text-white py-5 text-sm text-center ">
              if you need have interlocutor, just contact me at
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
