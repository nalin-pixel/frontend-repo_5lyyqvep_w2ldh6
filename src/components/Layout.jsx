import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  const navLink = ({ isActive }) =>
    isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-red-500 to-orange-500" />
          <div className="leading-tight">
            <p className="text-white font-bold">Il Marketing Much More</p>
            <p className="text-white/70 text-xs">Professionisti super</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="/chi-siamo" className={navLink}>Chi Siamo</NavLink>
          <NavLink to="/servizi" className={navLink}>Servizi</NavLink>
          <NavLink to="/contatti" className="text-white bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-md font-semibold shadow hover:opacity-90">Richiedi una chiamata</NavLink>
        </nav>
        <button className="md:hidden text-white" aria-label="Menu" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/90 px-4 pb-4 space-y-2">
          <NavLink to="/" onClick={() => setOpen(false)} className="block text-white/90 py-2">Home</NavLink>
          <NavLink to="/chi-siamo" onClick={() => setOpen(false)} className="block text-white/90 py-2">Chi Siamo</NavLink>
          <NavLink to="/servizi" onClick={() => setOpen(false)} className="block text-white/90 py-2">Servizi</NavLink>
          <NavLink to="/contatti" onClick={() => setOpen(false)} className="block text-white bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-md font-semibold text-center">Richiedi una chiamata</NavLink>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold text-lg mb-2">Il Marketing Much More S.r.l.</p>
          <p className="text-sm">P. IVA 15871511000 · REA RM-1619601 · Capitale €10.000,00</p>
          <p className="text-sm mt-3">Sede legale: Via Paolo Emilio, 7 - 00192 Roma</p>
          <p className="text-sm">Sede operativa: Via delle Vigne di Morena, 55 - 00118 Roma (RM)</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Servizi</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/servizi/ecommerce" className="hover:text-white">E-commerce</Link></li>
            <li><Link to="/servizi/digital-content" className="hover:text-white">Digital Content</Link></li>
            <li><Link to="/servizi/digital-advertising" className="hover:text-white">Digital Advertising</Link></li>
            <li><Link to="/servizi/seo" className="hover:text-white">SEO</Link></li>
            <li><Link to="/servizi/finanziamenti" className="hover:text-white">Finanziamenti</Link></li>
            <li><Link to="/servizi/canthiere" className="hover:text-white">Canthiere</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Contatti</p>
          <p className="text-sm">Telefono: +39 393 050 5773</p>
          <p className="text-sm">Mobile: 393 050 5773</p>
          <div className="mt-4">
            <Link to="/privacy" className="text-sm hover:text-white mr-4">Privacy Policy</Link>
            <Link to="/cookie" className="text-sm hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Il Marketing Much More S.r.l. – Tutti i diritti riservati
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main className="pt-16">{children || <Outlet />}</main>
      <Footer />
    </div>
  )
}
