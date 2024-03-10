import { getAssetsUrl } from "@/lib/supabase/api"
import Image from "next/image"

export const ImageGallery = ({ images }: { images: string[] }) => (
  <div className="flex flex-row mt-8 gap-2 flex-wrap">
    {images.map((img, i) => (
      <div className="w-32 lg:w-64">
        <Image
          key={i}
          src={getAssetsUrl(img)}
          alt="img"
          fill
          className="!relative"
        />
      </div>
    ))}
  </div>
)
