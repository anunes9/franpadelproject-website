"use client"

import Image from "next/image"

const ClinicDetails = ({ clinic }: { clinic: any }) => {
  const locale = window?.localStorage.getItem("lang") || "pt"

  return (
    <div className="w-full m-auto my-16">
      <div
        className={`bg-project${clinic.color} px-8 sm:px-16 lg:px-[123px] pt-12 sm:pt-24 lg:pt-[200px] pb-12 z-20`}
      >
        {clinic.image && (
          <Image
            alt={clinic.name}
            src={clinic.image.url}
            height={clinic.image.height}
            width={clinic.image.width}
          />
        )}

        <p className="font-projectFontMediumExtended text-sm sm:text-lg lg:text-xl text-white mt-12 lg:mt-[88px]">
          {locale === "pt" ? clinic.descriptionPT : clinic.descriptionEN}
        </p>

        {clinic.contentImage && (
          <Image
            alt={clinic.name}
            src={clinic.contentImage.url}
            fill
            className="!relative my-12 sm:my-24 lg:mt-[157px]"
          />
        )}
      </div>
    </div>
  )
}

export default ClinicDetails
