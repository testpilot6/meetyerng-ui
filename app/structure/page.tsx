"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Users,
	Crown,
	Shield,
	BookOpen,
	Palette,
	ChevronDown,
	Mail,
	Phone,
	MapPin,
	Calendar,
	Award,
	Search,
	Filter,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const organizationStructure = [
	{
		id: "executive",
		title: "គណៈកម្មការប្រតិបត្តិ",
		title_en: "Executive Committee",
		icon: Crown,
		color: "from-amber-500 to-orange-500",
		bgColor: "bg-amber-50",
		description: "ក្រុមដឹកនាំគ្រប់គ្រងទូទាំងអង្គការ និងកំណត់ទិសដៅយុទ្ធសាស្ត្រ",
		members: [
			{
				name: "លោក ម៉ែត ម៉េត្រី",
				name_en: "Mr. Met Metri",
				position: "ប្រធានក្រុម",
				position_en: "Chairman",
				bio: "មានបទពិសោធន៍ជាង 10 ឆ្នាំក្នុងការដឹកនាំអង្គការសង្គម និងការអភិវឌ្ឍន៍សហគមន៍",
				email: "chairman@mettyerng.org",
				phone: "+855 12 345 678",
				location: "ភ្នំពេញ",
				joinDate: "2018",
				image:
					"https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
			},
			{
				name: "អ្នកស្រី ឆាន់ សុខា",
				name_en: "Ms. Chan Sokha",
				position: "អនុប្រធាន",
				position_en: "Vice Chairman",
				bio: "ជំនាញខាងការរៀបចំ និងការសម្របសម្រួលកម្មវិធី មានបទពិសោធន៍ 8 ឆ្នាំ",
				email: "vicechairman@mettyerng.org",
				phone: "+855 12 345 679",
				location: "ភ្នំពេញ",
				joinDate: "2019",
				image:
					"https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
			},
			{
				name: "លោក ឈាន ដារ៉ា",
				name_en: "Mr. Chan Dara",
				position: "លេខាធិការ",
				position_en: "Secretary General",
				bio: "ជំនាញខាងការរៀបចំឯកសារ និងការសម្របសម្រួល មានបទពិសោធន៍ 6 ឆ្នាំ",
				email: "secretary@mettyerng.org",
				phone: "+855 12 345 680",
				location: "ភ្នំពេញ",
				joinDate: "2020",
				image:
					"https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
			},
		],
	},
	{
		id: "advisory",
		title: "គណៈកម្មការប្រឹក្សា",
		title_en: "Advisory Committee",
		icon: Shield,
		color: "from-red-500 to-pink-500",
		bgColor: "bg-red-50",
		description:
			"ផ្តល់ការណែនាំ និងការគាំទ្រយុទ្ធសាស្ត្រ ដើម្បីអភិវឌ្ឍន៍អង្គការ",
		members: [
			{
				name: "លោក ស៊ុន ពេជ្រ",
				name_en: "Mr. Sun Pech",
				position: "ប្រធានប្រឹក្សា",
				position_en: "Chief Advisor",
				bio: "អតីតមន្ត្រីពាក់ព័ន្ធការអប់រំ មានបទពិសោធន៍ច្រើនជាង 15 ឆ្នាំ",
				email: "advisor@mettyerng.org",
				phone: "+855 12 345 681",
				location: "ភ្នំពេញ",
				joinDate: "2018",
				image:
					"https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400",
			},
			{
				name: "អ្នកស្រី ពេជ្រ មាលា",
				name_en: "Ms. Pech Mala",
				position: "ប្រឹក្សាការអប់រំ",
				position_en: "Education Advisor",
				bio: "ជំនាញខាងការអប់រំ និងការអភិវឌ្ឍកុមារ មានបទពិសោធន៍ 12 ឆ្នាំ",
				email: "education.advisor@mettyerng.org",
				phone: "+855 12 345 682",
				location: "សៀមរាប",
				joinDate: "2019",
				image:
					"https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=400",
			},
		],
	},
	{
		id: "education",
		title: "ផ្នែកការអប់រំ",
		title_en: "Education Department",
		icon: BookOpen,
		color: "from-blue-500 to-indigo-500",
		bgColor: "bg-blue-50",
		description:
			"ទទួលបន្ទុកគម្រោងអប់រំ និងការបណ្តុះបណ្តាល សម្រាប់កុមារ និងយុវជន",
		members: [
			{
				name: "អ្នកស្រី គិម សុផល",
				name_en: "Ms. Kim Sophol",
				position: "ប្រធានផ្នែកការអប់រំ",
				position_en: "Education Director",
				bio: "មានបទពិសោធន៍ 8 ឆ្នាំក្នុងការបង្រៀន និងការអភិវឌ្ឍកម្មវិធីសិក្សា",
				email: "education@mettyerng.org",
				phone: "+855 12 345 683",
				location: "ភ្នំពេញ",
				joinDate: "2020",
				image:
					"https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=400",
			},
			{
				name: "លោក ណូ សុវណ្ណ",
				name_en: "Mr. Nou Sovann",
				position: "គ្រូបង្រៀន",
				position_en: "Senior Teacher",
				bio: "ជំនាញខាងការបង្រៀនភាសាខ្មែរ និងគណិតវិទ្យា មានបទពិសោធន៍ 5 ឆ្នាំ",
				email: "teacher@mettyerng.org",
				phone: "+855 12 345 684",
				location: "កំពត",
				joinDate: "2021",
				image:
					"https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=400",
			},
		],
	},
	{
		id: "culture",
		title: "ផ្នែកវប្បធម៌",
		title_en: "Culture Department",
		icon: Palette,
		color: "from-green-500 to-emerald-500",
		bgColor: "bg-green-50",
		description: "ទទួលបន្ទុកការអភិរក្ស និងលើកកម្ពស់វប្បធម៌ប្រពៃណីខ្មែរ",
		members: [
			{
				name: "លោក ខៀវ ផាណា",
				name_en: "Mr. Khiev Phanna",
				position: "ប្រធានផ្នែកវប្បធម៌",
				position_en: "Culture Director",
				bio: "ជំនាញខាងរបាំប្រពៃណីខ្មែរ និងតន្ត្រីប្រពៃណី មានបទពិសោធន៍ 10 ឆ្នាំ",
				email: "culture@mettyerng.org",
				phone: "+855 12 345 685",
				location: "សៀមរាប",
				joinDate: "2019",
				image:
					"https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg?auto=compress&cs=tinysrgb&w=400",
			},
			{
				name: "អ្នកស្រី ហៀង ចាន់ថី",
				name_en: "Ms. Heng Chanthy",
				position: "គ្រូរបាំ",
				position_en: "Dance Instructor",
				bio: "ជំនាញខាងរបាំអប្សរា និងរបាំកំសាន្ត មានបទពិសោធន៍ 7 ឆ្នាំ",
				email: "dance@mettyerng.org",
				phone: "+855 12 345 686",
				location: "ភ្នំពេញ",
				joinDate: "2020",
				image:
					"https://images.pexels.com/photos/3184346/pexels-photo-3184346.jpeg?auto=compress&cs=tinysrgb&w=400",
			},
		],
	},
];

