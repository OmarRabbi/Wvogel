import Hero from '@/components/main/home/hero'
import RacingResult from '@/components/main/home/racingresult'
import Beastmode from '@/components/shared/beastmodehome'

function Home() {
  return (
    <div className='text-primary-header-foreground bg-background'>
      <Hero/>
      <RacingResult/>
      <Beastmode/>
    </div>
  )
}

export default Home