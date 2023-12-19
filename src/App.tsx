import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { StarsCanvas } from "./components/canvas/Stars";
import { Skills } from "./components/Skills";
import { motion } from "framer-motion";
import { staggerContainer } from "./utils/motion";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Routes>
				<Route path="/" element={<Layout />} />
			</Routes>
		</ThemeProvider>
	);
}

function Layout() {
	return (
		<div className="w-full h-screen">
			<div className="bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>

			<section className="sm:px-16 px-6 sm:py-16 py-10 max-w-5xl mx-auto relative z-0">
				<motion.section
					variants={staggerContainer(0.5, 0.5)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					className={`relative z-0`}
				>
					<About />
				</motion.section>

				<motion.section
					variants={staggerContainer(0.5, 0.5)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					className={`relative z-0`}
				>
					<Skills />
				</motion.section>

				<motion.section
					variants={staggerContainer(0.5, 0.5)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					className={`relative z-0`}
				>
					<Experience />
				</motion.section>

				<motion.section
					variants={staggerContainer(0.5, 0.5)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					className={`relative z-0`}
				>
					<Works />
				</motion.section>
			</section>

			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
		</div>
	);
}

export default App;