export default function StructurePage() {
	const [expandedSections, setExpandedSections] = useState<string[]>([
		"executive",
	]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

	const toggleSection = (sectionId: string) => {
		setExpandedSections((prev) =>
			prev.includes(sectionId)
				? prev.filter((id) => id !== sectionId)
				: [...prev, sectionId]
		);
	};

	const filteredStructure = organizationStructure.filter((section) => {
		if (selectedDepartment !== "all" && section.id !== selectedDepartment)
			return false;
		if (searchTerm) {
			return (
				section.title_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
				section.members.some(
					(member) =>
						member.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
						member.position_en.toLowerCase().includes(searchTerm.toLowerCase())
				)
			);
		}
		return true;
	});

	const totalMembers = organizationStructure.reduce(
		(total, section) => total + section.members.length,
		0
	);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
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
							រចនាសម្ព័ន្ធ
							<span className="gradient-text"> អង្គការ</span>
						</h1>

						<p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
							ស្វែងយល់ពីរចនាសម្ព័ន្ធអង្គការ និងក្រុមការងាររបស់យើង
						</p>

						{/* Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-khmer-gold">
									{organizationStructure.length}
								</div>
								<div className="text-sm sm:text-base text-gray-600">ផ្នែក</div>
							</div>
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-khmer-red">
									{totalMembers}
								</div>
								<div className="text-sm sm:text-base text-gray-600">សមាជិក</div>
							</div>
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-blue-600">
									6
								</div>
								<div className="text-sm sm:text-base text-gray-600">ឆ្នាំ</div>
							</div>
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-green-600">
									25+
								</div>
								<div className="text-sm sm:text-base text-gray-600">គម្រោង</div>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Search and Filter Section */}
			<section className="py-8 sm:py-12 bg-white border-b">
				<div className="container px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
							<Input
								placeholder="ស្វែងរកសមាជិក ឬតួនាទី..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-10"
							/>
						</div>
						<div className="relative">
							<Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
							<select
								value={selectedDepartment}
								onChange={(e) => setSelectedDepartment(e.target.value)}
								className="pl-10 pr-8 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-khmer-gold focus:border-transparent"
							>
								<option value="all">ផ្នែកទាំងអស់</option>
								{organizationStructure.map((section) => (
									<option key={section.id} value={section.id}>
										{section.title_en}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</section>

			{/* Organization Chart */}
			<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
				<div className="container px-4 sm:px-6 lg:px-8">
					<AnimatedSection className="text-center mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							តារាងរចនាសម្ព័ន្ធ
							<span className="block text-xl sm:text-2xl md:text-3xl gradient-text mt-2">
								Organization Chart
							</span>
						</h2>
					</AnimatedSection>

					<div className="space-y-6 sm:space-y-8">
						<AnimatePresence>
							{filteredStructure.map((section, index) => (
								<motion.div
									key={section.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
										<motion.div
											className="cursor-pointer"
											onClick={() => toggleSection(section.id)}
											whileHover={{ scale: 1.01 }}
											whileTap={{ scale: 0.99 }}
										>
											<CardHeader
												className={`${section.bgColor} hover:opacity-80 transition-opacity duration-200`}
											>
												<div className="flex items-center justify-between">
													<div className="flex items-center space-x-4 sm:space-x-6">
														<div
															className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center shadow-lg`}
														>
															<section.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
														</div>
														<div>
															<CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
																{section.title_en}
															</CardTitle>
															<p className="text-sm sm:text-base text-gray-600 mt-1">
																{section.title}
															</p>
														</div>
													</div>
													<div className="flex items-center space-x-3">
														<Badge
															variant="secondary"
															className="hidden sm:flex"
														>
															{section.members.length} សមាជិក
														</Badge>
														<motion.div
															animate={{
																rotate: expandedSections.includes(section.id)
																	? 180
																	: 0,
															}}
															transition={{ duration: 0.3 }}
														>
															<ChevronDown className="w-5 h-5 text-gray-400" />
														</motion.div>
													</div>
												</div>
												<p className="text-gray-700 text-left mt-3 sm:mt-4 leading-relaxed">
													{section.description}
												</p>
											</CardHeader>
										</motion.div>

										<AnimatePresence>
											{expandedSections.includes(section.id) && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: "auto", opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.3, ease: "easeInOut" }}
												>
													<CardContent className="p-4 sm:p-6 bg-white">
														<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
															{section.members.map((member, memberIndex) => (
																<motion.div
																	key={member.name}
																	initial={{ opacity: 0, y: 20 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{
																		duration: 0.5,
																		delay: memberIndex * 0.1,
																	}}
																>
																	<Card className="h-full hover:shadow-lg transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-khmer-gold">
																		<CardContent className="p-4 sm:p-6">
																			<div className="flex items-start space-x-4">
																				<Avatar className="w-16 h-16 sm:w-20 sm:h-20 ring-2 ring-gray-100 group-hover:ring-khmer-gold transition-all duration-300">
																					<AvatarImage
																						src={
																							member.image || "/placeholder.svg"
																						}
																						alt={member.name}
																					/>
																					<AvatarFallback className="bg-gradient-to-br from-khmer-gold to-khmer-red text-white font-bold">
																						{member.name_en
																							.split(" ")
																							.map((n) => n[0])
																							.join("")}
																					</AvatarFallback>
																				</Avatar>
																				<div className="flex-1 min-w-0">
																					<h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
																						{member.name_en}
																					</h3>
																					<p className="text-sm text-gray-600 mb-2">
																						{member.name}
																					</p>
																					<Badge
																						variant="secondary"
																						className="bg-gradient-to-r from-khmer-gold/10 to-khmer-red/10 text-khmer-gold border-khmer-gold/20 mb-3"
																					>
																						{member.position_en}
																					</Badge>
																					<p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
																						{member.bio}
																					</p>

																					{/* Contact Info */}
																					<div className="space-y-2">
																						<div className="flex items-center space-x-2 text-xs sm:text-sm">
																							<Mail className="w-3 h-3 text-gray-400 flex-shrink-0" />
																							<a
																								href={`mailto:${member.email}`}
																								className="text-gray-600 hover:text-khmer-gold transition-colors truncate"
																							>
																								{member.email}
																							</a>
																						</div>
																						<div className="flex items-center space-x-2 text-xs sm:text-sm">
																							<Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
																							<a
																								href={`tel:${member.phone}`}
																								className="text-gray-600 hover:text-khmer-gold transition-colors"
																							>
																								{member.phone}
																							</a>
																						</div>
																						<div className="flex items-center space-x-2 text-xs sm:text-sm">
																							<MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
																							<span className="text-gray-600">
																								{member.location}
																							</span>
																						</div>
																						<div className="flex items-center space-x-2 text-xs sm:text-sm">
																							<Calendar className="w-3 h-3 text-gray-400 flex-shrink-0" />
																							<span className="text-gray-600">
																								ចូលរួមពី {member.joinDate}
																							</span>
																						</div>
																					</div>
																				</div>
																			</div>
																		</CardContent>
																	</Card>
																</motion.div>
															))}
														</div>
													</CardContent>
												</motion.div>
											)}
										</AnimatePresence>
									</Card>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>
			</section>

			{/* Join Us Section */}
			<section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-khmer-gold via-khmer-red to-khmer-blue relative overflow-hidden">
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

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
					<AnimatedSection className="text-center text-white">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
						>
							<Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
						</motion.div>

						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
							ចូលរួមជាមួយយើង
							<span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-khmer-gold">
								Join Our Team
							</span>
						</h2>
						<p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
							ក្លាយជាផ្នែកមួយនៃក្រុមការងារដ៏រឹងមាំរបស់យើង និងចូលរួមកសាងសហគមន៍
						</p>
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
							<Button
								size="lg"
								asChild
								className="bg-white text-khmer-gold hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
							>
								<a href="/contact" className="flex items-center justify-center">
									<Users className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
									ចូលរួមជាស្ម័គ្រចិត្ត
								</a>
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
								className="border-white text-white hover:bg-white hover:text-khmer-gold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-transparent"
							>
								<a href="/about" className="flex items-center justify-center">
									<BookOpen className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
									អំពីយើង
								</a>
							</Button>
						</div>
					</AnimatedSection>
				</div>

				{/* Floating particles */}
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						className="hidden sm:block absolute w-2 h-2 bg-white/30 rounded-full"
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
							repeat: Number.POSITIVE_INFINITY,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</section>
		</div>
	);
}
