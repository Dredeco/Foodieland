import { Categories } from "./components/Categories"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Slider } from "./components/Slider"

export function App() {
  return (
    <div className="relative h-ful w-auto max-w-[1440px] items-center justify-center m-auto">
      <Header />

      <Slider />

      <Categories />

      <Footer />
    </div>
  )
}
