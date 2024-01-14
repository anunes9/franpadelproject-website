import { Header } from "@components/home/Header"
import { Footer } from "@components/layout/Footer"
import { NavbarHeader } from "@components/layout/NavbarHeader"
import { Content } from "@components/home/Content"
import { Products } from "@components/home/Products"
import { GetInTouch } from "@components/home/GetInTouch"

const Index = () => (
  <div className="flex-1 w-full flex flex-col">
    <NavbarHeader />

    <Header />

    <Content />

    <Products />

    <GetInTouch />

    <Footer />
  </div>
)

export default Index
