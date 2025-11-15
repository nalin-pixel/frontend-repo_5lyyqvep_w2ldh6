import Layout from '../components/Layout'
import { useState } from 'react'

export default function Contatti() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      message: form.get('message'),
      source: 'website'
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Errore nell\'invio del form')
      setStatus({ ok: true })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <Layout>
      <section className="py-16 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold">Contattaci</h1>
          <p className="mt-4 text-white/80">Parliamo del tuo progetto. Compila il form e ti richiamiamo: "Richiedi una chiamata informativa".</p>

          <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-white/70">Nome</label>
                <input name="name" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input name="email" type="email" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Telefono</label>
                <input name="phone" className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm text-white/70">Messaggio</label>
              <textarea name="message" rows="7" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
              <button className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 rounded-md font-semibold self-start">Richiedi una chiamata informativa</button>
              <p className="mt-4 text-sm text-white/70">Oppure chiamaci: +39 393 050 5773</p>
            </div>
          </form>

          {status && (
            <div className={`mt-6 p-4 rounded-md ${status.ok ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'}`}>
              {status.ok ? 'Grazie! Ti contatteremo a breve.' : `Errore: ${status.error}`}
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
