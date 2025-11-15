export default function WhyUs() {
  const points = [
    {
      title: 'Team dedicato',
      desc: 'Manager esperti e specialisti al tuo fianco, come un reparto marketing interno.'
    },
    {
      title: 'Misurazione dei risultati',
      desc: 'KPI chiari, report periodici e ottimizzazione continua guidata dai dati.'
    },
    {
      title: 'Approccio strategico',
      desc: 'Partiamo dal posizionamento per costruire una presenza online efficace.'
    }
  ]

  return (
    <section className="py-16 bg-neutral-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Perché noi</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-white/70 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
