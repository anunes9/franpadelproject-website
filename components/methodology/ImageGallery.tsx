import Image from "next/image"

export const ImageGallery = ({ images }: { images: any[] }) => {
  return (
    <div className="flex flex-row mt-8 gap-2 flex-wrap">
      {images.map((e, i) => (
        <div className="w-32 lg:w-64">
          <Image key={i} src={e.image} alt="img" fill className="!relative" />
        </div>
      ))}
    </div>
  )
}
