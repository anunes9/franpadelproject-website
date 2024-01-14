import { Button } from "@components/generic/Button"

export const GetInTouch = async () => {
  const handleSubmit = async () => {
    "use server"
  }

  return (
    <div className="w-screen lg:h-[36rem] py-16 ">
      <div
        className="w-full sm:max-w-md px-6 sm:px-0 lg:h-[36rem] m-auto "
        id="contact"
      >
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          action={handleSubmit}
        >
          <p className="font-bold text-xl">Get In Touch</p>

          <label className="text-md">Name</label>

          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="name"
            placeholder="Your name"
            required
          />

          <label className="text-md" htmlFor="email">
            Email
          </label>

          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />

          <label className="text-md">Message</label>

          <textarea
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="message"
            rows={3}
            required
          />

          <Button className="bg-green-300 dark:bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
            <p className="font-bold text-white">Send Message</p>
          </Button>
        </form>
      </div>
    </div>
  )
}
