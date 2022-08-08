import React, { useState } from "react";
import { NextPage } from "next";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Layout from "../components/layout";

const Customers: NextPage = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  console.log(email, name, amount);

  const createCustomer = () => {
    
  }

  return (
    <Layout pageTitle="Customers">
      <div className=" w-2/3 mx-auto">
        <h1 className="text-center text-3xl mb-4">Customers</h1>
        <Button onClick={() => setShow(!show)}>Create Customer</Button>
      </div>
      <Modal onClose={() => setShow(false)} show={show}>
        <React.Fragment key=".0">
          <Modal.Header />
          <Modal.Body>
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
                  onChange={(e) => setAmount(Number(e.target.value))}
                  value={amount > 0 ? amount : ""}
                />
              </div>
              <div className="w-full">
                <Button onClick={() => createCustomer}>Create</Button>
              </div>
            </div>
          </Modal.Body>
        </React.Fragment>
      </Modal>
    </Layout>
  );
};

export default Customers;
