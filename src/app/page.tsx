import { AudioGear } from '@/components/pages/Home/AudioGear'
import { Banner } from '@/components/pages/Home/Banner'
import { CallToActionHome } from '@/components/pages/Home/CallToActionHome'
import { ProductsLinks } from '@/components/ProductsLinks'

export default function Home() {
  return (
    <main>
      <Banner />
      <ProductsLinks />
      <AudioGear />
      <CallToActionHome title="ZX7 SPEAKER" txtBtn="See Product" />
      <CallToActionHome title="YX1 EARPHONES" txtBtn="See Product" columns={2} />
    </main>
  )
}
