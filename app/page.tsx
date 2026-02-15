import Image from "next/image";
import Navbar from "./components/navbar";
import Reviews from "./components/reviews";
import Services from "./components/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[800px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/cat-on-couch.jpg"
            alt="Cat"
            fill
            className="object-cover"
            priority
            quality={70}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Betrouwbare kattenoppas in Purmerend
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              Uw kat krijgt de beste zorg terwijl u weg bent
            </p>
            <button className="bg-brand text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand/90 transition-colors shadow-lg">
              Neem contact op
            </button>
          </div>
        </div>
      </section>
      
      {/* Services Cards */}
      <Services />
      
      {/* Service Information Section */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-5xl text-center mx-auto px-6 sm:px-8 lg:px-12">

          {/* Intake Process */}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Hoe werkt het?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We houden u via de app op de hoogte. Dit doen we via filmpjes en/of foto's.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Als u gebruik wilt maken van onze dienst, komt Bram eerst langs voor een <strong className="text-foreground">intakegesprek</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tijdens dit gesprek kunt u dan alle details bespreken over de verzorging van uw dieren en eventueel andere wensen aangeven aangaande post of planten.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aan dit intakegesprek zijn eenmalig kosten verbonden. <a href="/tarieven" className="text-blue-600 hover:text-blue-700 font-semibold underline">Zie tarieven</a>.
            </p>
        </div>
      </section>
      
      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}
