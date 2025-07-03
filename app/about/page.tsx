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
	Sparkles,
	Calendar,
	TrendingUp,
	Shield
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const values = [
	{
		icon: Heart,
		title: "ការស្រឡាញ់",
		title_en: "Love & Compassion",
		description: "យើងជឿជាក់ថាការស្រឡាញ់និងការខ្វល់ខ្វាយគ្នាទៅវិញទៅមកគឺជាមូលដ្ឋានសំខាន់នៃការកសាងសហគមន៍ដ៏រឹងមាំ",
		color: "from-error to-error/80",
	},
	{
		icon: BookOpen,
		title: "ការអប់រំ",
		title_en: "Education",
		description: "ការអប់រំគឺជាមូលដ្ឋានសំខាន់បំផុតនៃការអភិវឌ្ឍន៍ និងការសាងសង់អនាគតដ៏ភ្លឺស្វាង",
		color: "from-info to-info/80",
	},
	{
		icon: Globe,
		title: "វប្បធម៌",
		title_en: "Culture",
		description: "ការអភិរក្ស និងលើកកម្ពស់វប្បធម៌ប្រពៃណីខ្មែរដ៏រុងរឿងដល់កុលបុត្រអនាគត",
		color: "from-success to-success/80",
	},
	{
		icon: Users,
		title: "ការរួបរួម",
		title_en: "Unity",
		description: "ការរួបរួមគ្នាក្នុងការកសាងសហគមន៍ និងការជួយគ្នាទៅវិញទៅមក",
		color: "from-primary to-primary/80",
	},
	{
		icon: Lightbulb,
		title: "ភាពច្នៃប្រឌិត",
		title_en: "Innovation",
		description: "ការផ្តួចផ្តើមគំនិតថ្មីៗ និងការគិតច្នៃប្រឌិតក្នុងការដោះស្រាយបញ្ហាសង្គម",
		color: "from-accent to-accent/80",
	},
	{
		icon: Award,
		title: "ការទទួលខុសត្រូវ",
		title_en: "Responsibility",
		description: "ការទទួលខុសត្រូវចំពោះសហគមន៍ និងការធ្វើការងារដោយស្មោះត្រង់",
		color: "from-warning to-warning/80",
	},
];

const timeline = [
	{
		year: "2018",
		title: "ការបង្កើតក្រុម",
		title_en: "Organization Founded",
		description: "ការបង្កើតក្រុម Mettyerng ដោយសមាជិកស្ម័គ្រចិត្តចំនួន ១០ នាក់",
		achievements: ["10 សមាជិកចំនួនដើម", "ការបង្កើតគម្រោងដំបូង"],
		icon: Users,
		color: "from-primary to-primary/80"
	},
	{
		year: "2019",
		title: "ការអប់រំ",
		title_en: "Education Initiative",
		description: "ការចាប់ផ្តើមគម្រោងផ្តល់ការអប់រំដល់កុមារនៅតាមទីជនបទ",
		achievements: ["50 កុមារទទួលការអប់រំ", "5 ថ្នាក់រៀនដំបូង"],
		icon: BookOpen,
		color: "from-info to-info/80"
	},
	{
		year: "2020",
		title: "ជំនួយកូវីដ",
		title_en: "COVID-19 Relief",
		description: "ការផ្តល់ជំនួយអាហារ និងវេជ្ជសាស្ត្រក្នុងកំឡុងជំងឺកូវីដ-១៩",
		achievements: ["500 គ្រួសារបានជំនួយ", "បេរ័ត្នវេជ្ជសាស្ត្រ"],
		icon: Shield,
		color: "from-success to-success/80"
	},
	{
		year: "2021",
		title: "គម្រោងកាត់សក់",
		title_en: "Haircut Project",
		description: "ការចាប់ផ្តើមគម្រោងកាត់សក់ដោយមិនគិតថ្លៃសម្រាប់ប្រជាជន",
		achievements: ["200 នាក់បានកាត់សក់", "ការសេវាប្រចាំខែ"],
		icon: Heart,
		color: "from-error to-error/80"
	},
	{
		year: "2022",
		title: "ការរីកចម្រើន",
		title_en: "Expansion",
		description: "ការពង្រីកសកម្មភាពទៅកាន់ខេត្តផ្សេងៗ និងការបង្កើនសមាជិក",
		achievements: ["100 សមាជិកសកម្ម", "3 ខេត្តអនុវត្ត"],
		icon: TrendingUp,
		color: "from-accent to-accent/80"
	},
	{
		year: "2023",
		title: "ការទទួលស្គាល់",
		title_en: "Recognition",
		description: "ការទទួលស្គាល់ពីរដ្ឋាភិបាល និងសង្គមស៊ីវិលសម្រាប់ការវេទិកា",
		achievements: ["រង្វាន់ជាតិ", "ការឯទ្ទួលស្គាល់"],
		icon: Award,
		color: "from-warning to-warning/80"
	},
	{
		year: "2024",
		title: "អនាគតថ្មី",
		title_en: "New Future",
		description: "ការបង្កើតគេហទំព័រថ្មី និងការពង្រីកសកម្មភាពទៅកាន់បច្ចេកវិទ្យាឌីជីថល",
		achievements: ["គេហទំព័រថ្មី", "ប្រព័ន្ធគ្រប់គ្រងឌីជីថល"],
		icon: Globe,
		color: "from-primary to-primary/80"
	},
];

