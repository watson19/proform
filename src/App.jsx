import React, { useState } from 'react'
import { Calendar, MapPin, Clock, Phone, Share2, Download, CheckCircle2, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card.jsx'
import { Button } from './ui/button.jsx'

const FORM_ACTION = 'https://formspree.io/f/xldlzlpq' // Linked to Formspree

function InfoCard({ icon: Icon, title, value }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-teal-600 text-white flex items-center justify-center"><Icon className="h-5 w-5"/></div>
          <div>
            <p className="text-sm text-stone-500">{title}</p>
            <p className="text-base font-semibold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Bullet({ title, text }) {
  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
      <h4 className="font-semibold tracking-tight">{title}</h4>
      <p className="mt-1 text-stone-700">{text}</p>
    </div>
  )
}

function PosterMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto w-full max-w-lg"
    >
      <div className="relative aspect-[3/4] w-full rounded-3xl border bg-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 p-6 flex flex-col">
          <div className="text-3xl font-extrabold leading-tight">
            CURSO PARA<br/>PADRES Y <span className="text-orange-600">EDUCADORES</span>
          </div>
          <div className="mt-2 text-sm uppercase tracking-wider text-teal-700 font-bold">GRATUITO</div>
          <div className="mt-3 text-sm text-stone-700">Impartido por</div>
          <div className="text-xl font-bold">Zhinuzh Watson</div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="bg-orange-100 rounded-xl p-3">
              <div className="font-semibold">Cuándo</div>
              <div>Todos los martes, desde 21-10-2025</div>
            </div>
            <div className="bg-teal-100 rounded-xl p-3">
              <div className="font-semibold">Horario</div>
              <div>12:00h – 13:30h</div>
            </div>
            <div className="bg-stone-100 rounded-xl p-3 col-span-2">
              <div className="font-semibold">Lugar</div>
              <div>Centro Cívico de Parquesol (Valladolid)</div>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t text-sm">Inscripciones en el Centro Cívico · Más información 657 683 223 (solo mañanas)</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [sent, setSent] = useState(false)
  const [rol, setRol] = useState('')

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-stone-200 bg-white/70">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-teal-600 text-white font-bold">CW</span>
            <span className="font-semibold tracking-tight">Curso para Padres y Educadores</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#inscripcion" className="hidden sm:inline-block">
              <Button className="rounded-2xl px-4">Inscribirme gratis</Button>
            </a>
            <a href="#info" className="text-sm font-medium hover:text-teal-700">Información</a>
          </div>
        </nav>
      </header>

      {/* --- HERO --- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900"
            >
              Curso <span className="text-teal-700">GRATUITO</span> para Padres y Educadores
            </motion.h1>
            <p className="mt-4 text-lg text-stone-700 leading-relaxed">
              Un espacio práctico para compartir herramientas y experiencias. Impartido por <span className="font-semibold">Zhinuzh Watson</span>, experta en temas educativos.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InfoCard icon={Calendar} title="Cuándo" value="Todos los martes, desde 21-10-2025" />
              <InfoCard icon={Clock} title="Horario" value="12:00 – 13:30" />
              <InfoCard icon={MapPin} title="Lugar" value="Centro Cívico de Parquesol (Valladolid)" />
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inscripcion"><Button className="rounded-2xl px-5">Inscribirme gratis</Button></a>
              <a href="#mapa" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100">
                <MapPin className="h-4 w-4"/> Cómo llegar
              </a>
              <a href="tel:+34657683223" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100">
                <Phone className="h-4 w-4"/> 657 683 223
              </a>
            </div>

            <p className="mt-3 text-sm text-stone-600">Inscripciones en el Centro Cívico. Más información por teléfono (solo mañanas).</p>
          </div>

          <PosterMockup />
        </div>
      </section>

      {/* --- INFO --- */}
      <section id="info" className="bg-white border-y border-stone-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-6">
          <Bullet title="Qué es" text="Sesiones dinámicas con ideas prácticas para el día a día en casa y en el aula." />
          <Bullet title="Para quién" text="Padres, madres, cuidadores y educadores de cualquier etapa educativa." />
          <Bullet title="Precio" text="100% gratuito, plazas limitadas por orden de inscripción." />
        </div>
      </section>

      {/* --- FORM --- */}
      <section id="inscripcion" className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="text-2xl font-bold tracking-tight">Reserva tu plaza</h3>
          <p className="mt-2 text-stone-600">El curso es gratuito. También puedes inscribirte presencialmente en el Centro Cívico.</p>
        </div>
        <form
          action={FORM_ACTION}
          method="POST"
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          onSubmit={() => setSent(true)}
        >
          <input name="nombre" required placeholder="Nombre y apellidos" className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600 sm:col-span-2" />
          <input name="email" type="email" required placeholder="Correo electrónico" className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600" />
          <input name="telefono" type="tel" placeholder="Teléfono" className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600" />

          {/* Dropdown for role */}
          <select
            name="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
            className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600 sm:col-span-2"
          >
            <option value="">Seleccione una opción</option>
            <option value="Padre">Padre/Madre</option>
            <option value="Maestro">Maestro/a</option>
            <option value="Educador">Educador/a</option>
            <option value="Otro">Otro</option>
          </select>

          {/* Conditional fields */}
          {(rol === 'Padre') && (
            <input
              name="edad_hijos"
              placeholder="Edad de los hijos/as"
              className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600 sm:col-span-2"
            />
          )}

          {rol === 'Otro' && (
            <input
              name="rol_otro"
              placeholder="Por favor, explique"
              className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600 sm:col-span-2"
            />
          )}

          <label className="sm:col-span-2 flex items-start gap-3 text-sm text-stone-600">
            <input type="checkbox" required className="mt-1" />
            Acepto ser contactada/o para confirmar mi inscripción.
          </label>

          <div className="sm:col-span-2 flex items-center gap-3">
            <Button type="submit" className="rounded-2xl px-5">Enviar inscripción</Button>
            <a href="tel:+34657683224" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100"><Phone className="h-4 w-4"/> 657 683 223</a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100"><Share2 className="h-4 w-4"/> Compartir</a>
          </div>

          {sent && (
            <p className="sm:col-span-2 mt-2 inline-flex items-center gap-2 text-teal-700"><CheckCircle2 className="h-5 w-5"/> ¡Gracias! Tu mensaje ha sido enviado.</p>
          )}
        </form>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-600">© {new Date().getFullYear()} Curso para Padres y Educadores</p>
          <div className="flex items-center gap-2">
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100"><Download className="h-4 w-4"/> Descargar cartel</a>
            <a href="#info" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100"><Info className="h-4 w-4"/> Más info</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
