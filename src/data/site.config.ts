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
	shareMessage: `————————————————
	\n
	WRITE_YOUR_CUSTOM_MESSAGE_HERE
	\n
	 ————————————————
	- Blog: https://mmroshani.github.io
	- GitHub: https://github.com/mmRoshani
	- Linkedin: https://linkedin.com/in/mmRoshani
	- Telegram Channel: https://t.me/mmRoshani_kb
	- Telegram Account: https://t.me/real_mmRoshani`,
	paginationSize: 6 // Number of posts per page
}
