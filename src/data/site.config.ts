interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'MohammadMojtaba Roshani (mmRoshani)', // originally `DanielCG`
	title: 'mmRoshani KB', // Site title.
	description: "MohammdMojtaba Roshani (mmRoshani)'s Knowledge Base", // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
