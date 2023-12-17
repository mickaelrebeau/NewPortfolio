import { ComputersCanvas } from "./canvas/Computers";
import { MoveDown } from "lucide-react";

export const Hero = () => {
  return (
		<section className="relative w-full h-screen mx-auto bg-[url('/src/assets/herobg.svg')] bg-cover">
			<div className="absolute inset-0 top-[120px] max-w-5xl mx-auto px-4 flex items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-2 h-2 rounded-full bg-fuchsia-400" />
					<div className="w-[1px] sm:h-80 h-40 bg-gradient-to-b from-fuchsia-400 to-transparent" />
				</div>
				<div className="flex flex-col justify-center items-start gap-3 mt-5">
					<h1 className="text-2xl md:text-4xl font-semibold text-white">
						Hey, je suis{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400">
							Mickael Rébeau
						</span>
					</h1>
					<p className="w-[320px] md:w-[600px] text-white text-xl">
						Développeur React | NestJS | Django | Python.
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<MoveDown className="w-10 h-10 text-fuchsia-400 hover:text-pink-300 animate-bounce" />
				</a>
			</div>
		</section>
	);
}