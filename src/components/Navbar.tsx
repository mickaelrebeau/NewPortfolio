import { navLinks } from "@/constants/constants";
import { logo, menu, close } from "../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setActive("");
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav className="p-6 w-full flex items-center fixed top-0 z-20 backdrop-blur-sm bg-gradient-to-b from-black to-slate-950/10">
			<div className="w-full flex justify-between items-center max-w-5xl mx-auto">
				<Link
					to="/"
					className="flex justify-center items-center gap-2 cursor-pointer"
					onClick={handleClick}
				>
					<img src={logo} alt="logo" className="w-10" />
					<p className="text-white text-[18px] font-semibold hover:text-pink-300 transition">
						Mickael Rébeau
					</p>
				</Link>
				<ul className="list-none sm:flex hidden justify-end items-center flex-1">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-pink-300 transition ${
								active === nav.title ? "text-fuchsia-400" : "text-white"
							} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 bg-slate-950 absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-lg shadow-xl z-10`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col">
							{navLinks.map((nav, index) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-pink-300 transition ${
										active === nav.title ? "text-fuchsia-400" : "text-white"
									} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
