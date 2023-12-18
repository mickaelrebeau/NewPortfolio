import { github, insta, linkedin, notion, twitch } from "@/assets/logo";


export const Contact = () => {
  return (
		<footer className="relative z-0 w-full h-[800px] flex items-center justify-center">
			<span className="hash-span" id="contact">
				&nbsp;
			</span>

			<div className="p-10 w-[90%] md:w-full min-w-[300px] max-w-[800px] md:h-[500px] bg-fuchsia-600/10 backdrop-blur-[2px] rounded-xl border border-fuchsia-600/50 flex flex-col justify-between">
				<div className="flex flex-col gap-3">
					<h2 className="text-6xl font-semibold text-white">
						Contact
					</h2>

					<p className="mt-5 text-xl text-slate-400">
						N'hésitez pas à me contacter pour tout projet. N'oubliez pas de me
						suivre sur Instagram et Twitch également.
					</p>
					<p className="mt-5 text-xl text-slate-400">
						Email : rebau.mickael@gmail.com
					</p>
				</div>

				<div className="mt-5 flex justify-end gap-3">
					<a
						className="hover:translate-y-[-5px] transition"
						href="https://github.com/mickaelrebeau"
						target="_blank"
						rel="noreferrer"
					>
						<img className="w-10 h-10" src={github} alt="Github" />
					</a>
					<a
						className="hover:translate-y-[-5px] transition"
						href="https://www.linkedin.com/in/mickael-r%C3%A9beau/"
						target="_blank"
						rel="noreferrer"
					>
						<img className="w-10 h-10" src={linkedin} alt="Linkedin" />
					</a>
					<a
						className="hover:translate-y-[-5px] transition"
						href="https://www.instagram.com/mike_photocollection/"
						target="_blank"
						rel="noreferrer"
					>
						<img className="w-10 h-10" src={insta} alt="Instagram" />
					</a>
					<a
						className="hover:translate-y-[-5px] transition"
						href="https://full-milkshake-288.notion.site/Mickael-REBEAU-7679cc37d7a24ccaaa542354d9ea7f0e?pvs=4"
						target="_blank"
						rel="noreferrer"
					>
						<img className="w-10 h-10" src={notion} alt="Notion" />
					</a>
					<a
						className="hover:translate-y-[-5px] transition"
						href="https://www.twitch.tv/mike_dreeman"
						target="_blank"
						rel="noreferrer"
					>
						<img className="w-10 h-10" src={twitch} alt="Twitch" />
					</a>
				</div>
			</div>
		</footer>
	);
}