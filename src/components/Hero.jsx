import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Al tuo business non servono supereroi, ma professionisti super
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Per migliorare l’efficienza della tua azienda scegli il Marketing: avrai a disposizione un management esperto e una squadra appassionata. Saremo i tuoi migliori alleati.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contatti" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-red-500 to-orange-500 font-semibold shadow hover:opacity-90">
              Richiedi una chiamata informativa
            </Link>
            <a href="#servizi" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10">
              Scopri i servizi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
