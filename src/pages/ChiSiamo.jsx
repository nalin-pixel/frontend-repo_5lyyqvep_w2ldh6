import Layout from '../components/Layout'

export default function ChiSiamo() {
  return (
    <Layout>
      <section className="py-16 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold">Chi Siamo</h1>
          <p className="mt-6 text-white/80">Accompagniamo le aziende nella ideazione del proprio posizionamento strategico, nella formazione aziendale e nella costruzione della più efficace presenza online. Tono: professionale ma accessibile, orientato al risultato. Siamo partner, non solo fornitori.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-semibold">Valori</h3>
              <p className="mt-2 text-white/70">Fiducia, responsabilità, misurabilità. Ogni progetto è guidato da obiettivi chiari e risultati concreti.</p>
            </div>
            <div className="rounded-xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-semibold">Missione</h3>
              <p className="mt-2 text-white/70">Dare alle aziende una presenza digitale efficace e sostenibile, con strategie e operatività integrate.</p>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-xl font-semibold">Sedi</h3>
            <p className="mt-2 text-white/70">Sede legale: Via Paolo Emilio, 7 - 00192 Roma</p>
            <p className="text-white/70">Sede operativa: Via delle Vigne di Morena, 55 - 00118 Roma (RM)</p>
            <p className="mt-4 text-white/70">Dati societari: P. Iva 15871511000, Rea RM-1619601, Capitale €10.000,00</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
