import Link from "next/link";
import Navbar from "../components/navbar";
import Divider from "../components/divider";
import { Phone, Mail, MessageCircle } from "lucide-react";

const iconSize = 32;

const contactCards = [
  {
    title: "Telefoon",
    value: "+31 6 12345678",
    href: "tel:+31612345678",
    icon: <Phone size={iconSize} strokeWidth={1.5} />,
  },
  {
    title: "WhatsApp",
    value: "+31 6 12345678",
    href: "https://wa.me/31612345678",
    icon: <MessageCircle size={iconSize} strokeWidth={1.5} />,
  },
  {
    title: "E-mail",
    value: "info@kattenoppaspurmerend.nl",
    href: "mailto:info@kattenoppaspurmerend.nl",
    icon: <Mail size={iconSize} strokeWidth={1.5} />,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section – same spacing as Tarieven */}
      <section className="pt-12 md:pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Voor het inplannen van een intakegesprek of verdere vragen neem gerust contact met ons op. We helpen u graag verder.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Contact cards – same section spacing as Tarieven content */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactCards.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className="flex flex-col items-center text-center bg-brand rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg hover:border-brand/20 transition-all"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background text-brand mb-4 shrink-0">
                  {card.icon}
                </div>
                <h2 className="text-lg font-semibold text-background mb-2">
                  {card.title}
                </h2>
                <p className="text-background/80 text-sm break-all">
                  {card.value}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
