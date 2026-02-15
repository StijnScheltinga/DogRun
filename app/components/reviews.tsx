const reviews = [
	{
		name: "Irene Olde Bijvank",
		rating: 5,
		text: "Bram en de meiden van de Dogrun hebben geweldig voor onze kat Poes gezorgd tijdens onze vakantie. Poes is een hele lieve maar ook een hele...",
	},
	{
		name: "Dirk Olsthoorn",
		rating: 5,
		text: "Al Jaren ons vertrouwde adres voor de vakanties. Heel blij mee! En onze katten Joep en Noortje ook.",
	},
	{
		name: "Louise Broek",
		rating: 5,
		text: "Onze 4 poezenbeesten worden met liefde verzorgt door Bram van Dog-Run. Met een gerust hart kunnen wij op vakantie gaan! Elke dag krijgen...",
	},
	{
		name: "Marjan Louwes",
		rating: 5,
		text: "Heel tevreden over deze kattenoppas! Kreeg af en toe een filmpje toegestuurd op vakantie en dat vond ik fijn. Ook heeft Bram het kleed even gezogen ivm...",
	},
	{
		name: "Yuri G",
		rating: 5,
		text: "Heel erg lief en betrouwbaar voor onze twee katten. Dit jaar voor de 2de keer gebruik gemaakt van deze geweldige service. Ik ben zeer tevreden. Ik heb...",
	},
	{
		name: "Kelly van Roosmalen",
		rating: 5,
		text: "Al enkele jaren maken wij tijdens de vakantie gebruik van de kattenoppas van Dogrun. Onze katten kunnen dankzij de uitstekende verzorging van Bram...",
	},
];

const Reviews = () => {
	return (
		<section className="w-full bg-background py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Wat onze klanten zeggen
					</h2>
					<div className="flex items-center justify-center gap-2 mb-2">
						{/* Star rating display */}
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className="w-6 h-6 text-yellow-400 fill-current"
								viewBox="0 0 20 20"
							>
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
							</svg>
						))}
					</div>
					<p className="text-gray-600">Gebaseerd op Google Reviews</p>
				</div>

				{/* Reviews Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{reviews.map((review, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
						>
							{/* Review Header */}
							<div className="flex items-center justify-between mb-4">
								<div>
									<h3 className="font-semibold text-foreground">{review.name}</h3>
								</div>
								<div className="flex">
									{[...Array(review.rating)].map((_, i) => (
										<svg
											key={i}
											className="w-5 h-5 text-yellow-400 fill-current"
											viewBox="0 0 20 20"
										>
											<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
										</svg>
									))}
								</div>
							</div>

							{/* Review Text */}
							<p className="text-gray-700 leading-relaxed">{review.text}</p>
						</div>
					))}
				</div>

				{/* Link to Google Reviews */}
				<div className="text-center mt-12">
					<a
						href="https://www.google.com/maps/search/?api=1&query=Kattenoppas+Purmerend"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
					>
						Bekijk alle reviews op Google
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
