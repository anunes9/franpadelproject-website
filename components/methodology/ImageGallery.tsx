import Image from "next/image"

const assetsUrl = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL

export const ImageGallery = ({ images }: { images: string[] }) => (
  <div className="flex flex-col lg:flex-row mt-8 gap-2">
    {images.map((img, i) => (
      <Image
        key={i}
        src={`${assetsUrl}/${img}`}
        alt="img"
        width={120}
        height={180}
      />
    ))}
  </div>
)
