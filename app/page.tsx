"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Heart, Award, ArrowRight, Play, Target, TrendingUp, Globe, Sparkles } from "lucide-react";
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
		color: "from-primary to-primary/80"
	},
	{
		title: "គម្រោង Projects",
		value: 25,
		suffix: "+",
		icon: Award,
		description: "គម្រោងបានអនុវត្តជោគជ័យ",
		color: "from-accent to-accent/80"
	},
	{
		title: "ការអប់រំ Education",
		value: 500,
		suffix: "+",
		icon: BookOpen,
		description: "កុមារ និងយុវជនបានទទួលការអប់រំ",
		color: "from-info to-info/80"
	},
	{
		title: "ការជួយប្រជាជន Aid",
		value: 1000,
		suffix: "+",
		icon: Heart,
		description: "គ្រួសារបានទទួលការជួយ",
		color: "from-success to-success/80"
	},
];

const features = [
	{
		title: "ការអប់រំ Education",
		description: "ការផ្តល់ការអប់រំគុណភាពដល់កុមារ និងយុវជនក្នុងសហគមន៍ តាមរយៈកម្មវិធីសិក្សាទំនើប និងការបណ្តុះបណ្តាលជំនាញ",
		image: "https://images.pexels.com/photos/5427652/pexels-photo-5427652.jpeg?auto=compress&cs=tinysrgb&w=800",
		link: "/about#education",
		icon: BookOpen,
		stats: { students: "200+", programs: "8", schools: "5" }
	},
	{
		title: "វប្បធម៌ Culture",
		description: "ការអភិរក្ស និងលើកកម្ពស់វប្បធម៌ប្រពៃណីខ្មែរ តាមរយៈការបង្រៀនរបាំ តន្ត្រី និងពិធីបុណ្យប្រពៃណី",
		image: "https://images.pexels.com/photos/8369686/pexels-photo-8369686.jpeg?auto=compress&cs=tinysrgb&w=800",
		link: "/about#culture",
		icon: Globe,
		stats: { events: "15+", participants: "300+", traditions: "10+" }
	},
	{
		title: "សង្គម Social",
		description: "ការជួយប្រជាជនដែលមានស្ថានភាពពិបាក តាមរយៈកម្មវិធីកាត់សក់ ការបរិច្ចាគអាហារ និងការជួសជុលលំនៅដ្ឋាន",
		image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
		link: "/projects",
		icon: Heart,
		stats: { families: "150+", volunteers: "50+", projects: "12+" }
	},
];

const impactAreas = [
	{
		icon: Target,
		title: "Community Development",
		title_km: "ការអភិវឌ្ឍន៍សហគមន៍",
		description: "Building stronger, more resilient communities through collaborative initiatives and sustainable programs.",
		metrics: "15 communities served"
	},
	{
		icon: TrendingUp,
		title: "Capacity Building",
		title_km: "ការកសាងសមត្ថភាព",
		description: "Empowering individuals and organizations with skills, knowledge, and resources for long-term success.",
		metrics: "500+ people trained"
	},
	{
		icon: Globe,
		title: "Cultural Preservation",
		title_km: "ការអភិរក្សវប្បធម៌",
		description: "Safeguarding and promoting Khmer heritage, traditions, and cultural practices for future generations.",
		metrics: "10+ cultural programs"
	}
];

