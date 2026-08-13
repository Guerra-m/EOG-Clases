import { About } from "../components/homepage/About"
import { Classes } from "../components/homepage/Classes"
import { CTA } from "../components/homepage/CTA"
import { Hero } from "../components/homepage/Hero"
import { Location } from "../components/homepage/Location"
import StudentsSection from "../components/homepage/StudentsSection"

const HomePage = () => {
  return (
    <>
     <Hero/>
     <StudentsSection/>
     <About/>
     <Classes/>
     <Location></Location>
     <CTA/>
    </>
  )
}

export default HomePage