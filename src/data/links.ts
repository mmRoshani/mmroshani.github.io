import TwitterIcon from '@/components/icons/TwitterIcon'
import GithubIcon from '@/components/icons/GithubIcon'
import TelegramIcon from '@/components/icons/TelegramIcon'
import LinkedinIcon from '@/components/icons/LinkedinIcon'

// ADD YOUR SOCIAL NETWORKS HERE
export const SOCIALNETWORKS = [
	{
		name: 'Github',
		url: 'https://github.com/mmRoshani',
		icon: GithubIcon
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/mmRoshani',
		icon: LinkedinIcon
	},
	{
		name: 'X',
		url: 'https://x.com/mmRoshani',
		icon: TwitterIcon
	},
	{
		name: 'Telegram',
		url: 'https://t.me/mmRoshani_kb',
		icon: TelegramIcon
	}
] as const