export default function HomePage() {
	return (
		<>
			{/* Hero Section */}
			<HeroCarousel />

			{/* Stats Section */}
			<section className="section-padding section-neutral">
				<div className="container">
					<AnimatedSection className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6"
						>
							<Sparkles className="w-4 h-4 text-accent" />
							<span className="text-accent font-medium text-sm">Our Impact So Far</span>
						</motion.div>
						<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
							ជោគជ័យរបស់យើង
							<span className="block text-2xl md:text-3xl gradient-text mt-2">
								Our Achievements
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							តាមរយៈការខិតខំប្រឹងប្រែងរបស់អ្នកស្ម័គ្រចិត្ត យើងបានសម្រេចជោគជ័យនៅក្នុងវិស័យផ្សេងៗ
						</p>
					</AnimatedSection>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{stats.map((stat, index) => (
							<MetricCard key={stat.title} {...stat} delay={index * 0.1} />
						))}
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="section-padding section-white">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<AnimatedSection direction="left">
							<div className="space-y-6">
								<div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
									<Heart className="w-4 h-4 text-primary" />
									<span className="text-primary font-medium text-sm">Our Mission</span>
								</div>

								<h2 className="text-3xl md:text-4xl font-bold text-primary">
									បេសកកម្មរបស់យើង
									<span className="block text-2xl md:text-3xl gradient-text mt-2">
										Building Communities with Love
									</span>
								</h2>

								<div className="space-y-4">
									<p className="text-lg text-foreground leading-relaxed">
										យើងជាក្រុមអ្នកស្រឡាញ់សង្គមដែលបានបង្កើតឡើងក្នុងគោលបំណង ជួយដល់សហគមន៍តាមរយៈការអប់រំ វប្បធម៌ និងការអភិវឌ្ឍន៍សង្គម។
									</p>

									<p className="text-lg text-foreground leading-relaxed">
										យើងជឿជាក់ថា ការអប់រំគឺជាមូលដ្ឋានសំខាន់បំផុតនៃការអភិវឌ្ឍន៍ និងការសាងសង់អនាគតដ៏ភ្លឺស្វាងសម្រាប់កុមារ និងយុវជនកម្ពុជា។
									</p>
								</div>

								<div className="grid grid-cols-3 gap-4">
									{impactAreas.map((area, index) => (
										<motion.div
											key={index}
											className="text-center p-4 bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-border hover:shadow-soft transition-all duration-300"
											whileHover={{ scale: 1.05 }}
										>
											<div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mx-auto mb-2">
												<area.icon className="w-5 h-5 text-white" />
											</div>
											<h4 className="font-semibold text-primary text-sm mb-1">{area.title}</h4>
											<p className="text-xs text-muted-foreground">{area.metrics}</p>
										</motion.div>
									))}
								</div>

								<div className="flex flex-col sm:flex-row gap-4">
									<CTAButton href="/about" size="lg" className="bg-primary hover:bg-primary-600 text-white">
										Learn More About Us
										<ArrowRight className="ml-2 w-5 h-5" />
									</CTAButton>

									<Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
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
								<div className="aspect-video rounded-2xl overflow-hidden shadow-large">
									<img
										src="https://images.pexels.com/photos/6646851/pexels-photo-6646851.jpeg?auto=compress&cs=tinysrgb&w=800"
										alt="Community gathering"
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

									{/* Play button overlay */}
									<motion.button
										className="absolute inset-0 flex items-center justify-center group"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-large group-hover:shadow-glow transition-all duration-300">
											<Play className="w-6 h-6 text-primary ml-1" />
										</div>
									</motion.button>
								</div>

								{/* Floating stats */}
								<motion.div
									className="absolute -top-6 -right-6 bg-white rounded-xl shadow-large p-4 border border-border"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.5 }}
								>
									<div className="text-center">
										<div className="text-2xl font-bold text-accent">6+</div>
										<div className="text-sm text-muted-foreground">Years Active</div>
									</div>
								</motion.div>

								<motion.div
									className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-large p-4 border border-border"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.7 }}
								>
									<div className="text-center">
										<div className="text-2xl font-bold text-primary">100%</div>
										<div className="text-sm text-muted-foreground">Volunteer Driven</div>
									</div>
								</motion.div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="section-padding section-neutral">
				<div className="container">
					<AnimatedSection className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6"
						>
							<Target className="w-4 h-4 text-accent" />
							<span className="text-accent font-medium text-sm">Our Focus Areas</span>
						</motion.div>
						<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
							វិស័យសកម្មភាព
							<span className="block text-2xl md:text-3xl gradient-text mt-2">
								What We Do
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							យើងផ្តោតលើការកសាងសហគមន៍តាមរយៈវិស័យសំខាន់ៗទាំងនេះ
						</p>
					</AnimatedSection>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<AnimatedSection
								key={feature.title}
								delay={index * 0.2}
								className="group"
							>
								<Card className="h-full overflow-hidden card-elevated bg-white group-hover:shadow-glow transition-all duration-500">
									<div className="aspect-video overflow-hidden relative">
										<img
											src={feature.image}
											alt={feature.title}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
										<div className="absolute top-4 left-4">
											<div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
												<feature.icon className="w-5 h-5 text-primary" />
											</div>
										</div>
										<div className="absolute bottom-4 left-4 right-4">
											<div className="grid grid-cols-3 gap-2">
												{Object.entries(feature.stats).map(([key, value]) => (
													<div key={key} className="text-center">
														<div className="text-white font-bold text-sm">{value}</div>
														<div className="text-white/80 text-xs capitalize">{key}</div>
													</div>
												))}
											</div>
										</div>
									</div>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold text-primary mb-3 gradient-text">
											{feature.title}
										</h3>
										<p className="text-foreground leading-relaxed mb-4">
											{feature.description}
										</p>
										<Button
											variant="ghost"
											asChild
											className="p-0 h-auto text-primary hover:text-accent group/btn"
										>
											<a
												href={feature.link}
												className="flex items-center"
											>
												Learn More
												<ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
			<section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-accent/20 relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-black/20" />
					<div
						className="absolute inset-0 bg-cover bg-center opacity-10"
						style={{
							backgroundImage:
								"url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)",
						}}
					/>
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
					<motion.div
						className="absolute bottom-1/4 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
						animate={{ 
							y: [0, 20, 0],
							x: [0, 15, 0],
							scale: [1, 0.8, 1]
						}}
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 1
						}}
					/>
				</div>

				<div className="container relative">
					<AnimatedSection className="text-center text-white">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
						>
							<Heart className="w-4 h-4 text-accent" />
							<span className="text-white/90 font-medium text-sm">Join Our Community</span>
						</motion.div>

						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
							ចូលរួមជាមួយយើង
							<span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-accent">
								Be Part of the Change
							</span>
						</h2>

						<p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
							ក្លាយជាផ្នែកមួយនៃការផ្លាស់ប្តូរវិជ្ជមាន ចូលរួមក្នុងការកសាងសហគមន៍ដ៏រឹងមាំ
						</p>

						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<CTAButton
								href="/contact"
								size="lg"
								className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white border-0 shadow-glow text-lg px-8 py-4"
							>
								<Heart className="mr-2 w-6 h-6" />
								Become a Volunteer
							</CTAButton>

							<CTAButton
								href="/projects"
								variant="outline"
								size="lg"
								className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
							>
								<Award className="mr-2 w-6 h-6" />
								View Our Projects
							</CTAButton>
						</div>

						{/* Trust indicators */}
						<motion.div
							className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							{[
								{ label: "Years of Service", value: "6+" },
								{ label: "Active Volunteers", value: "150+" },
								{ label: "Communities Served", value: "15+" },
								{ label: "Success Rate", value: "100%" }
							].map((item, index) => (
								<div key={index} className="text-center">
									<div className="text-2xl font-bold text-accent mb-1">{item.value}</div>
									<div className="text-white/80 text-sm">{item.label}</div>
								</div>
							))}
						</motion.div>
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