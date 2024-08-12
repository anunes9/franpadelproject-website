"use client"

import Image from "next/image"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Link from "next/link"
import { t } from "@/locales"
import { LanguageSwitch } from "@/components/layout/LanguageSwitch"

export const Menu = ({ variant }: { variant: "green" | "blue" }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer z-10 hover:bg-slate-100/10 rounded-md w-7 sm:w-10"
      >
        {variant === "green" && (
          <Image
            src="/assets/menu-green.svg"
            alt="menu"
            fill
            className="!relative"
          />
        )}
        {variant === "blue" && (
          <Image
            src="/assets/menu-blue.svg"
            alt="menu"
            fill
            className="!relative"
          />
        )}
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
            <Dialog.Panel className="pointer-events-auto relative w-screen bg-menu bg-cover bg-top sm:bg-center">
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

const MenuContent = ({ handleClose }: { handleClose: any }) => {
  const locale = window?.localStorage.getItem("lang") || "pt"

  return (
    <div className="flex h-full max-w-[1200px] m-auto flex-col px-4 py-6 md:p-12">
      <div className="flex flex-row justify-between items-center">
        <div className="w-16 sm:w-24 ml-4 sm:ml-0">
          <Image
            alt="logo"
            src="/assets/fr-logo.png"
            fill
            className="!relative"
          />
        </div>

        <button
          type="button"
          className="rounded-md hover:bg-slate-100/10 p-2 w-10 sm:w-12 lg:w-14"
          onClick={handleClose}
        >
          <Image
            alt="logo"
            src="/assets/cross.png"
            fill
            className="!relative"
          />
        </button>
      </div>

      <div className="flex flex-col gap-4 items-center py-12">
        <Link className={textStyle} href="/academia">
          {t(locale, "menu", "academy")}
        </Link>
        <Link className={textStyle} href="/clinicas-padel">
          {t(locale, "menu", "padel-clinics")}
        </Link>
        <Link className={textStyle} href="app.franpadelproject.com">
          {t(locale, "menu", "methodology")}
        </Link>
        <Link className={textStyle} href="/pro-players">
          {t(locale, "menu", "pro-players")}
        </Link>
        <Link className={textStyle} href="/patrocinadores">
          {t(locale, "menu", "sponsors")}
        </Link>
        <Link className={textStyle} href="/contact">
          {t(locale, "menu", "get-in-touch")}
        </Link>
      </div>

      <div className="flex justify-center items-center gap-12 mt-32">
        <LanguageSwitch />

        <a
          href="https://www.instagram.com/franfreitas.padel/"
          target="_blank"
          className="w-12 sm:w-14"
        >
          <Image
            src="/assets/instagram.png"
            className="!relative"
            fill
            alt="fran-logo"
          />
        </a>
      </div>
    </div>
  )
}
