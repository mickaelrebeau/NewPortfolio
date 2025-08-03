import { django, mongo, nest, postgre, python, react, tailwind, vue } from "@/assets/logo";
import {
	front,
	server,
	twitch,
	logo,
	alt,
	pollen,
	bloomind,
	plg,
} from "@/assets";
import { bolt, car, cod, cvOffer, helwena, musicmate, note, text } from "@/assets/projects";

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
		name: "Tailwind",
		icon: tailwind,
	},
	{
		name: "Vue JS",
		icon: vue,
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
		title: "Innovative Software Solutions Associate",
		company_name: "ProductLife Group",
		icon: plg,
		iconBg: "#fff",
		date: "Mars 2025 - Current",
		points: [
			"En tant que développeur fullstack, je suis chargé de concevoir et développer des solutions web et logicielles innovantes pour répondre aux besoins des clients.",
		],
	},
	{
		title: "Consultant",
		company_name: "Bloomind",
		icon: bloomind,
		iconBg: "#fff",
		date: "Mars 2024 - Mars 2025",
		points: [
			"Au sein de cette entreprise, mes compétences en tant que développeur fullstack dans un environnement Vue Js et Python sont mise à disposition d'un client.",
		],
	},
	{
		title: "Concepteur et développeur d'applications",
		company_name: "Alt | Incubateur Tech | Formation développeur web",
		icon: alt,
		iconBg: "#fff",
		date: "Avril 2023 - Septembre 2023",
		points: [
			"Au sein d'une équipe de 4 développeurs, j'ai participé à concevoir et développer une plateforme de partage de données personnelles.",
			"Ce projet, que nous avons nommé LP-LOL, en référence au jeu culte League of Legends, est développé dans un cadre microservices. ",
			"Mes missions au sein de ce projet ont été la mise en place de l’authentification et de la gestion des profils utilisateurs, la réalisation de la maquette et le prototype du projet, la réalisation des interfaces d'authentification de la plateforme et la réalisation des interfaces d'authentification sur la version mobile de la plateforme.",
			"Stack: Bootstrap | React | Ionic | NestJs | Fastify | Nats | Redis | MongoDB",
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
			"Ce model fut réalisé et entraîné en 3 semaines. L'entraînement de mon model se fait en local et non pas grâce au service Azure.",
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
    id: 0,
    name: "CV Offer Comparer",
    description: "Comparateur de CVs à une offre d'emploi.",
    tags: [
      {
        name: "FastAPI",
        color: "text-white",
      },
      {
        name: "Gemini API",
        color: "text-white",
      },
      {
        name: "Vue JS",
        color: "text-white",
      },
      {
        name: "Tailwind CSS",
        color: "text-white",
      },
    ],
    image: cvOffer,
    source_code_link: "https://cv-offer-comparer-mike-dreeman.vercel.app/",
  },
  {
    id: 1,
    name: "Clash of Devs",
    description:
      "Ma contribution au concours Clash of Devs organiser par Maislina et LLCoolChris.",
    tags: [
      {
        name: "Vue JS",
        color: "text-white",
      },
      {
        name: "Tailwind CSS",
        color: "text-white",
      },
    ],
    image: cod,
    source_code_link: "https://mike-dreeman-clash-of-dev.vercel.app/",
  },
  {
    id: 2,
    name: "MusicMate",
    description:
      "Découvre de nouvelles musiques selon tes goûts préférés. Grâce à l'api de spotify nous retrouvons de nouvelles musiques facilement.",
    tags: [
      {
        name: "Nest Js",
        color: "text-white",
      },
      {
        name: "TypeORM",
        color: "text-white",
      },
      {
        name: "React JS",
        color: "text-white",
      },
      {
        name: "Tailwind Css",
        color: "text-white",
      },
    ],
    image: musicmate,
    source_code_link: "https://musicmate.vercel.app/",
  },
  {
    id: 3,
    name: "Vintage Cars",
    description: "Un site musée de voitures anciennes.",
    tags: [
      {
        name: "React JS",
        color: "text-white",
      },
      {
        name: "Tailwind CSS",
        color: "text-white",
      },
    ],
    image: car,
    source_code_link: "https://mike-cars-landing-page.vercel.app/",
  },
  {
    id: 4,
    name: "Design to code",
    description:
      "Challenge de design to code. Un design par jour que je code le lendemain.",
    tags: [
      {
        name: "Html",
        color: "text-white",
      },
      {
        name: "Css",
        color: "text-white",
      },
    ],
    image: helwena,
    source_code_link: "https://mickaelrebeau.github.io/Helwena-Design/",
  },
  {
    id: 5,
    name: "Stream Subtitles in real time",
    description:
      "Un outil de génération de sous-titres en temps reel pour les streams afin d'inclure une plus large communauté.",
    tags: [
      {
        name: "Html",
        color: "text-white",
      },
      {
        name: "Css",
        color: "text-white",
      },
      {
        name: "Javascript",
        color: "text-white",
      },
      {
        name: "Python",
        color: "text-white",
      },
    ],
    image: text,
    source_code_link: "https://github.com/mickaelrebeau/Live-Subtitle-Whisper",
  },
];

export { services, technologies, experiences, projects };
