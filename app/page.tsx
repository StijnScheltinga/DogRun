import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Reviews from "./components/reviews";
import Services from "./components/services";
import Divider from "./components/divider";
import AboutUs from "./components/about-us";
import Steps from "./components/steps";

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
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Betrouwbare kattenoppas in Purmerend
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              Uw kat krijgt de beste zorg terwijl u weg bent
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/tarieven"
                className="inline-block bg-white text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Bekijk tarieven
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-brand text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand/90 transition-colors shadow-lg"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Cards */}
      <Services />

      <Divider />

      <AboutUs />

      <Divider />

      <Steps />

      <Divider />

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}
