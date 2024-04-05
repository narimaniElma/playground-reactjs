import { Hero, HomeCards, JobListings } from "../components"


const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome/>
    </>
  )
}

export default HomePage