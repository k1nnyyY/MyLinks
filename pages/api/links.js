const links = [
	{
		_id: 'link_1',
		icon: {
			path: '/icons/vk.png',
			width: 76
		},
		gradient: {
			from: '#13E780',
			to: '#00bbd5'
		},
		link: 'https://vk.com/k1nnyyy',
		title: 'Мой ВК'
	},
	{
		_id: 'link_2',
		icon: {
			path: '/icons/github.png',
			width: 115
		},
		gradient: {
			from: '#fc5dff',
			to: '#5dfdff'
		},
		link: 'https://github.com/k1nnyyY',
		title: 'Мой GitHub',
		isImportant: true
	},
	{
		_id: 'link_3',
		icon: {
			path: '/icons/global.svg',
			width: 80
		},
		gradient: {
			from: '#FEAC5E',
			to: '#4BC0C8'
		},
		link: '#',
		title: 'Поддержать Автора'
	},
	{
		_id: 'link_4',
		icon: {
			path: '/icons/telegram.svg',
			width: 80
		},
		gradient: {
			from: '#76acfd',
			to: '#6ed0ff'
		},
		link: '#',
		title: 'Мой телеграмм'
	},
	{
		_id: 'link_5',
		icon: {
			path: '/icons/intensives.svg',
			width: 150
		},
		gradient: {
			from: '#c659ff',
			to: '#ff3f4d'
		},
		link: '#',
		title: 'Мое CV'
	},
	{
		_id: 'link_6',
		icon: {
			path: '/icons/vs-code.svg',
			width: 80
		},
		gradient: {
			from: '#3EA6EA',
			to: '#2179c1'
		},
		link: 'https://www.youtube.com/watch?v=_jquc4KJ4IU',
		title: 'Мой сетап VS Code'
	},
	{
		_id: 'link_7',
		icon: {
			path: '/icons/youtube.svg',
			width: 84
		},
		gradient: {
			from: '#e53935',
			to: '#e35d5b'
		},
		link: 'https://www.youtube.com/c/MaxShushval?sub_confirmation=1',
		title: 'Личный Youtube'
	},
	{
		_id: 'link_8',
		icon: {
			path: '/icons/airbnb.svg',
			width: 75
		},
		gradient: {
			from: '#FF385C',
			to: '#dd2e63'
		},
		link: 'https://abnb.me/e/Mgl6khUuN3',
		title: 'Получи 4000 руб. на бронирование'
	},
	{
		_id: 'link_9',
		icon: {
			path: '/icons/emoji.svg',
			width: 90
		},
		gradient: {
			from: '#f6d365',
			to: '#fda085'
		},
		link: 'https://www.youtube.com/channel/UCdpPBwKPriPIP2eyP9a1C6g/join',
		title: 'Уникальный значок и эмоджи'
	},
	{
		_id: 'link_10',
		icon: {
			path: '/icons/boosty.svg',
			width: 160
		},
		gradient: {
			from: '#ff8d42',
			to: '#ff8257'
		},
		link: '#',
		title: 'Эксклюзивный контент'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
