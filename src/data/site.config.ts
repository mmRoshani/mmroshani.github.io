interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://mmroshani.ir/', // Write here your website url
	author: 'MohammadMojtaba Roshani (mmRoshani)', // originally `DanielCG`
	title: 'mmRoshani', // Site title.
	description: "MohammdMojtaba Roshani (mmRoshani)'s Web Page", // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: `————————————————
	\n
	WRITE_YOUR_CUSTOM_MESSAGE_HERE
	\n
	 ————————————————
	- Blog: https://mmroshani.ir
	- GitHub: https://github.com/mmRoshani
	- Linkedin: https://linkedin.com/in/mmRoshani
	- Telegram Channel: https://t.me/mmRoshani_kb
	- Telegram Account: https://t.me/mmRoshani_real`,
	paginationSize: 6 // Number of posts per page
}
