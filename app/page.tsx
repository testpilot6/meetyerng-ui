"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Heart, Award, ArrowRight, Play } from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MetricCard } from "@/components/ui/metric-card";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
	{
		title: "សមាជិក Members",
		value: 150,
		suffix: "+",
		icon: Users,
		description: "សមាជិកសកម្មក្នុងក្រុម",
	},
	{
		title: "គម្រោង Projects",
		value: 25,
		suffix: "+",
		icon: Award,
		description: "គម្រោងបានអនុវត្តជោគជ័យ",
	},
	{
		title: "ការអប់រំ Education",
		value: 500,
		suffix: "+",
		icon: BookOpen,
		description: "កុមារ និងយុវជនបានទទួលការអប់រំ",
	},
	{
		title: "ការជួយប្រជាជន Aid",
		value: 1000,
		suffix: "+",
		icon: Heart,
		description: "គ្រួសារបានទទួលការជួយ",
	},
];

const features = [
	{
		title: "ការអប់រំ Education",
		description: "ការផ្តល់ការអប់រំគុណភាពដល់កុមារ និងយុវជនក្នុងសហគមន៍",
		image:
			"https://images.pexels.com/photos/5427652/pexels-photo-5427652.jpeg?auto=compress&cs=tinysrgb&w=800",
		link: "/about#education",
	},
	{
		title: "វប្បធម៌ Culture",
		description: "ការអភិរក្ស និងលើកកម្ពស់វប្បធម៌ប្រពៃណីខ្មែរ",
		image:
			"https://images.pexels.com/photos/8369686/pexels-photo-8369686.jpeg?auto=compress&cs=tinysrgb&w=800",
		link: "/about#culture",
	},
	{
		title: "សង្គម Social",
		description: "ការជួយប្រជាជនដែលមានស្ថានភាពពិបាក",
		image:
			"https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
		link: "/projects",
	},
];

export default function HomePage() {
	return (
		<>
			{/* Hero Section */}
			<HeroCarousel />

			{/* Stats Section */}
			<section className="section-padding bg-neutral-100">
				<div className="container">
					<AnimatedSection className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
							ជោគជ័យរបស់យើង
							<span className="block text-2xl md:text-3xl gradient-text mt-2">
								Our Achievements
							</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							តាមរយៈការខិតខំប្រឹងប្រែងរបស់អ្នកស្ម័គ្រចិត្ត
							យើងបានសម្រេចជោគជ័យនៅក្នុងវិស័យផ្សេងៗ
						</p>
					</AnimatedSection>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{stats.map((stat, index) => (
							<MetricCard key={stat.title} {...stat} delay={index * 0.1} />
						))}
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="section-padding bg-white">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<AnimatedSection direction="left">
							<div className="space-y-6">
								<h2 className="text-3xl md:text-4xl font-bold text-text-primary">
									បេសកកម្មរបស់យើង
									<span className="block text-2xl md:text-3xl gradient-text mt-2">
										Our Mission
									</span>
								</h2>

								<p className="text-lg text-gray-600 leading-relaxed">
									យើងជាក្រុមអ្នកស្រឡាញ់សង្គមដែលបានបង្កើតឡើងក្នុងគោលបំណង
									ជួយដល់សហគមន៍តាមរយៈការអប់រំ វប្បធម៌ និងការអភិវឌ្ឍន៍សង្គម។
								</p>

								<p className="text-lg text-gray-600 leading-relaxed">
									យើងជឿជាក់ថា ការអប់រំគឺជាមូលដ្ឋានសំខាន់បំផុតនៃការអភិវឌ្ឍន៍
									និងការសាងសង់អនាគតដ៏ភ្លឺស្វាងសម្រាប់កុមារ និងយុវជនកម្ពុជា។
								</p>

								<div className="flex flex-col sm:flex-row gap-4">
									<CTAButton href="/about" size="lg">
										Learn More
										<ArrowRight className="ml-2 w-5 h-5" />
									</CTAButton>

									<Button variant="outline" size="lg" asChild className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white">
										<a href="/contact" className="flex items-center">
											<Heart className="mr-2 w-5 h-5" />
											Join Our Mission
										</a>
									</Button>
								</div>
							</div>
						</AnimatedSection>

						<AnimatedSection direction="right">
							<div className="relative">
								<div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
									<img
										src="https://images.pexels.com/photos/6646851/pexels-photo-6646851.jpeg?auto=compress&cs=tinysrgb&w=800"
										alt="Community gathering"
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

									{/* Play button overlay */}
									<motion.button
										className="absolute inset-0 flex items-center justify-center group"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
											<Play className="w-6 h-6 text-primary-900 ml-1" />
										</div>
									</motion.button>
								</div>

								{/* Floating elements */}
								<motion.div
									className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400/20 rounded-full blur-2xl"
									animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
									transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
								/>

								<motion.div
									className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-600/20 rounded-full blur-2xl"
									animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
									transition={{
										duration: 10,
										repeat: Infinity,
										ease: "linear",
									}}
								/>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="section-padding bg-neutral-100">
				<div className="container">
					<AnimatedSection className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
							វិស័យសកម្មភាព
							<span className="block text-2xl md:text-3xl gradient-text mt-2">
								Our Focus Areas
							</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							យើងផ្តោតលើការកសាងសហគមន៍តាមរយៈវិស័យសំខាន់ៗទាំងនេះ
						</p>
					</AnimatedSection>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<AnimatedSection
								key={feature.title}
								delay={index * 0.2}
								className="group"
							>
								<Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white">
									<div className="aspect-video overflow-hidden">
										<img
											src={feature.image}
											alt={feature.title}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
									</div>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold text-text-primary mb-3 gradient-text">
											{feature.title}
										</h3>
										<p className="text-gray-600 leading-relaxed mb-4">
											{feature.description}
										</p>
										<Button
											variant="ghost"
											asChild
											className="p-0 h-auto text-primary-900 hover:text-accent-400"
										>
											<a
												href={feature.link}
												className="flex items-center group"
											>
												Learn More
												<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
											</a>
										</Button>
									</CardContent>
								</Card>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-accent-600 relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-black/40" />
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{
							backgroundImage:
								"url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)",
							mixBlendMode: "overlay",
						}}
					/>
				</div>

				<div className="container relative">
					<AnimatedSection className="text-center text-white">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
							ចូលរួមជាមួយយើង
							<span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-accent-400">
								Join Our Community
							</span>
						</h2>

						<p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
							ក្លាយជាផ្នែកមួយនៃការផ្លាស់ប្តូរវិជ្ជមាន
							ចូលរួមវិភាគទានក្នុងការកសាង់សហគមន៍ដ៏រឹងមាំ
						</p>

						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<CTAButton
								href="/contact"
								size="lg"
								className="bg-white text-primary-900 hover:bg-neutral-100 text-lg px-8 py-4"
							>
								<Heart className="mr-2 w-6 h-6" />
								Become a Volunteer
							</CTAButton>

							<CTAButton
								href="/projects"
								variant="outline"
								size="lg"
								className="border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4"
							>
								<Award className="mr-2 w-6 h-6" />
								View Our Projects
							</CTAButton>
						</div>
					</AnimatedSection>
				</div>

				{/* Floating particles */}
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-2 h-2 bg-white/30 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -20, 0],
							opacity: [0.3, 0.8, 0.3],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</section>
		</>
	);
}