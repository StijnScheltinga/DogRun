import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image – left on desktop, top on mobile */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="/about_us.webp"
              alt="Over ons"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Over ons
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ons team bestaat uit 3 medewerkers onder leiding van{" "}
              <strong className="text-brand">Bram Bonhof</strong>. Bram
              heeft al <strong className="text-brand">22 jaar ervaring</strong>{" "}
              in het verzorgen van katten en andere kleine huisdieren aan huis.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in bibendum sapien. Morbi mattis, ipsum id mollis luctus, risus nunc tristique quam, quis commodo ipsum turpis eget massa. Cras fermentum neque sed mauris tincidunt ultrices. In feugiat egestas consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
