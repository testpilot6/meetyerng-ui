"use client";
import { motion } from "framer-motion";
import {
	Users,
	Target,
	Eye,
	Heart,
	BookOpen,
	Lightbulb,
	Globe,
	Award,
	Mic,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const values = [
	{
		icon: Heart,
		title: "ការស្រឡាញ់",
		title_en: "Love & Compassion",
		description:
			"យើងជឿជាក់ថាការស្រឡាញ់និងការខ្វល់ខ្វាយគ្នាទៅវិញទៅមកគឺជាមូលដ្ឋានសំខាន់នៃការកសាងសហគមន៍ដ៏រឹងមាំ",
		color: "from-red-500 to-pink-500",
	},
	{
		icon: BookOpen,
		title: "ការអប់រំ",
		title_en: "Education",
		description:
			"ការអប់រំគឺជាមូលដ្ឋានសំខាន់បំផុតនៃការអភិវឌ្ឍន៍ និងការសាងសង់អនាគតដ៏ភ្លឺស្វាង",
		color: "from-blue-500 to-indigo-500",
	},
	{
		icon: Globe,
		title: "វប្បធម៌",
		title_en: "Culture",
		description:
			"ការអភិរក្ស និងលើកកម្ពស់វប្បធម៌ប្រពៃណីខ្មែរដ៏រុងរឿងដល់កុលបុត្រអនាគត",
		color: "from-green-500 to-emerald-500",
	},
	{
		icon: Users,
		title: "ការរួបរួម",
		title_en: "Unity",
		description: "ការរួបរួមគ្នាក្នុងការកសាងសហគមន៍ និងការជួយគ្នាទៅវិញទៅមក",
		color: "from-purple-500 to-violet-500",
	},
	{
		icon: Lightbulb,
		title: "ភាពច្នៃប្រឌិត",
		title_en: "Innovation",
		description:
			"ការផ្តួចផ្តើមគំនិតថ្មីៗ និងការគិតច្នៃប្រឌិតក្នុងការដោះស្រាយបញ្ហាសង្គម",
		color: "from-yellow-500 to-orange-500",
	},
	{
		icon: Award,
		title: "ការទទួលខុសត្រូវ",
		title_en: "Responsibility",
		description: "ការទទួលខុសត្រូវចំពោះសហគមន៍ និងការធ្វើការងារដោយស្មោះត្រង់",
		color: "from-teal-500 to-cyan-500",
	},
];

const timeline = [
	{
		year: "2018",
		title: "ការបង្កើតក្រុម",
		title_en: "Organization Founded",
		description: "ការបង្កើតក្រុម Mettyerng ដោយសមាជិកស្ម័គ្រចិត្តចំនួន ១០ នាក់",
		achievements: ["10 សមាជិកចំនួនដើម", "ការបង្កើតគម្រោងដំបូង"],
	},
	{
		year: "2019",
		title: "ការអប់រំ",
		title_en: "Education Initiative",
		description: "ការចាប់ផ្តើមគម្រោងផ្តល់ការអប់រំដល់កុមារនៅតាមទីជនបទ",
		achievements: ["50 កុមារទទួលការអប់រំ", "5 ថ្នាក់រៀនដំបូង"],
	},
	{
		year: "2020",
		title: "ជំនួយកូវីដ",
		title_en: "COVID-19 Relief",
		description: "ការផ្តល់ជំនួយអាហារ និងវេជ្ជសាស្ត្រក្នុងកំឡុងជំងឺកូវីដ-១៩",
		achievements: ["500 គ្រួសារបានជំនួយ", "បេរ័ត្នវេជ្ជសាស្ត្រ"],
	},
	{
		year: "2021",
		title: "គម្រោងកាត់សក់",
		title_en: "Haircut Project",
		description: "ការចាប់ផ្តើមគម្រោងកាត់សក់ដោយមិនគិតថ្លៃសម្រាប់ប្រជាជន",
		achievements: ["200 នាក់បានកាត់សក់", "ការសេវាប្រចាំខែ"],
	},
	{
		year: "2022",
		title: "ការរីកចម្រើន",
		title_en: "Expansion",
		description: "ការពង្រីកសកម្មភាពទៅកាន់ខេត្តផ្សេងៗ និងការបង្កើនសមាជិក",
		achievements: ["100 សមាជិកសកម្ម", "3 ខេត្តអនុវត្ត"],
	},
	{
		year: "2023",
		title: "ការទទួលស្គាល់",
		title_en: "Recognition",
		description: "ការទទួលស្គាល់ពីរដ្ឋាភិបាល និងសង្គមស៊ីវិលសម្រាប់ការវេទិកា",
		achievements: ["រង្វាន់ជាតិ", "ការឯទ្ទួលស្គាល់"],
	},
	{
		year: "2024",
		title: "អនាគតថ្មី",
		title_en: "New Future",
		description:
			"ការបង្កើតគេហទំព័រថ្មី និងការពង្រីកសកម្មភាពទៅកាន់បច្ចេកវិទ្យាឌីជីថល",
		achievements: ["គេហទំព័រថ្មី", "ប្រព័ន្ធគ្រប់គ្រងឌីជីថល"],
	},
];

export default function AboutPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section - Enhanced Responsive */}
			<section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-khmer-gold/10 via-white to-khmer-red/10 overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />
				</div>

				<div className="container relative px-4 sm:px-6 lg:px-8">
					<AnimatedSection className="text-center max-w-5xl mx-auto">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-khmer-gold to-khmer-red rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
						>
							<Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
						</motion.div>

						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
							អំពី
							<span className="gradient-text"> Mettyerng</span>
						</h1>

						<p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
							ក្រុមអ្នកស្រឡាញ់សង្គម - ការកសាងសហគមន៍ដ៏រឹងមាំតាមរយៈការអប់រំ
							វប្បធម៌ និងការស្រឡាញ់
						</p>

						<div className="flex flex-wrap justify-center gap-2 sm:gap-4">
							<Badge
								variant="secondary"
								className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
							>
								បង្កើតក្នុងឆ្នាំ 2018
							</Badge>
							<Badge
								variant="secondary"
								className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
							>
								សមាជិក 150+ នាក់
							</Badge>
							<Badge
								variant="secondary"
								className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
							>
								គម្រោង 25+ គម្រោង
							</Badge>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Mission & Vision - Enhanced Responsive */}
			<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
				<div className="container px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
						<AnimatedSection direction="left">
							<Card className="p-6 sm:p-8 h-full border-l-4 border-l-khmer-gold">
								<CardContent className="p-0">
									<div className="mb-6">
										<Target className="w-10 h-10 sm:w-12 sm:h-12 text-khmer-gold mb-4" />
										<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
											បេសកកម្ម
											<span className="block text-lg sm:text-xl gradient-text mt-2">
												Our Mission
											</span>
										</h2>
									</div>
									<p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
										ដើម្បីកសាងសហគមន៍ខ្មែរដ៏រឹងមាំ
										និងរីកចម្រើនតាមរយៈការផ្តល់ការអប់រំគុណភាព
										ការអភិរក្សវប្បធម៌ប្រពៃណី
										និងការជួយគ្នាទៅវិញទៅមកក្នុងចិត្តស្រឡាញ់។
									</p>
									<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
										យើងធ្វើការដើម្បីលើកកម្ពស់ការរស់នៅរបស់ប្រជាជនកម្ពុជា
										និងជំរុញឱ្យយុវជនមានការសិក្សា និងតម្លៃដ៏ល្អប្រសើរ។
									</p>
								</CardContent>
							</Card>
						</AnimatedSection>

						<AnimatedSection direction="right">
							<Card className="p-6 sm:p-8 h-full border-l-4 border-l-khmer-red">
								<CardContent className="p-0">
									<div className="mb-6">
										<Eye className="w-10 h-10 sm:w-12 sm:h-12 text-khmer-red mb-4" />
										<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
											ទស្សនវិស័យ
											<span className="block text-lg sm:text-xl gradient-text mt-2">
												Our Vision
											</span>
										</h2>
									</div>
									<p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
										ក្លាយជាអង្គការកំពូលមួយក្នុងការកសាងសហគមន៍ខ្មែរដ៏រឹងមាំ
										ដែលមានការអប់រំល្អ វប្បធម៌ត្រូវបានអភិរក្ស
										និងសង្គមផ្តល់ការជួយគ្នាទៅវិញទៅមក។
									</p>
									<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
										យើងស្រមៃឃើញសហគមន៍មួយដែលកុមារទាំងអស់មានឱកាសទទួលការអប់រំ
										និងយុវជនមានការលើកទឹកចិត្តក្នុងការអភិរក្សវប្បធម៌ជាតិ។
									</p>
								</CardContent>
							</Card>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Values Section - Enhanced Responsive */}
			<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
				<div className="container px-4 sm:px-6 lg:px-8">
					<AnimatedSection className="text-center mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							តម្លៃរបស់យើង
							<span className="block text-xl sm:text-2xl md:text-3xl gradient-text mt-2">
								Our Values
							</span>
						</h2>
						<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
							តម្លៃដ៏សំខាន់ទាំងនេះនាំដំណើរការងាររបស់យើងក្នុងការកសាងសហគមន៍
						</p>
					</AnimatedSection>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{values.map((value, index) => (
							<AnimatedSection
								key={value.title}
								delay={index * 0.1}
								className="group"
							>
								<Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
									<CardContent className="p-4 sm:p-6">
										<div className="mb-4 sm:mb-6">
											<div
												className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
											>
												<value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
											</div>
											<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
												{value.title_en}
											</h3>
											<p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
												{value.title}
											</p>
										</div>
										<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
											{value.description}
										</p>
									</CardContent>
								</Card>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* Service Excellence Section - Enhanced Responsive */}
			<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
				<div className="container px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
						{/* Left Content */}
						<AnimatedSection direction="left">
							<div className="space-y-4 sm:space-y-6">
								<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
									ការបម្រើសេវាកម្មគុណភាព
									<span className="block text-lg sm:text-xl md:text-2xl gradient-text mt-2">
										Quality Service Excellence
									</span>
								</h2>

								<div className="prose prose-sm sm:prose-lg text-gray-600 space-y-3 sm:space-y-4">
									<p className="leading-relaxed text-sm sm:text-base">
										យើងប្តេជ្ញាចិត្តក្នុងការ សាងនិងការកាត់ និងលើកកម្ពស់ការអប់រំ
										វប្បធម៌ និងការស្រឡាញ់ និងការជួយគ្នាទៅវិញទៅមកក្នុងសហគមន៍
										ដូចជាការបណ្តុះបណ្តាលយុវជន និងការអភិវឌ្ឍន៍ បុគ្គលិកសាកល
										និងការបណ្តុះបណ្តាលជំនាញដែលទាក់ទង និងការបង្រៀន។
									</p>
								</div>

								<div className="space-y-3 sm:space-y-4">
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-khmer-gold rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
										<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
											ប្រមូលផ្តុំការបណ្តុះបណ្តាលមាន បុទ្ធមកេរ្ណណាបណ្តុះ
											អ្នកដឹកនាំសេវាកម្ម អ្នកដឹកនាំប្រតិបត្តិសេវាកម្ម
											និងអ្នកបណ្តុះបណ្តាលជំនាញជាក់ស្តែង និងការបង្រៀន
										</p>
									</div>

									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-khmer-gold rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
										<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
											អ្នកបណ្តាលកាន់ ចេកវិលបណ្តុះបណ្តាលសេវាកម្ម
											អំពីការនិងនិងការបណ្តុះបណ្តាលជាមួយ ប្រកបដោយបណ្តុះបណ្តាល
											បណ្តាល អស់សង្ឃឹម
										</p>
									</div>

									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-khmer-gold rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
										<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
											ស្នូលការការបណ្តុះបណ្តាលកម្មវិធីការកម្ម
											និងបុទ្ធមុខការសាកសម្បុណ្ណភាពជាអនាគតជាមួយ។
										</p>
									</div>
								</div>
							</div>
						</AnimatedSection>

						{/* Right Visual Element */}
						<AnimatedSection direction="right">
							<div className="relative mt-8 lg:mt-0">
								<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform rotate-2"></div>
								<Card className="relative bg-gradient-to-br from-khmer-gold/10 to-khmer-red/10 p-6 sm:p-8 rounded-2xl shadow-2xl">
									<CardContent className="p-0 text-center">
										<div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-khmer-gold to-khmer-red rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
											<Mic className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
										</div>
										<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
											វេទិកាអភិវឌ្ឍន៍សហគមន៍
										</h3>
										<p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
											ការចូលរួមក្នុងវេទិកាជាតិ ដើម្បីចែករំលែកបទពិសោធន៍
											និងយុទ្ធសាស្ត្រ
										</p>
										<div className="grid grid-cols-2 gap-3 sm:gap-4">
											<div className="text-center">
												<div className="text-xl sm:text-2xl font-bold text-khmer-gold">
													200+
												</div>
												<div className="text-xs sm:text-sm text-gray-600">
													អ្នកចូលរួម
												</div>
											</div>
											<div className="text-center">
												<div className="text-xl sm:text-2xl font-bold text-khmer-red">
													15
												</div>
												<div className="text-xs sm:text-sm text-gray-600">
													អង្គការ
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</AnimatedSection>
					</div>

					{/* Three Column Service Features - Enhanced Responsive */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
						<AnimatedSection delay={0.1}>
							<Card className="text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-blue-500">
								<CardContent className="p-0">
									<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
										<svg
											className="w-6 h-6 sm:w-8 sm:h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
										ចន្លោះ
									</h3>
									<div className="space-y-2 sm:space-y-3 text-gray-600">
										<p className="leading-relaxed text-sm sm:text-base">
											ការបម្រើសេវាកម្មសម្រាប់ ស្នូលបណ្តុះបណ្តាលបណ្តុះបណ្តាលជាមួយ
											និងការបណ្តុះបណ្តាលបណ្តុះបណ្តាលសាកល
										</p>
										<p className="leading-relaxed text-sm sm:text-base">
											ប្រកបដោយសម្រាប់ការបណ្តុះបណ្តាល
											អ្នកដឹកនាំការបណ្តុះបណ្តាលសម្រាប់ប្រជាជន ប្រជាជន
										</p>
									</div>
								</CardContent>
							</Card>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<Card className="text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-khmer-gold">
								<CardContent className="p-0">
									<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-khmer-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
										<svg
											className="w-6 h-6 sm:w-8 sm:h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
											/>
										</svg>
									</div>
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
										បេសកកម្ម
									</h3>
									<div className="space-y-2 sm:space-y-3 text-gray-600">
										<p className="leading-relaxed text-sm sm:text-base">
											ចង្អុលបង្ហាញបណ្តុះបណ្តាលជាមួយ បុទ្ធ
											សម្រាប់ជាមួយបណ្តុះបណ្តាលជាមួយសាកល ប្រកប interest group កាន
										</p>
										<p className="leading-relaxed text-sm sm:text-base">
											ចំណាប់អារម្មណ៍សាកលជាក្រុម និង
											ការប្រតិបត្តិសេវាជាមួយជំនាញសាកល
										</p>
									</div>
								</CardContent>
							</Card>
						</AnimatedSection>

						<AnimatedSection delay={0.3}>
							<Card className="text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-teal-500">
								<CardContent className="p-0">
									<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
										<svg
											className="w-6 h-6 sm:w-8 sm:h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
											/>
										</svg>
									</div>
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
										គុណភាព
									</h3>
									<div className="space-y-2 sm:space-y-3 text-gray-600">
										<div className="space-y-1 sm:space-y-2">
											<div className="flex items-center justify-center">
												<span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
												<span className="text-sm sm:text-base">ចិត្តកាន</span>
											</div>
											<div className="flex items-center justify-center">
												<span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
												<span className="text-sm sm:text-base">សម្រាប់កាន</span>
											</div>
											<div className="flex items-center justify-center">
												<span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
												<span className="text-sm sm:text-base">កម្រិតកាន</span>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Timeline Section - Enhanced Responsive */}
			<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
				<div className="container px-4 sm:px-6 lg:px-8">
					<AnimatedSection className="text-center mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							ដំណើរការរបស់យើង
							<span className="block text-xl sm:text-2xl md:text-3xl gradient-text mt-2">
								Our Journey
							</span>
						</h2>
						<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
							ស្នាមដានមួយចំនួននៃការលូតលាស់ និងសមិទ្ធផលរបស់យើងតាំងពីឆ្នាំ 2018
						</p>
					</AnimatedSection>

					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-khmer-gold via-khmer-red to-khmer-blue"></div>

						<div className="space-y-8 sm:space-y-12">
							{timeline.map((item, index) => (
								<AnimatedSection
									key={item.year}
									delay={index * 0.2}
									className={`flex items-center ${
										index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
									}`}
								>
									<div
										className={`w-full md:w-5/12 ${
											index % 2 === 0 ? "md:pr-6 lg:pr-8" : "md:pl-6 lg:pl-8"
										}`}
									>
										<Card className="p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ml-8 md:ml-0">
											<CardContent className="p-0">
												<div className="flex items-center mb-3 sm:mb-4">
													<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-khmer-gold to-khmer-red rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
														{item.year.slice(-2)}
													</div>
													<div className="ml-3 sm:ml-4">
														<h3 className="text-lg sm:text-xl font-bold text-gray-900">
															{item.title_en}
														</h3>
														<p className="text-xs sm:text-sm text-gray-500">
															{item.title}
														</p>
													</div>
												</div>

												<p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
													{item.description}
												</p>

												<div className="flex flex-wrap gap-1 sm:gap-2">
													{item.achievements.map((achievement, idx) => (
														<Badge
															key={idx}
															variant="secondary"
															className="text-xs"
														>
															{achievement}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</div>

									{/* Timeline dot */}
									<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-khmer-gold to-khmer-red rounded-full border-2 sm:border-4 border-white shadow-lg"></div>

									<div className="w-full md:w-5/12"></div>
								</AnimatedSection>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Team Section - Enhanced Responsive */}
			<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-khmer-gold/10 to-khmer-red/10">
				<div className="container px-4 sm:px-6 lg:px-8">
					<AnimatedSection className="text-center mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							ក្រុមការងារ
							<span className="block text-xl sm:text-2xl md:text-3xl gradient-text mt-2">
								Our Team
							</span>
						</h2>
						<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
							សមាជិកស្នូលដែលបានក្តាប់ក្តែងមិននេះនៅក្នុងការកសាងសហគមន៍
						</p>
					</AnimatedSection>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
						{[
							{
								name: "លោក មេត្តិយ",
								role: "ប្រធានក្រុម",
								image:
									"https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
							},
							{
								name: "អ្នកស្រី សុខា",
								role: "អនុប្រធាន",
								image:
									"https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
							},
							{
								name: "លោក ដារ៉ា",
								role: "លេខាធិការ",
								image:
									"https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
							},
							{
								name: "អ្នកស្រី ចាន់ដា",
								role: "ហិរញ្ញវត្ថុ",
								image:
									"https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400",
							},
						].map((member, index) => (
							<AnimatedSection key={member.name} delay={index * 0.1}>
								<Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
									<CardContent className="p-4 sm:p-6">
										<div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden">
											<img
												src={member.image || "/placeholder.svg"}
												alt={member.name}
												className="w-full h-full object-cover"
											/>
										</div>
										<h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
											{member.name}
										</h3>
										<p className="text-xs sm:text-sm text-khmer-gold font-medium">
											{member.role}
										</p>
									</CardContent>
								</Card>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
