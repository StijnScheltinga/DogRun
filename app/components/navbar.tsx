import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

const Navbar = () => {
	return (
		<nav className="relative z-50 w-full border-b border-gray-200 bg-background">
			<div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
				<div className="relative flex justify-between items-center h-24 py-4">
					{/* Logo – left */}
					<Link href="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity">
						<Image
							src="/kattenoppas-logo.png"
							alt="Katten Oppas Purmerend"
							width={160}
							height={80}
							className="h-auto"
							priority
						/>
					</Link>

					{/* Navigation links – center */}
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-10">
						<Link
							href="/"
							className="text-lg font-medium tracking-tight text-foreground/90 hover:text-brand transition-colors duration-200 py-2"
						>
							Home
						</Link>
						<Link
							href="/tarieven"
							className="text-lg font-medium tracking-tight text-foreground/90 hover:text-brand transition-colors duration-200 py-2"
						>
							Tarieven
						</Link>
						<Link
							href="/contact"
							className="text-lg font-medium tracking-tight text-foreground/90 hover:text-brand transition-colors duration-200 py-2"
						>
							Contact
						</Link>
					</div>

					{/* CTA + mobile menu */}
					<div className="flex items-center gap-4 shrink-0">
						<Link
							href="/contact"
							className="hidden md:inline-flex items-center gap-2 bg-brand text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand/90 transition-colors"
						>
							<Phone className="w-4 h-4" />
							Plan een afspraak
						</Link>
						<button className="md:hidden text-foreground hover:text-gray-600" aria-label="Menu">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;