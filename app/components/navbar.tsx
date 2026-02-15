import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="relative z-50 w-full border-b border-gray-200 bg-background">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
				<div className="flex justify-between items-center h-24 py-4">
					{/* Logo/Brand */}
					<Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
						<Image 
							src="/kattenoppas-logo.png" 
							alt="Katten Oppas Purmerend" 
							width={160} 
							height={80}
							className="h-auto"
							priority
						/>
					</Link>

					{/* Navigation Links */}
					<div className="hidden md:flex space-x-8">
						<Link href="/" className="text-foreground hover:text-gray-600 transition-colors">
							Home
						</Link>
						<Link href="/tarieven" className="text-foreground hover:text-gray-600 transition-colors">
							Tarieven
						</Link>
						<Link href="/contact" className="text-foreground hover:text-gray-600 transition-colors">
							Contact
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button className="md:hidden text-foreground hover:text-gray-600">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;