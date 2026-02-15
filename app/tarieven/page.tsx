import Divider from "../components/divider";
import Navbar from "../components/navbar";

export default function Tarieven() {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			
			{/* Header Section */}
			<section className="pt-12 md:pt-16 pb-6">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
							Tarieven
						</h1>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Transparante prijzen voor professionele kattenverzorging aan huis
						</p>
					</div>
				</div>
			</section>

			<Divider />

			{/* Pricing Table Section */}
			<section className="py-6 md:py-8">
				<div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
					{/* Main Category */}
					<div className="mb-8">
						<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
							Kat verzorging aan huis
						</h2>

						{/* Pricing Table – same green scheme as "Wat is inbegrepen?" */}
						<div className="overflow-x-auto overflow-hidden rounded-xl border border-brand/20 shadow-md">
							<table className="w-full border-collapse">
								<thead>
									<tr className="bg-brand">
										<th className="px-6 py-4 text-left text-lg font-semibold text-white border-b border-white/20">
											Service
										</th>
										<th className="px-6 py-4 text-center text-lg font-semibold text-white border-b border-white/20">
											1 kat
										</th>
										<th className="px-6 py-4 text-center text-lg font-semibold text-white border-b border-white/20">
											2 katten
										</th>
										<th className="px-6 py-4 text-center text-lg font-semibold text-white border-b border-white/20">
											3 katten
										</th>
									</tr>
								</thead>
								<tbody>
									{/* Row 1: Vacation Care */}
									<tr className="border-b border-brand/10 bg-brand/5 hover:bg-brand/10 transition-colors">
										<td className="px-6 py-5 text-foreground">
											Kat verzorging aan huis tijdens uw vakantie per dag incl. weekend
										</td>
										<td className="px-6 py-5 text-center font-semibold text-foreground">
											€17,00
										</td>
										<td className="px-6 py-5 text-center font-semibold text-foreground">
											€20,00
										</td>
										<td className="px-6 py-5 text-center font-semibold text-foreground">
											€22,00
										</td>
									</tr>
									{/* Row 2: Intake Conversation */}
									<tr className="border-b border-brand/10 bg-brand-light/10 hover:bg-brand-light/20 transition-colors">
										<td className="px-6 py-5 text-foreground">
											Kattenverzorging
										</td>
										<td className="px-6 py-5 text-center text-foreground">
											Intake gesprek €20,00
										</td>
										<td className="px-6 py-5 text-center text-gray-500">
											-
										</td>
										<td className="px-6 py-5 text-center text-gray-500">
											-
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Wat is inbegrepen? – table in brand green shades */}
					<div className="mt-12 overflow-hidden rounded-xl border border-brand/20 shadow-md">
						<table className="w-full border-collapse">
							<thead>
								<tr className="bg-brand">
									<th className="px-6 py-4 text-left text-lg font-semibold text-white">
										Wat is inbegrepen?
									</th>
								</tr>
							</thead>
							<tbody>
								{[
									"Dagelijkse bezoeken aan uw kat(ten)",
									"Voeding en vers water",
									"Schone kattenbak",
									"Aandacht en spel",
									"Dagelijkse updates (foto's en berichten)",
									"Diverse huishoudelijke taken",
								].map((item, i) => (
									<tr
										key={i}
										className={i % 2 === 0 ? "bg-brand/5" : "bg-brand-light/10"}
									>
										<td className="px-6 py-3 text-foreground">
											{item}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Contact CTA */}
					<div className="mt-12 text-center">
						<p className="text-lg text-gray-700 mb-6">
							Heeft u vragen over onze tarieven of wilt u een afspraak maken?
						</p>
						<a
							href="/contact"
							className="inline-block bg-brand text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors shadow-md"
						>
							Neem contact op
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
