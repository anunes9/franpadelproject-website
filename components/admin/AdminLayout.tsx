"use client"

import { Tab } from "@headlessui/react"
import { useState } from "react"

export default function AdminLayout({
  listUsers,
  updateUser,
  createUser,
}: {
  listUsers: any
  updateUser: any
  createUser: any
}) {
  const [message, setMessage] = useState("")

  return (
    <div className="w-screen">
      <div className="flex flex-col pt-4 sm:max-w-md justify-center gap-2 m-auto">
        <Tab.Group
          onChange={(index) => {
            setMessage("")
          }}
        >
          <Tab.List>
            <Tab className="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:text-black px-4 py-2 mx-2 rounded-sm">
              List Users
            </Tab>
            <Tab className="ui-selected:bg-blue-500 ui-selected:text-white  ui-not-selected:text-black px-4 py-2 mx-2 rounded-sm">
              Update User
            </Tab>
            <Tab className="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:text-black px-4 py-2 mx-2 rounded-sm">
              Create User
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <form
                className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-4"
                action={(formData) =>
                  listUsers(formData).then((m: any) =>
                    setMessage(JSON.stringify(m))
                  )
                }
              >
                <button className="bg-green-300 rounded-md px-4 py-2 text-foreground mb-2">
                  List
                </button>

                {message && (
                  <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                    {message}
                  </p>
                )}
              </form>
            </Tab.Panel>

            <Tab.Panel>
              <form
                className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-4"
                action={(formData) =>
                  updateUser(formData).then((m: any) =>
                    setMessage(JSON.stringify(m))
                  )
                }
              >
                <label className="text-md" htmlFor="email">
                  User ID
                </label>

                <input
                  className="rounded-md px-4 py-2 bg-inherit border mb-6"
                  type="text"
                  name="userId"
                  required
                />

                <label className="text-md" htmlFor="password">
                  Password
                </label>

                <input
                  className="rounded-md px-4 py-2 bg-inherit border mb-6"
                  type="password"
                  name="password"
                  required
                />

                <button className="bg-green-300 rounded-md px-4 py-2 text-foreground mb-2">
                  Update
                </button>

                {message && (
                  <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                    {message}
                  </p>
                )}
              </form>
            </Tab.Panel>

            <Tab.Panel>
              <form
                className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-4"
                action={(formData) =>
                  createUser(formData).then((m: any) =>
                    setMessage(JSON.stringify(m))
                  )
                }
              >
                <label className="text-md" htmlFor="email">
                  Email
                </label>

                <input
                  className="rounded-md px-4 py-2 bg-inherit border mb-6"
                  type="text"
                  name="userEmail"
                  required
                />

                <label className="text-md" htmlFor="password">
                  Password
                </label>

                <input
                  className="rounded-md px-4 py-2 bg-inherit border mb-6"
                  type="password"
                  name="userPassword"
                  required
                />

                <button className="bg-green-300 rounded-md px-4 py-2 text-foreground mb-2">
                  Create
                </button>

                {message && (
                  <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                    {message}
                  </p>
                )}
              </form>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
