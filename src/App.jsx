import React, { useState } from 'react'
import { Calendar, MapPin, Clock, Phone, Share2, Download, CheckCircle2, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card.jsx'
import { Button } from './ui/button.jsx'

const FORM_ACTION = 'https://formspree.io/f/xldlzlpq' // Linked to Formspree

// WhatsApp constants
const WHATSAPP_NUMBER_INTL = "34657683224"
const WHATSAPP_VISIBLE = "657 683 224"
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, tengo interés en apuntarme a este curso en el Centro Cívico. Gracias.")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${WHATSAPP_MESSAGE}`

function InfoCard({ icon: Icon, title, value }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
            <Icon className="h-5 w-5" />
          </div>
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

// Simple image card. Put a file at /public/familia.jpg for this to render.
function FamilyImage() {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-white shadow-xl">
      <img
        src="/familia.jpg"
        alt="Familia caminando en un parque"
        className="w-full h-full object-cover aspect-[3/4]"
      />
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
            CURSO PARA<br />PADRES Y <span className="text-orange-600">EDUCADORES</span>
          </div>
          <div className="mt-2 text-sm uppercase tracking-wider text-teal-700 font-bold">GRATUITO</div>
          <div className="mt-3 text-sm text-stone-700">Impartido por</div>
          <div className="text-xl font-bold">Zhinuzh Watson</div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="bg-orange-100 rounded-xl p-3">
              <div className="font-semibold">Cuándo</div>
              <div>Todos los martes. Comienzo: 21-10-25</div>
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
          <div className="mt-auto pt-4 border-t text-sm">
            Inscripciones en el Centro Cívico · Más información por WhatsApp (solo mañanas):{' '}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
              {WHATSAPP_VISIBLE}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [sent, setSent] = useState(false)
  const [rol, setRol] = useState('')

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 relative">
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-start">
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
              Un espacio práctico para compartir herramientas y experiencias. Impartido por <span className="font-semibold">Zhinuzh Watson</span>, experta en temas educativos y con décadas de experiencia con niños, prejóvenes y jóvenes de todas las edades, y con padres, maestros, educadores y pedagogos.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InfoCard icon={Calendar} title="Cuándo" value="Todos los martes. Comienzo: 21-10-25" />
              <InfoCard icon={Clock} title="Horario" value="12:00 – 13:30" />
              <InfoCard icon={MapPin} title="Lugar" value="Centro Cívico de Parquesol (Valladolid)" />
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inscripcion"><Button className="rounded-2xl px-5">Inscribirme gratis</Button></a>
              <a href="#mapa" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100">
                <MapPin className="h-4 w-4" /> Cómo llegar
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100">
                <Phone className="h-4 w-4" /> {WHATSAPP_VISIBLE}
              </a>
            </div>

            <p className="mt-3 text-sm text-stone-600">
              Inscripciones en el Centro Cívico. Más información por WhatsApp (solo mañanas).
            </p>

            {/* Extra info blocks */}
            <div className="mt-6 grid gap-4">
              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <p className="font-semibold">Inscripciones por WhatsApp</p>
                  <p className="text-stone-700">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                      {WHATSAPP_VISIBLE}
                    </a>{' '}
                    o presencial en el Centro Cívico de Parquesol.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <p className="font-semibold">Más información</p>
                  <p className="text-stone-700">
                    Mande un WhatsApp pidiendo más información y, con la mayor brevedad, se le llamará para darle más detalles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right column: prefer the real family photo if present, else the mockup */}
          <div className="space-y-6">
            <FamilyImage />
            <PosterMockup />
          </div>
        </div>
      </section>

      {/* --- DEFINICIÓN DEL CURSO --- */}
      <section id="definicion" className="bg-white border-y border-stone-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-6">
          <h3 className="text-2xl font-bold tracking-tight">Definición del curso</h3>
          <div className="prose max-w-none text-stone-800">
            <p>
              Partimos de la creencia de que todos los niños son minas ricas en gemas de valor inestimable y que solamente una adecuada educación puede revelar sus tesoros. Este curso, impartido en muchos lugares a lo largo de muchos años, consiste en:
            </p>
            <ul className="list-disc pl-6">
              <li>Sesiones dinámicas con ideas prácticas para el día a día en casa, en el aula, en la sociedad, etc.</li>
              <li>Enfoque personalizado: cada niño es un mundo, por eso las plazas son limitadas.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- INFO RESUMEN (se mantiene) --- */}
      <section id="info" className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-6">
          <Bullet title="Qué es" text="Sesiones prácticas y cercanas para familias y docentes." />
          <Bullet title="Para quién" text="Padres, madres, cuidadores y educadores de cualquier etapa." />
          <Bullet title="Precio" text="100% gratuito. Plazas limitadas por personalización." />
        </div>
      </section>

      {/* --- MAPA --- */}
      <section id="mapa" className="bg-white border-y border-stone-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
          <h3 className="text-xl font-semibold tracking-tight">Ubicación</h3>
          <p className="text-stone-600">Centro Cívico de Parquesol · Valladolid</p>
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-stone-200">
            <iframe
              title="Mapa Centro Cívico de Parquesol (Valladolid)"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Centro%20C%C3%ADvico%20Parquesol%2C%20Valladolid&output=embed"
            />
          </div>
        </div>
      </section>

      {/* --- FORM --- */}
      <section id="inscripcion" className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="text-2xl font-bold tracking-tight">Reserva tu plaza</h3>
          <p className="mt-2 text-stone-600">
            El curso es gratuito. También puedes inscribirte presencialmente en el Centro Cívico.
          </p>
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

          {/* Nuevo: Edad del/la participante */}
          <input
            name="edad_participante"
            placeholder="Edad del/la participante"
            className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
          />

          {/* Dropdown para rol */}
          <select
            name="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
            className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option value="">Seleccione una opción</option>
            <option value="Padre">Padre/Madre</option>
            <option value="Maestro">Maestro/a o Educador/a</option>
            <option value="Otro">Otro</option>
          </select>

          {/* Campos condicionales */}
          {rol === 'Padre' && (
            <input
              name="edad_hijos"
              placeholder="Edad de los hijos/as"
              className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600 sm:col-span-2"
            />
          )}

          {rol === 'Otro' && (
            <input
              name="rol_otro"
              placeholder="Si elige 'Otro', indique cuál"
              className="rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600 sm:col-span-2"
            />
          )}

          <label className="sm:col-span-2 flex items-start gap-3 text-sm text-stone-600">
            <input type="checkbox" required className="mt-1" />
            Acepto ser contactada/o para confirmar mi inscripción.
          </label>

          <div className="sm:col-span-2 flex items-center gap-3">
            <Button type="submit" className="rounded-2xl px-5">Enviar inscripción</Button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100"
            >
              <Phone className="h-4 w-4" /> {WHATSAPP_VISIBLE}
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100">
              <Share2 className="h-4 w-4" /> Compartir
            </a>
          </div>

          {sent && (
            <p className="sm:col-span-2 mt-2 inline-flex items-center gap-2 text-teal-700">
              <CheckCircle2 className="h-5 w-5" /> ¡Gracias! Tu mensaje ha sido enviado.
            </p>
          )}
        </form>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-600">© {new Date().getFullYear()} Curso para Padres y Educadores</p>
          <div className="flex items-center gap-2">
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100">
              <Download className="h-4 w-4" /> Descargar cartel
            </a>
            <a href="#info" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-stone-300 hover:bg-stone-100">
              <Info className="h-4 w-4" /> Más info
            </a>
          </div>
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center z-50"
        title="Enviar WhatsApp"
      >
        {/* WhatsApp SVG Logo */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6">
          <path d="M16.001 3.2c-7.077 0-12.8 5.723-12.8 12.8 0 2.258.593 4.464 1.715 6.4l-1.829 6.676 6.851-1.8c1.832 1 3.906 1.524 6.063 1.524h.001c7.077 0 12.8-5.723 12.8-12.8 0-3.417-1.332-6.627-3.754-9.046S19.418 3.2 16.001 3.2zm0 23.2c-1.826 0-3.603-.49-5.155-1.42l-.369-.217-4.065 1.07 1.084-3.96-.239-.384C6.472 20.024 5.6 18.052 5.6 16c0-5.746 4.655-10.4 10.401-10.4 2.776 0 5.386 1.081 7.348 3.043A10.33 10.33 0 0 1 26.4 16c0 5.746-4.654 10.4-10.399 10.4zm5.937-7.8c-.326-.163-1.926-.95-2.225-1.057-.298-.11-.515-.163-.731.163-.217.326-.84 1.057-1.029 1.274-.188.217-.376.244-.702.081-.326-.163-1.376-.505-2.62-1.611-.968-.861-1.622-1.921-1.811-2.247-.188-.326-.02-.502.142-.665.146-.145.326-.376.489-.564.163-.188.217-.326.326-.544.109-.217.054-.407-.027-.57-.081-.163-.731-1.758-1.002-2.414-.263-.63-.53-.545-.731-.555l-.624-.011c-.217 0-.57.081-.869.407-.298.326-1.14 1.113-1.14 2.713 0 1.6 1.168 3.145 1.331 3.362.163.217 2.3 3.52 5.56 4.935.777.335 1.382.535 1.854.684.779.248 1.487.213 2.047.13.625-.093 1.926-.786 2.198-1.545.272-.758.272-1.408.19-1.545-.081-.163-.298-.244-.624-.407z"/>
        </svg>
      </a>
    </div>
  )
}
