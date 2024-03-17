import { getAssetsUrl } from "@/lib/supabase/api"
import Image from "next/image"

export const ImageGallery = ({ images }: { images: string[] }) => {
  const newImages = images.map((e) => getAssetsUrl(e))
  return (
    <div className="flex flex-row mt-8 gap-2 flex-wrap">
      {newImages.map((img, i) => (
        <div className="w-32 lg:w-64">
          <Image key={i} src={img} alt="img" fill className="!relative" />
        </div>
      ))}
    </div>
  )
}
