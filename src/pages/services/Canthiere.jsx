import { Link } from 'react-router-dom'

export default function Canthiere() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2>Canthiere – Real Estate Marketing</h2>
      <p>La nostra divisione Real Estate supporta agenzie e sviluppatori nella promozione di immobili e progetti complessi. Strategie dedicate, materiali visivi e campagne multicanale per valorizzare ogni operazione.</p>
      <Link to="/contatti" className="inline-block no-underline bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-md font-semibold">Dammi più informazioni</Link>
    </div>
  )
}
