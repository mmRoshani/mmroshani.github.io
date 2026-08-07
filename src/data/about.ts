import { SOCIALNETWORKS } from '@/data/links'

export const aboutContent = {
	summaryParagraphs: [
		'I am an AI and distributed systems engineer focused on trustworthy machine learning, federated and decentralized training, and production-grade MLOps and LLMOps platforms. My work sits where research ideas meet the systems required to run them reliably.',
		'I build across the full stack of modern AI delivery: distributed training and serving, agentic workflows, retrieval systems, streaming data platforms, and the observability, automation, and platform layers that keep models dependable after launch.',
		'Alongside engineering, I teach, review, mentor, and write about AI engineering and data platforms. This site is where I share practical notes from building systems that need to be secure, scalable, and maintainable in the real world.'
	],
	focusTopics: [
		'Trustworthy AI',
		'Federated Learning',
		'Agentic Systems',
		'Data Platforms',
		'MLOps'
	],
	education: [
		{
			degree: 'M.Sc. in Computer Software Engineering',
			institution: 'Shiraz University',
			focus:
				'Distributed systems, federated learning, privacy-aware machine learning, and secure decentralized training.'
		},
		{
			degree: 'B.Sc. in Computer Engineering',
			institution: 'Shahid Bahonar University',
			focus: 'Artificial intelligence, data mining, and applied machine learning.'
		}
	],
	competencyGroups: [
		{
			title: 'AI, Agents & MLOps',
			items: [
				'Distributed training and serving',
				'LLM systems and inference',
				'Agent orchestration and tool use',
				'RAG and vector retrieval',
				'Experiment tracking and model lifecycle automation'
			]
		},
		{
			title: 'Data & Streaming',
			items: [
				'Event-driven architectures',
				'Stream and batch processing',
				'CDC and real-time analytics',
				'Operational data stores and search',
				'Dashboards and observability'
			]
		},
		{
			title: 'Platform Engineering',
			items: [
				'Python, TypeScript, Go',
				'APIs and microservices',
				'Linux, containers, and Kubernetes',
				'CI/CD for ML and software systems',
				'Technical leadership and delivery'
			]
		}
	],
	experience: [
		{
			role: 'AI Engineering',
			summary:
				'Lead engineering for production AI products built around multi-agent workflows, retrieval-augmented reasoning, speech interfaces, and privacy-aware system design.'
		},
		{
			role: 'Platform Lead, Distributed AI',
			summary:
				'Architect end-to-end machine learning operations platforms that automate training, evaluation, deployment, and monitoring for research and product teams.'
		},
		{
			role: 'Graduate Research Engineer',
			summary:
				'Research and build distributed learning systems spanning federated, clustered, and decentralized training with privacy-preserving protocols and scalable orchestration.'
		},
		{
			role: 'Trustworthy AI Research Engineer',
			summary:
				'Design secure collaborative learning approaches that combine encryption, privacy controls, and robust evaluation against common leakage and inference risks.'
		},
		{
			role: 'Research Engineer, Communication-Efficient ML',
			summary:
				'Develop lightweight coordination methods for non-IID federated settings, including similarity-driven client grouping and neighbor selection without exposing raw model values.'
		},
		{
			role: 'Research Assistant & Platform Engineer',
			summary:
				'Build distributed training and serving workflows, explore scalable LLM deployment patterns, and support research infrastructure for high-performance computing groups.'
		},
		{
			role: 'Software & Data Engineer',
			summary:
				'Deliver large-scale streaming systems, access-control services, and cloud-native microservices for real-time operational data and IoT workloads.'
		},
		{
			role: 'Data Engineer',
			summary:
				'Create automated ingestion and processing pipelines for analytics, geospatial monitoring, and high-volume behavioral data products.'
		}
	],
	community: [
		{
			title: 'Teaching & Seminars',
			detail:
				'Teaching assistant and seminar presenter on cloud computing, distributed systems, federated learning, secure machine learning, and real-time data processing.'
		},
		{
			title: 'Peer Review',
			detail:
				'Reviewer for workshops and conferences focused on trustworthy AI, AI safety, and socially responsible deployment.'
		},
		{
			title: 'Open Source & Writing',
			detail:
				'Contributor to open-source tooling and author of technical writing on AI engineering, data platforms, and production lessons learned.'
		}
	],
	highlights: [
		'Graduate research in privacy-aware federated learning and distributed coordination.',
		'Hands-on delivery across MLOps platforms, streaming data systems, and agentic AI products.',
		'Teaching, mentoring, and cross-functional technical leadership in research and industry settings.',
		'Recognition in national academic, engineering, and applied AI competitions.',
		'Professional certification in data engineering and platform-oriented software delivery.'
	],
	languages: ['Farsi (native)', 'English (professional working proficiency)']
} as const

export const personProfile = {
	name: 'Mohammad Mojtaba Roshani',
	alternateName: ['mmRoshani', 'MohammadMojtaba Roshani'],
	jobTitle: 'AI and Distributed Systems Engineer',
	description:
		'AI and distributed systems engineer focused on trustworthy machine learning, federated learning, agentic systems, MLOps, and production data platforms.',
	url: 'https://mmroshani.ir/about/',
	image: 'https://mmroshani.ir/open-graph.png',
	knowsAbout: [
		...aboutContent.focusTopics,
		'LLMOps',
		'Distributed Systems',
		'Privacy-preserving Machine Learning',
		'Retrieval-Augmented Generation',
		'Kubernetes'
	],
	alumniOf: aboutContent.education.map((item) => ({
		name: item.institution,
		degree: item.degree
	})),
	sameAs: SOCIALNETWORKS.map((network) => network.url),
	knowsLanguage: ['fa', 'en']
} as const
