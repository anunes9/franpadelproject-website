"use client"

import Image from "next/image"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Link from "next/link"

export const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer z-10 hover:bg-slate-100/10 p-2 rounded-md"
      >
        <Image src="/assets/menu.png" alt="menu" width="40" height="60" />
      </button>

      <MenuComponent open={open} handleClose={() => setOpen(false)} />
    </>
  )
}

const MenuComponent = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: any
}) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={handleClose}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            // enter="transform transition ease-in-out duration-500 sm:duration-700"
            // enterFrom="translate-x-full"
            // enterTo="translate-x-0"
            // leave="transform transition ease-in-out duration-500 sm:duration-700"
            // leaveFrom="translate-x-0"
            // leaveTo="translate-x-full"
          >
            <Dialog.Panel className="pointer-events-auto relative w-screen bg-menu bg-cover bg-center">
              <MenuContent handleClose={handleClose} />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)

const textStyle =
  "text-white hover:text-projectGreen text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] leading-normal text-center font-projectFontExtended"

const MenuContent = ({ handleClose }: { handleClose: any }) => (
  <div className="flex h-full max-w-[1200px] m-auto flex-col p-4 md:p-12">
    <div className="flex flex-row justify-between items-center">
      <Image alt="logo" src="/assets/fr-logo.png" height={57} width={87} />

      <button
        type="button"
        className="rounded-md hover:bg-slate-100/10 p-2"
        onClick={handleClose}
      >
        <Image alt="logo" src="/assets/cross.png" height={38} width={38} />
      </button>
    </div>

    <div className="flex flex-col gap-4 items-center py-12">
      <Link className={textStyle} href="/academy">
        Academia
      </Link>
      <Link className={textStyle} href="/padel-clinics">
        Clinicas de Padel
      </Link>
      <Link className={textStyle} href="/login">
        FRAN Methodology
      </Link>
      <Link className={textStyle} href="/pro-players">
        Pro Players
      </Link>
      <Link className={textStyle} href="/sponsors">
        Sponsors
      </Link>
    </div>

    <div className="flex justify-center mt-32">
      <a href="https://www.instagram.com/franfreitas.padel/" target="_blank">
        <Image
          src="/assets/instagram.png"
          width={58}
          height={58}
          alt="fran-logo"
        />
      </a>
    </div>
  </div>
)
