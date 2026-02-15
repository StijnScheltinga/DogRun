const reviews = [
	{
		name: "Sarah de Vries",
		rating: 5,
		date: "2 weken geleden",
		text: "Geweldige oppas! Mijn kat was super tevreden. Zeer betrouwbaar en liefdevol. Aanrader!",
	},
	{
		name: "Jan Bakker",
		rating: 5,
		date: "1 maand geleden",
		text: "Perfecte zorg voor mijn twee katten. Zeer professioneel en communicatief. Zeker weer gebruiken!",
	},
	{
		name: "Emma van der Berg",
		rating: 5,
		date: "3 weken geleden",
		text: "Mijn kat voelde zich meteen op zijn gemak. Zeer attent en zorgzaam. Top service!",
	},
	{
		name: "Mark Jansen",
		rating: 5,
		date: "2 maanden geleden",
		text: "Uitstekende kattenoppas! Regelmatig updates en foto's. Mijn kat was super blij.",
	},
	{
		name: "Lisa Smit",
		rating: 5,
		date: "1 maand geleden",
		text: "Zeer tevreden! Professioneel, betrouwbaar en mijn kat werd perfect verzorgd.",
	},
	{
		name: "Tom de Wit",
		rating: 5,
		date: "3 weken geleden",
		text: "Fantastische ervaring. Mijn kat was helemaal niet gestrest toen ik terugkwam. Aanrader!",
	},
];

const Reviews = () => {
	return (
		<section className="w-full bg-gray-50 py-16 md:py-24">
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
									<p className="text-sm text-gray-500">{review.date}</p>
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
						href="https://g.page/r/YOUR_GOOGLE_REVIEWS_LINK"
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
