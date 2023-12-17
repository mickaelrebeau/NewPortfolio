import { technologies } from "@/constants/constants";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas/Ball";

export function Skills() {
	return (
		<section className="p-4 mt-20">
			<motion.div variants={textVariant(0.1)}>
				<p className="text-slate-400 sm:text-[18px] text-[14px]">Compétences</p>
				<h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 md:text-[54px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Mes compétences.
				</h2>
			</motion.div>

			<div className="mt-10 grid grid-cols-2 md:grid-cols-9 gap-4">
				{technologies.map((technology) => (
					<div key={technology.name} className="w-28 h-28">
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</section>
	);
}
