import {
  PawPrint,
  Trash2,
  Heart,
  Mail,
  Flower2,
  BrushCleaning,
} from "lucide-react";

const iconSize = 40;
const iconStroke = 1.5;

const services = [
  {
    title: "Eten geven en water verversen",
    icon: <PawPrint size={iconSize} strokeWidth={iconStroke} />,
  },
  {
    title: "Kattenbak of kooi verschonen",
    icon: <Trash2 size={iconSize} strokeWidth={iconStroke} />,
  },
  {
    title: "Een knuffel geven",
    icon: <Heart size={iconSize} strokeWidth={iconStroke} />,
  },
  {
    title: "Post verzamelen",
    icon: <Mail size={iconSize} strokeWidth={iconStroke} />,
  },
  {
    title: "Planten water geven",
    icon: <Flower2 size={iconSize} strokeWidth={iconStroke} />,
  },
  {
    title: "Indien nodig stofzuigen",
    icon: <BrushCleaning size={iconSize} strokeWidth={iconStroke} />,
  },
];

const Services = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zorgeloos van huis, wij zorgen voor alles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bent u een dagje weg of op vakantie? Wij komen{" "}
            <strong className="text-foreground">dagelijks</strong> langs om uw
            huis en dieren liefdevol te verzorgen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-brand rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background mb-4 text-foreground border-2 [&>svg]:shrink-0">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-background">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
