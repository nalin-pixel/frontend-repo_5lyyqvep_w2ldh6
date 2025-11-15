import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import WhyUs from '../components/WhyUs'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <WhyUs />
    </Layout>
  )
}
