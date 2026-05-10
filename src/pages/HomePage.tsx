import { About } from "../components/homepage/About"
import { Classes } from "../components/homepage/Classes"
import { CTA } from "../components/homepage/CTA"
import { Hero } from "../components/homepage/Hero"
import StudentsSection from "../components/homepage/StudentsSection"

const HomePage = () => {
  return (
    <>
     <Hero/>
     <StudentsSection/>
     <About/>
     <Classes/>
     <CTA/>
    </>
  )
}

export default HomePage