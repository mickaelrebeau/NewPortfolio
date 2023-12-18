import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "@/constants/constants";
import { fadeIn, textVariant } from "@/utils/motion";

const ServiceCard = ({
	index,
	title,
	icon,
}: {
	index: number;
	title: string;
	icon: string;
	}) => {
	const tiltOptions = {
		max: 45,
		scale: 1,
		speed: 450,
	}
	return (
		<Tilt className="w-[250px]" options={tiltOptions}>
			<motion.div
				variants={fadeIn("right", "spring", index * 0.5, 0.75)}
				className="w-full bg-gradient-to-r from-pink-300 to-fuchsia-400 p-[1px] rounded-xl shadow-2xl shadow-fuchsia-400/25"
			>
				<div className="w-full bg-slate-950 rounded-xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-semibold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

export const About = () => {
	return (
		<section className="p-4 mt-8">
			<span className="hash-span" id="about">
				&nbsp;
			</span>

			<motion.div variants={textVariant(0.1)}>
				<p className="text-slate-400 sm:text-[18px] text-[14px]">
					Présentation
				</p>
				<h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 md:text-[54px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Qui suis-je ?
				</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-slate-400 text-[17px] max-w-3xl leading-[30px]"
			>
				Passionné depuis mes 14ans par le monde de l'informatique, je suis
				aujourd'hui un développeur évoluant principalement dans l'écosystème
				Javascipt/Typescript via les frameworks React et NestJS mais également
				dans le domaine du machine learning et de l'analyse de données via
				Python. Vous pouvez me retrouver sur Twitch, où je code et réalise des
				projets persos en lives.
			</motion.p>

			<div className="mt-20 flex flex-wrap items-center justify-center gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</section>
	);
};