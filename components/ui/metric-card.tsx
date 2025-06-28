"use client";

import React from "react";
import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
	title: string;
	value: number;
	suffix?: string;
	icon: typeof LucideIcon;
	description: string;
	delay?: number;
}

export function MetricCard({
	title,
	value,
	suffix = "",
	icon: Icon,
	description,
	delay = 0,
}: MetricCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay }}
			viewport={{ once: true }}
			whileHover={{ y: -5 }}
		>
			<Card className="text-center hover:shadow-xl transition-all duration-300 group">
				<CardContent className="p-6">
					<div className="w-16 h-16 bg-gradient-to-br from-khmer-gold to-khmer-red rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon className="w-8 h-8 text-white" />
					</div>

					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.5, delay: delay + 0.2 }}
						viewport={{ once: true }}
						className="text-3xl font-bold text-gray-900 mb-2"
					>
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: delay + 0.4 }}
							viewport={{ once: true }}
						>
							{value}
						</motion.span>
						<span className="text-khmer-gold">{suffix}</span>
					</motion.div>

					<h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>

					<p className="text-gray-600 text-sm">{description}</p>
				</CardContent>
			</Card>
		</motion.div>
	);
}
