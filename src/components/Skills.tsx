import { technologies } from "@/constants/constants";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const Skill = ({ icon, name }: { icon: string; name: string }) => {
	return (
		<div className="w-28 h-28 flex flex-col items-center justify-center gap-3">
			<img
				className="w-[50px] h-[50px] object-contain"
				src={icon}
				alt={name}
			/>
			<p className="text-slate-400 text-[14px]">{name}</p>
		</div>
	);
}

export function Skills() {
	return (
		<section className="p-4 mt-20">
			<motion.div variants={textVariant(0.1)}>
				<p className="text-slate-400 sm:text-[18px] text-[14px]">Compétences</p>
				<h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 md:text-[54px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Mes compétences.
				</h2>
			</motion.div>

			<div className="mt-10 grid grid-cols-2 md:grid-cols-8 gap-4">
				{technologies.map((technology) => (
					<div key={technology.name} className="w-28 h-28">
						<Skill icon={technology.icon} name={technology.name}/>
					</div>
				))}
			</div>
		</section>
	);
}
