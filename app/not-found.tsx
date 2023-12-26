import Link from "next/link"

export const NotFound = () => (
  <main className="max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl m-auto animate-in">
    <div className="flex justify-around w-96">
      <p>404 | Page not found</p>
      <Link href="/">Back Home</Link>
    </div>
  </main>
)

export default NotFound
