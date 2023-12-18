import { bootstrap, django, mongo, nest, postgre, python, react, tailwind } from "@/assets/logo";
import {
	front,
	server,
	twitch,
	logo,
	alt,
	pollen,
} from "../assets";
import { admin, mate, note, text, todo } from "@/assets/projects";

export const navLinks = [
	{
		id: "about",
		title: "A Propos",
	},
	{
		id: "work",
		title: "Projets",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Développeur Frontend",
		icon: front,
	},
	{
		title: "Développeur Backend",
		icon: server,
	},
	{
		title: "Streamer",
		icon: twitch,
	},
];

const technologies = [
	{
		name: "Bootstrap",
		icon: bootstrap,
	},
	{
		name: "Tailwind",
		icon: tailwind,
	},
	{
		name: "React JS",
		icon: react,
	},
	{
		name: "Nest JS",
		icon: nest,
	},
	{
		name: "Django",
		icon: django,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "PostgreSQL",
		icon: postgre,
	},
	{
		name: "MongoDB",
		icon: mongo,
	}
];

const experiences = [
	{
		title: "Concepteur et développeur d'applications",
		company_name: "Alt | Incubateur Tech | Formation développeur web",
		icon: alt,
		iconBg: "#fff",
		date: "Avril 2023 - Septembre 2023",
		points: [
			"Au sein d'une équipe de 4 développeurs, j'ai participé à concevoir et développer une plateforme de partage de données personnelles.",
			"Ce projet, que nous avons nommé LP-LOL, en référence au jeu culte League of Legends, est développé dans un cadre microservices. ",
			"Mes missions au sein de ce projet ont été la mise en place de l’authentification et de la gestion des profils utilisateurs, la réalisation de la maquette et le prototype du projet, la réalisation des interfaces d'authentification de la plateforme et la réalisation des interfaces d'authentification sur la version mobile de la plateforme",
			"Stack: Bootstrap | React | Ionic | NestJs | Fatsify | Nats | Redis | MongoDB",
		],
	},
	{
		title: "Développeur Python",
		company_name: "Freelance",
		icon: logo,
		iconBg: "#fff",
		date: "Janvier 2023 - Avril 2023",
		points: [
			"J'ai dû réaliser un model d'intelligence artificielle qui détecte un chien ou chat sur une photo.",
			"Pour ce model, j'ai utilisé Pandas, Tensorflow, Numpy, Pillow, OpenCV et Matplotlib.",
			"Ce model fut réalisé et entraîner en 3 semaines. L'entraînement de mon model se fait en local et non pas grâce au service Azure.",
		],
	},
	{
		title: "Développeur Web et IA",
		company_name: "Pollen Pro Services",
		icon: pollen,
		iconBg: "#fff",
		date: "Août 2021 - Juin 2022",
		points: [
			"Au sein de cette alternance, j'ai eu pour mission de concevoir et développer un CRM sous la forme d'une web application.",
			"Pour la maquette et le prototype du site, l'outil Figma a été utilisé.",
			"Pour le Backend, le framework Django a été privilégié et pour le Frontend, Tailwind CSS fut utilisé.",
			"Le CRM a été présenté par moi-même au membre du réseau Pollen afin de pouvoir, pat le biais d'un questionnaire, récolté les avis et suggestions des futurs utilisateurs du CRM",
		],
	},
];

const projects = [
	{
		id: 1,
		name: "React Todo App",
		description:
			"Une simple Todo App pour ne rien oublier. Accessible à tout le monde. C'est une application qui va vous aider à garder en tête l'état d'avancement de vos tâches.",
		tags: [
			{
				name: "Tailwind",
				color: "text-white",
			},
			{
				name: "Shadcs-ui",
				color: "text-white",
			},
			{
				name: "React",
				color: "text-white",
			},
			{
				name: "Vite",
				color: "text-white",
			},
			{
				name: "NestJs",
				color: "text-white",
			},
			{
				name: "Postgres",
				color: "text-white",
			},
		],
		image: todo,
		source_code_link: "https://todoapp-mike.vercel.app/",
	},
	{
		id: 2,
		name: "MusicMate",
		description:
			"Découvre de nouvelles musiques selon tes goûts préférés. Grâce à l'api de spotify nous retrouvons de nouvelles musiques facilement.",
		tags: [
			{
				name: "Tailwind",
				color: "text-white",
			},
			{
				name: "React",
				color: "text-white",
			},
			{
				name: "Vite",
				color: "text-white",
			},
			{
				name: "NestJs",
				color: "text-white",
			},
			{
				name: "Postgres",
				color: "text-white",
			},
		],
		image: mate,
		source_code_link: "https://musicmate.vercel.app/",
	},
	{
		id: 3,
		name: "Note App",
		description:
			"Une application de prise de notes où vos fichiers seront également stockés dans une base de données.",
		tags: [
			{
				name: "Tailwind",
				color: "text-white",
			},
			{
				name: "Shadcs-ui",
				color: "text-white",
			},
			{
				name: "React",
				color: "text-white",
			},
			{
				name: "Vite",
				color: "text-white",
			},
			{
				name: "NestJs",
				color: "text-white",
			},
			{
				name: "Postgres",
				color: "text-white",
			},
		],
		image: note,
		source_code_link: "https://github.com/mickaelrebeau/NoteApp",
	},
	{
		id: 4,
		name: "CRM Dashboard",
		description:
			"Un CRM Dashboard pour une application de gestion de clients. Ici, nous retrouvons le graphique du taux de réponses aux messages/emails envoyés.",
		tags: [
			{
				name: "Tailwind",
				color: "text-white",
			},
			{
				name: "Shadcs-ui",
				color: "text-white",
			},
			{
				name: "React",
				color: "text-white",
			},
			{
				name: "Vite",
				color: "text-white",
			},
			{
				name: "NestJs",
				color: "text-white",
			},
			{
				name: "GraphQL",
				color: "text-white",
			},
			{
				name: "Hasura",
				color: "text-white",
			},
			{
				name: "Postgres",
				color: "text-white",
			},
		],
		image: admin,
		source_code_link: "https://github.com/mickaelrebeau/CRM-Dashboard",
	},
	{
		id: 5,
		name: "Stream Subtitles in real time",
		description:
			"Un outil de génération de soustitres en temps reel pour les streams afin d'inclure une plus large communauté.",
		tags: [
			{
				name: "Tailwind",
				color: "text-white",
			},
			{
				name: "Shadcs-ui",
				color: "text-white",
			},
			{
				name: "React",
				color: "text-white",
			},
			{
				name: "Vite",
				color: "text-white",
			},
			{
				name: "NestJs",
				color: "text-white",
			},
			{
				name: "Postgres",
				color: "text-white",
			},
		],
		image: text,
		source_code_link: "https://github.com/mickaelrebeau/Live-Subtitle-Whisper",
	},
];

export { services, technologies, experiences, projects };