export default function AboutPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative py-24 bg-gradient-to-br from-primary/10 via-white to-accent/10 overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />
				</div>

				{/* Animated Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<motion.div
						className="absolute top-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
						animate={{ 
							y: [0, -30, 0],
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.6, 0.3]
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					/>
				</div>

				<div className="container relative">
					<AnimatedSection className="text-center max-w-5xl mx-auto">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
						>
							<Sparkles className="w-4 h-4 text-primary" />
							<span className="text-primary font-medium text-sm">About Our Organization</span>
						</motion.div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
							អំពី
							<span className="gradient-text"> Mettyerng</span>
						</h1>

						<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
							ក្រុមអ្នកស្រឡាញ់សង្គម - ការកសាងសហគមន៍ដ៏រឹងមាំតាមរយៈការអប់រំ វប្បធម៌ និងការស្រឡាញ់
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							<Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
								បង្កើតក្នុងឆ្នាំ 2018
							</Badge>
							<Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
								សមាជិក 150+ នាក់
							</Badge>
							<Badge variant="secondary" className="bg-success/10 text-success border-success/20">
								គម្រោង 25+ គម្រោង
							</Badge>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="section-padding section-white">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<AnimatedSection direction="left">
							<Card className="card-elevated h-full border-l-4 border-l-primary">
								<CardContent className="p-8">
									<div className="mb-6">
										<div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
											<Target className="w-6 h-6 text-white" />
										</div>
										<h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
											បេសកកម្ម
											<span className="block text-lg gradient-text mt-2">
												Our Mission
											</span>
										</h2>
									</div>
									<div className="space-y-4">
										<p className="text-foreground leading-relaxed">
											ដើម្បីកសាងសហគមន៍ខ្មែរដ៏រឹងមាំ និងរីកចម្រើនតាមរយៈការផ្តល់ការអប់រំគុណភាព ការអភិរក្សវប្បធម៌ប្រពៃណី និងការជួយគ្នាទៅវិញទៅមកក្នុងចិត្តស្រឡាញ់។
										</p>
										<p className="text-foreground leading-relaxed">
											យើងធ្វើការដើម្បីលើកកម្ពស់ការរស់នៅរបស់ប្រជាជនកម្ពុជា និងជំរុញឱ្យយុវជនមានការសិក្សា និងតម្លៃដ៏ល្អប្រសើរ។
										</p>
									</div>
								</CardContent>
							</Card>
						</AnimatedSection>

						<AnimatedSection direction="right">
							<Card className="card-elevated h-full border-l-4 border-l-accent">
								<CardContent className="p-8">
									<div className="mb-6">
										<div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-4">
											<Eye className="w-6 h-6 text-white" />
										</div>
										<h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
											ទស្សនវិស័យ
											<span className="block text-lg gradient-text mt-2">
												Our Vision
											</span>
										</h2>
									</div>
									<div className="space-y-4">
										<p className="text-foreground leading-relaxed">
											ក្លាយជាអង្គការកំពូលមួយក្នុងការកសាងសហគមន៍ខ្មែរដ៏រឹងមាំ ដែលមានការអប់រំល្អ វប្បធម៌ត្រូវបានអភិរក្ស និងសង្គមផ្តល់ការជួយគ្នាទៅវិញទៅមក។
										</p>
										<p className="text-foreground leading-relaxed">
											យើងស្រមៃឃើញសហគមន៍មួយដែលកុមារទាំងអស់មានឱកាសទទួលការអប់រំ និងយុវជនមានការលើកទឹកចិត្តក្នុងការអភិរក្សវប្បធម៌ជាតិ។
										</p>
									</div>
								</CardContent>
							</Card>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="section-padding section-neutral">
				<div className="container">
					<AnimatedSection className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6"
						>
							<Heart className="w-4 h-4 text-accent" />
							<span className="text-accent font-medium text-sm">Our Core Values</span>
						</motion.div>
						<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
							តម្លៃរបស់យើង
							<span className="block text-2xl md:text-3xl gradient-text mt-2">
								What Drives Us
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							តម្លៃដ៏សំខាន់ទាំងនេះនាំដំណើរការងាររបស់យើងក្នុងការកសាងសហគមន៍
						</p>
					</AnimatedSection>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{values.map((value, index) => (
							<AnimatedSection
								key={value.title}
								delay={index * 0.1}
								className="group"
							>
								<Card className="h-full card-elevated group-hover:shadow-glow transition-all duration-500">
									<CardContent className="p-6">
										<div className="mb-6">
											<div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
												<value.icon className="w-8 h-8 text-white" />
											</div>
											<h3 className="text-xl font-bold text-primary mb-2">
												{value.title_en}
											</h3>
											<p className="text-sm text-muted-foreground mb-4">
												{value.title}
											</p>
										</div>
										<p className="text-foreground leading-relaxed">
											{value.description}
										</p>
									</CardContent>
								</Card>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* Timeline Section */}
			<section className="section-padding section-white">
				<div className="container">
					<AnimatedSection className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
						>
							<Calendar className="w-4 h-4 text-primary" />
							<span className="text-primary font-medium text-sm">Our Journey</span>
						</motion.div>
						<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
							ដំណើរការរបស់យើង
							<span className="block text-2xl md:text-3xl gradient-text mt-2">
								Our Growth Story
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							ស្នាមដានមួយចំនួននៃការលូតលាស់ និងសមិទ្ធផលរបស់យើងតាំងពីឆ្នាំ 2018
						</p>
					</AnimatedSection>

					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-success rounded-full"></div>

						<div className="space-y-12">
							{timeline.map((item, index) => (
								<AnimatedSection
									key={item.year}
									delay={index * 0.2}
									className={`flex items-center ${
										index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
									}`}
								>
									<div className={`w-full md:w-5/12 ${
										index % 2 === 0 ? "md:pr-8" : "md:pl-8"
									}`}>
										<Card className="card-elevated hover:shadow-glow transition-all duration-300 ml-12 md:ml-0">
											<CardContent className="p-6">
												<div className="flex items-center mb-4">
													<div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-soft mr-4`}>
														<item.icon className="w-6 h-6" />
													</div>
													<div>
														<h3 className="text-xl font-bold text-primary">
															{item.title_en}
														</h3>
														<p className="text-sm text-muted-foreground">
															{item.title}
														</p>
													</div>
												</div>

												<p className="text-foreground leading-relaxed mb-4">
													{item.description}
												</p>

												<div className="flex flex-wrap gap-2">
													{item.achievements.map((achievement, idx) => (
														<Badge
															key={idx}
															variant="secondary"
															className="text-xs bg-accent/10 text-accent border-accent/20"
														>
															{achievement}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</div>

									{/* Timeline dot */}
									<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-white shadow-medium"></div>

									<div className="w-full md:w-5/12"></div>
								</AnimatedSection>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
				<div className="container">
					<AnimatedSection className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6"
						>
							<Users className="w-4 h-4 text-accent" />
							<span className="text-accent font-medium text-sm">Our Leadership</span>
						</motion.div>
						<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
							ក្រុមការងារ
							<span className="block text-2xl md:text-3xl gradient-text mt-2">
								Meet Our Team
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							សមាជិកស្នូលដែលបានក្តាប់ក្តែងមិននេះនៅក្នុងការកសាងសហគមន៍
						</p>
					</AnimatedSection>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								name: "លោក មេត្តិយ",
								name_en: "Mr. Met Metri",
								role: "ប្រធានក្រុម",
								role_en: "Chairman",
								image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
								color: "from-primary to-primary/80"
							},
							{
								name: "អ្នកស្រី សុខា",
								name_en: "Ms. Chan Sokha",
								role: "អនុប្រធាន",
								role_en: "Vice Chairman",
								image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
								color: "from-accent to-accent/80"
							},
							{
								name: "លោក ដារ៉ា",
								name_en: "Mr. Dara",
								role: "លេខាធិការ",
								role_en: "Secretary",
								image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
								color: "from-success to-success/80"
							},
							{
								name: "អ្នកស្រី ចាន់ដា",
								name_en: "Ms. Chanda",
								role: "ហិរញ្ញវត្ថុ",
								role_en: "Treasurer",
								image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400",
								color: "from-info to-info/80"
							},
						].map((member, index) => (
							<AnimatedSection key={member.name} delay={index * 0.1}>
								<Card className="text-center card-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group">
									<CardContent className="p-6">
										<div className="relative mb-4">
											<div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-medium">
												<img
													src={member.image}
													alt={member.name}
													className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
												/>
											</div>
											<div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br ${member.color} rounded-full border-2 border-white shadow-soft`} />
										</div>
										<h3 className="text-lg font-bold text-primary mb-1">
											{member.name_en}
										</h3>
										<p className="text-sm text-muted-foreground mb-2">{member.name}</p>
										<Badge className={`bg-gradient-to-r ${member.color} text-white text-xs`}>
											{member.role_en}
										</Badge>
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