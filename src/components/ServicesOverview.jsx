import { Link } from 'react-router-dom'
import { ShoppingBag, FileText, Megaphone, Search, PiggyBank, Building2 } from 'lucide-react'

const services = [
  { slug: 'ecommerce', title: 'E-commerce', icon: ShoppingBag, desc: 'Realizziamo il tuo store online per vendere di più e meglio.' },
  { slug: 'digital-content', title: 'Digital Content', icon: FileText, desc: 'Storytelling e contenuti per relazioni durature con i clienti.' },
  { slug: 'digital-advertising', title: 'Digital Advertising', icon: Megaphone, desc: 'Campagne guidate dai dati per aumentare i clienti riducendo gli sprechi.' },
  { slug: 'seo', title: 'SEO', icon: Search, desc: 'Visibilità organica e posizionamento sui motori di ricerca.' },
  { slug: 'finanziamenti', title: 'Finanziamenti', icon: PiggyBank, desc: 'Troviamo i contributi per sostenere i tuoi investimenti in marketing.' },
  { slug: 'canthiere', title: 'Canthiere', icon: Building2, desc: 'Divisione Real Estate Marketing: supporto a agenzie e sviluppatori.' },
]

export default function ServicesOverview() {
  return (
    <section id="servizi" className="py-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Cosa facciamo</h2>
        <p className="text-white/70 mt-2 max-w-2xl">Soluzioni su misura, dati e creatività per far crescere il tuo business.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.slug} to={`/servizi/${s.slug}`} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <s.icon className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{s.desc}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/60 group-hover:text-white">Scopri di più →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
