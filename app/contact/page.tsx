import Script from "next/script"

const Page = () => (
  <div>
    <div formsappId="660010e244e8ee0a50190cc9"></div>
    <Script
      src="https://forms.app/static/embed.js"
      type="text/javascript"
      async
      defer
      onload="new formsapp('660010e244e8ee0a50190cc9', 'fullscreen', {});"
    ></Script>
  </div>
)

export default Page
