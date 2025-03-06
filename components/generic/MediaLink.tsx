import Image from "next/image"
import Link from "next/link"

export const MediaLink = ({
  src,
  href,
  alt,
  className,
  text,
  width,
}: {
  src: string
  href: string
  alt: string
  width: string
  className?: string
  text?: string
}) => (
  <Link
    href={href}
    target="_blank"
    className={`flex flex-row items-center ${className}`}
  >
    <Image src={src} alt={alt} className={`!relative ${width}`} fill />
    {text && <span>{text}</span>}
  </Link>
)
