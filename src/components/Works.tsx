import { projects } from "@/constants/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./Works.css";

const ProjectCard = ({
	name,
	description,
	tags,
	image,
	source_code_link,
}: {
	name: string;
	description: string;
	tags: { name: string; color: string }[];
	image: string;
	source_code_link: string;
	}) => {
	const tiltOptions = {
		max: 45,
		scale: 1,
		speed: 450,
	};
	return (
		<Tilt options={tiltOptions}>
			<div className="h-full p-4 relative border border-fuchsia-600 rounded-xl hover:shadow-lg hover:shadow-purple-400/25 overflow-hidden">
				<img
					className="rounded-lg border border-fuchsia-600"
					src={image}
					alt="Projet"
				/>
				<div className="mt-4 h-full">
					<p className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400">
						{name}
					</p>
					<p className="mt-4 text-slate-400">{description}</p>
					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<p
								key={`${name}-${tag.name}`}
								className={`text-[14px] ${tag.color}`}
							>
								#{tag.name}
							</p>
						))}
					</div>
				</div>
				<a
					href={source_code_link}
					className="px-3 font-semibold text-2xl text-center absolute top-0 left-0 flex flex-col items-center justify-center gap-2 md:gap-8 h-full min-h-[380px]: w-full bg-fuchsia-600/30 backdrop-blur card-hover overflow-auto"
					target="_blank"
					rel="noreferrer"
				>
					Cliquez pour voir le projet
				</a>
			</div>
		</Tilt>
	);
};

export const Works = () => {
	return (
		<section className="p-4 mt-20">
			<span className="hash-span" id="work">
				&nbsp;
			</span>

			<motion.div variants={textVariant(0.1)}>
				<p className="text-slate-400 sm:text-[18px] text-[14px]">Projets</p>
				<h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 md:text-[54px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Les projets que j'ai fait.
				</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-slate-400 text-[17px] max-w-3xl leading-[30px]"
			>
				Vous retrouverez ici une liste non exaustive des porjets que j'ai pu
				concevoir. Ce sont les projets que je préfère et qui mettent en valeur
				mes compétences. N'hésitez pas à les consulter et faire un tour sur mon
				profil Github pour en voir plus.
			</motion.p>

			<div className="mt-10 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-x-hiden">
				{projects.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
			</div>
		</section>
	);
};
