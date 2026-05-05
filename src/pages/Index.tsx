import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logoImap from "@/assets/logo-imap.jpeg";
import logoBianca from "@/assets/logo-bianca.jpeg";
import heroSpa from "@/assets/hero-spa.jpg";
import { Sparkles, Flower2, Hand, Waves, Scissors, Heart, MapPin, Phone, Instagram, CalendarClock } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Depilación Definitiva", desc: "Soprano Titanium, última tecnología." },
  { icon: Waves, title: "HIFU 22D", desc: "Lifting facial y corporal sin cirugía." },
  { icon: Hand, title: "Masajes & Bienestar", desc: "Descontracturantes, reductores, relax." },
  { icon: Flower2, title: "Tratamientos Corporales", desc: "Mesoterapia, Vela Slim, modeladores." },
  { icon: Scissors, title: "Nails", desc: "Manicura, semi y esculpidas." },
  { icon: Heart, title: "Cosmiatría · Bianca Cambiasso", desc: "Dermapen, peeling químico, electroporación, limpieza." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="absolute top-0 inset-x-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImap} alt="IMAP logo" className="h-12 w-12 rounded-full object-cover ring-1 ring-burgundy/20" />
          <div className="leading-tight">
            <p className="font-display text-burgundy text-lg">IMAP</p>
            <p className="text-[10px] tracking-[0.2em] text-burgundy/70 uppercase">Estética Integral</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-burgundy/80">
          <a href="#servicios" className="hover:text-burgundy transition">Servicios</a>
          <a href="#cosmiatria" className="hover:text-burgundy transition">Cosmiatría</a>
          <a href="#turnos" className="hover:text-burgundy transition">Turnos</a>
          <a href="#contacto" className="hover:text-burgundy transition">Contacto</a>
        </nav>
        <Button asChild variant="default" className="bg-burgundy hover:bg-burgundy/90 text-cream rounded-full">
          <a href="https://wa.link/wd49ip" target="_blank" rel="noreferrer">Reservar</a>
        </Button>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-40">
          <img src={heroSpa} alt="Sala de tratamientos IMAP" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/40 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center pt-24">
          <div className="space-y-8">
            <p className="text-xs tracking-[0.4em] text-burgundy/70 uppercase">Centro de Estética Integral · Merlo</p>
            <h1 className="font-display text-5xl md:text-7xl text-burgundy leading-[1.05]">
              El arte de cuidarte,<br/>
              <span className="italic font-serif">en un solo lugar.</span>
            </h1>
            <p className="text-lg text-burgundy/80 max-w-md font-light">
              Depilación definitiva, bienestar corporal y cosmiatría profesional.
              Última tecnología en manos de un equipo que ama lo que hace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-burgundy hover:bg-burgundy/90 text-cream rounded-full px-8 h-12">
                <a href="#servicios">Ver tratamientos</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-burgundy/30 text-burgundy hover:bg-burgundy/5 rounded-full px-8 h-12">
                <a href="#turnos">Agenda de turnos</a>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:flex justify-center">
            <div className="absolute -inset-10 bg-blush/30 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-1 gap-6">
              <img src={logoImap} alt="IMAP" className="w-64 h-64 rounded-full object-cover shadow-soft ring-1 ring-burgundy/10" />
              <img src={logoBianca} alt="Bianca Cambiasso" className="w-44 h-44 rounded-full object-cover shadow-soft ring-1 ring-burgundy/10 ml-auto -mt-16" />
            </div>
          </div>
        </div>
      </section>

      {/* DUO BRAND */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-rose-deep uppercase mb-4">Dos espacios · Una experiencia</p>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy leading-tight mb-6">
              IMAP & Bianca Cambiasso
            </h2>
            <p className="text-burgundy/75 font-light leading-relaxed mb-4">
              <strong className="font-medium text-burgundy">IMAP</strong> es nuestro centro de estética integral,
              especializado en depilación definitiva con Soprano Titanium, HIFU, masajes y tratamientos corporales.
            </p>
            <p className="text-burgundy/75 font-light leading-relaxed">
              Sumamos los servicios de <strong className="font-medium text-burgundy">Bianca Cambiasso</strong>,
              técnica universitaria en dermatocosmiatría, para llevar el cuidado de tu piel al siguiente nivel.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center space-y-3">
              <img src={logoImap} alt="IMAP" className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-soft mx-auto" />
              <p className="font-display text-burgundy">IMAP</p>
            </div>
            <div className="text-center space-y-3">
              <img src={logoBianca} alt="Bianca Cambiasso" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-soft mx-auto" />
              <p className="font-display text-burgundy text-sm">Bianca Cambiasso</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.4em] text-rose-deep uppercase mb-4">Nuestros servicios</p>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy">Tratamientos a tu medida</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-8 bg-card border-border/60 hover:shadow-soft transition-all duration-500 hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-full bg-blush/40 flex items-center justify-center mb-5 group-hover:bg-burgundy group-hover:text-cream transition-colors">
                  <Icon className="w-5 h-5 text-burgundy group-hover:text-cream" />
                </div>
                <h3 className="font-serif text-2xl text-burgundy mb-2">{title}</h3>
                <p className="text-sm text-burgundy/70 font-light leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COSMIATRIA HIGHLIGHT */}
      <section id="cosmiatria" className="py-24 md:py-32 bg-blush/30">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <img src={logoBianca} alt="Bianca Cambiasso" className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-soft mx-auto" />
          <div>
            <p className="text-xs tracking-[0.4em] text-rose-deep uppercase mb-4">Cosmiatría profesional</p>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy mb-6 leading-tight">Tu piel, en manos expertas</h2>
            <p className="text-burgundy/75 font-light leading-relaxed mb-6">
              Bianca Cambiasso, técnica universitaria en dermatocosmiatría y estética (UM),
              ofrece tratamientos faciales y corporales con foco en resultados reales y cuidado integral.
            </p>
            <ul className="space-y-2 text-burgundy/80 font-light mb-8">
              <li>· Dermapen & Microneedling</li>
              <li>· Peeling Químico</li>
              <li>· Electroporación</li>
              <li>· Limpieza Express & profunda</li>
            </ul>
            <Button asChild className="bg-burgundy hover:bg-burgundy/90 text-cream rounded-full px-8">
              <a href="https://wa.link/t2qbsl" target="_blank" rel="noreferrer">Consultar con Bianca</a>
            </Button>
          </div>
        </div>
      </section>

      {/* TURNOS - PROXIMAMENTE */}
      <section id="turnos" className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-burgundy p-12 md:p-20 text-center shadow-soft">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blush/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blush/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-cream/90 text-xs tracking-[0.3em] uppercase mb-6">
                <CalendarClock className="w-3.5 h-3.5" /> Próximamente
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-cream mb-4">Agenda de Turnos Online</h2>
              <p className="text-cream/80 font-light max-w-xl mx-auto mb-8">
                Estamos preparando una agenda online para que reserves tu turno en segundos,
                elijas profesional y recibas recordatorios automáticos.
              </p>
              <Button disabled className="bg-cream/15 text-cream/60 rounded-full px-8 h-12 cursor-not-allowed border border-cream/20">
                Reservar turno · Próximamente
              </Button>
              <p className="text-cream/60 text-xs mt-6">Mientras tanto, escribinos por WhatsApp para coordinar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO / FOOTER */}
      <footer id="contacto" className="bg-burgundy text-cream py-20">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImap} alt="IMAP" className="h-14 w-14 rounded-full object-cover" />
              <img src={logoBianca} alt="Bianca Cambiasso" className="h-14 w-14 rounded-full object-cover" />
            </div>
            <p className="font-display text-2xl mb-2">IMAP & Bianca Cambiasso</p>
            <p className="text-cream/70 text-sm font-light">Centro de estética integral & cosmiatría.</p>
          </div>
          <div className="space-y-3 text-sm text-cream/80">
            <p className="font-display text-lg text-cream mb-2">Visitanos</p>
            <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5"/> Colón 533, 2° piso · Merlo, Buenos Aires</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> Turnos con seña previa</p>
          </div>
          <div className="space-y-3 text-sm text-cream/80">
            <p className="font-display text-lg text-cream mb-2">Seguinos</p>
            <a href="https://instagram.com/depilaciondefinitiva.imap" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cream transition"><Instagram className="w-4 h-4"/> @depilaciondefinitiva.imap</a>
            <a href="https://instagram.com/cosmiatria.biancambiasso" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cream transition"><Instagram className="w-4 h-4"/> @cosmiatria.biancambiasso</a>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-cream/10 text-xs text-cream/50 text-center">
          © {new Date().getFullYear()} IMAP · Centro de Estética Integral
        </div>
      </footer>
    </div>
  );
};

export default Index;
