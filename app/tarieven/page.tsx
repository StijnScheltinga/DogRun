import Navbar from "../components/navbar";

export default function Tarieven() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			
			{/* Header Section */}
			<section className="bg-gray-50 py-12 md:py-16">
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

			{/* Pricing Table Section */}
			<section className="py-12 md:py-16">
				<div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
					{/* Main Category */}
					<div className="mb-8">
						<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
							Kat verzorging aan huis
						</h2>

						{/* Pricing Table */}
						<div className="overflow-x-auto">
							<table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
								{/* Table Header */}
								<thead className="bg-gray-100">
									<tr>
										<th className="px-6 py-4 text-left text-lg font-bold text-foreground border-b border-gray-200">
											Service
										</th>
										<th className="px-6 py-4 text-center text-lg font-bold text-foreground border-b border-gray-200">
											1 kat
										</th>
										<th className="px-6 py-4 text-center text-lg font-bold text-foreground border-b border-gray-200">
											2 katten
										</th>
										<th className="px-6 py-4 text-center text-lg font-bold text-foreground border-b border-gray-200">
											3 katten
										</th>
									</tr>
								</thead>
								<tbody>
									{/* Row 1: Vacation Care */}
									<tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
										<td className="px-6 py-5 text-gray-700">
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
									<tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
										<td className="px-6 py-5 text-gray-700">
											Kattenverzorging
										</td>
										<td className="px-6 py-5 text-center text-gray-700">
											Intake gesprek €20,00
										</td>
										<td className="px-6 py-5 text-center text-gray-400">
											-
										</td>
										<td className="px-6 py-5 text-center text-gray-400">
											-
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Additional Information */}
					<div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Wat is inbegrepen?
						</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>Dagelijkse bezoeken aan uw kat(ten)</li>
							<li>Voeding en vers water</li>
							<li>Schone kattenbak</li>
							<li>Aandacht en spel</li>
							<li>Dagelijkse updates (foto's en berichten)</li>
						</ul>
					</div>

					{/* Contact CTA */}
					<div className="mt-12 text-center">
						<p className="text-lg text-gray-700 mb-6">
							Heeft u vragen over onze tarieven of wilt u een afspraak maken?
						</p>
						<a
							href="/contact"
							className="inline-block bg-foreground text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors shadow-md"
						>
							Neem contact op
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
