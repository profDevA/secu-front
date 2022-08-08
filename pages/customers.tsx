import React, { useState, Fragment, useRef, useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";
import { Button, Label, Table, TextInput } from "flowbite-react";
import Layout from "../components/layout";
import { API_URL } from "../constants";
import { Dialog, Transition } from "@headlessui/react";

export interface Customer {
  id: string;
  email: string;
  name: string;
  walletAmount: number;
}

const Customers: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [walletAmount, setWalletAmount] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    // fetch customers
    const fetchCustomers = async () => {
      await axios
        .get(`${API_URL}/customers`)
        .then((response) => {
          setCustomers(response.data.results);
        })
        .catch((error) => console.log(error));
    };

    fetchCustomers();
  }, []);

  console.log("customers", customers);

  const createCustomer = () => {
    if (!email || !name) {
      return;
    }
    axios
      .post(`${API_URL}/customers`, { name, email, walletAmount })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <Layout pageTitle="Customers">
      <div className=" w-2/3 mx-auto">
        <h1 className="text-center text-3xl mb-4">Customers</h1>
        <div className="mb-4">
          <Button onClick={() => setOpen(!open)}>Create Customer</Button>
        </div>

        <div className="table w-full p-2">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                  <div className="flex items-center justify-center">Name</div>
                </th>
                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                  <div className="flex items-center justify-center">Email</div>
                </th>
                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                  <div className="flex items-center justify-center">
                    Wallet Blance
                  </div>
                </th>
                <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                  <div className="flex items-center justify-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {customers &&
                customers.length > 0 &&
                customers.map((customer) => (
                  <tr
                    className="bg-gray-100 text-center border-b text-sm text-gray-600"
                    key={customer.id}
                  >
                    <td className="p-2 border-r">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        onClick={() => console.log("asdfasdfds")}
                      >
                        {customer.name}
                      </a>
                    </td>
                    <td className="p-2 border-r">{customer.email}</td>
                    <td className="p-2 border-r">{customer.walletAmount}</td>
                    <td>
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500 mr-4"
                        onClick={() => console.log("asdfasdfds")}
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        onClick={() => console.log("asdfasdfds")}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Create a Customer
                      </h3>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="email" value="Customer email" />
                        </div>
                        <TextInput
                          id="email"
                          placeholder="name@company.com"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="name" value="Customer name" />
                        </div>
                        <TextInput
                          id="name"
                          required
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="amount" value="Account balance" />
                        </div>
                        <TextInput
                          id="amount"
                          type="number"
                          onChange={(e) =>
                            setWalletAmount(Number(e.target.value))
                          }
                          value={walletAmount > 0 ? walletAmount : ""}
                        />
                      </div>
                      <div className="w-full sm:flex">
                        <div className="mr-4">
                          <Button onClick={createCustomer}>Create</Button>
                        </div>
                        <div>
                          <Button
                            color="failure"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Layout>
  );
};

export default Customers;
