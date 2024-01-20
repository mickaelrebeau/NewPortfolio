import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences } from "@/constants/constants";
import { textVariant } from "@/utils/motion";

const ExperienceCard = ({
	experience,
}: {
	experience: {
		title: string;
		company_name: string;
		icon: string;
		iconBg: string;
		date: string;
		points: string[];
	};
}) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#020617",
				color: "#cbd5e1",
				border: "2px solid #c026d3",
				boxShadow: "none",
			}}
			contentArrowStyle={{ borderRight: "7px solid #c026d3" }}
			date={experience.date}
			dateClassName="lg:mx-3"
			iconStyle={{
				boxShadow: "0px 0px 0px 3px #c026d3",
			}}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-full h-full object-contain rounded-full"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-semibold">
					{experience.title}
				</h3>
				<p
					className="text-slate-400 text-[18px] font-light"
					style={{ top: "10px" }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[18px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

export const Experience = () => {
	return (
		<section className="p-4 mt-20">
			<motion.div variants={textVariant(0.1)}>
				<p className="text-slate-400 sm:text-[18px] text-[14px]">Expériences</p>
				<h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 md:text-[54px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Mes expériences professionnelles.
				</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline lineColor="#c026d3">
					{experiences.map((experience) => (
						<ExperienceCard key={experience.title} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</section>
	);
};
