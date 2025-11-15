import Layout from '../components/Layout'
import { Link, Outlet } from 'react-router-dom'

export default function Servizi() {
  return (
    <Layout>
      <section className="py-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold">Servizi</h1>
          <p className="mt-4 text-white/80">Soluzioni complete: E-commerce, Digital Content, Digital Advertising, SEO, Finanziamenti e la divisione Canthiere.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/servizi/ecommerce" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">E-commerce</Link>
            <Link to="/servizi/digital-content" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">Digital Content</Link>
            <Link to="/servizi/digital-advertising" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">Digital Advertising</Link>
            <Link to="/servizi/seo" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">SEO</Link>
            <Link to="/servizi/finanziamenti" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">Finanziamenti</Link>
            <Link to="/servizi/canthiere" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">Canthiere</Link>
          </div>

          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </section>
    </Layout>
  )
}
