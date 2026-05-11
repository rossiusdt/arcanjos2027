import { Calendar, MapPin, Share2, ShieldCheck } from 'lucide-react';

export default function EventHero() {
  return (
    <div className="bg-gradient-to-br from-[#0a3d38] via-[#0d5c54] to-[#0a3d38] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg text-white">
              Réveillon Arcanjos 2027
            </h1>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 mt-1 flex-shrink-0 text-[#5ee8d8]" />
                <div>
                  <p className="font-semibold text-white">28 de Dezembro de 2026 a 1 de Janeiro de 2027</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#5ee8d8]" />
                <div>
                  <p className="font-semibold text-white">Evento presencial em <span className="text-[#5ee8d8]">Barra de São Miguel, Alagoas</span></p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-[#5ee8d8]/50 backdrop-blur-sm rounded-2xl px-4 py-2.5">
              <div className="relative flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5ee8d8] to-[#0d9e8e] flex items-center justify-center shadow">
                  <ShieldCheck className="w-4 h-4 text-[#0a3d38]" strokeWidth={2.5} />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#0a3d38]" />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] font-semibold text-[#5ee8d8] uppercase tracking-widest">Oficial</p>
                <p className="text-xs font-bold text-white">Única página de vendas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Gemini_Generated_Image_xp7om9xp7om9xp7o.png"
                alt="Réveillon Arcanjos 2027"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="absolute top-4 right-4 bg-white/90 text-[#0d5c54] px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-white transition-colors">
              <Share2 className="w-4 h-4" />
              COMPARTILHAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
