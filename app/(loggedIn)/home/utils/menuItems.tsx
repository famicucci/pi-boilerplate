import { HelpCircle, Home, Settings, User, Users } from 'react-feather';
import { MenuItems } from '../models';

const menuItems: MenuItems = [
	{
		icon: <Home size={17} />,
		text: 'Components',
		href: '/home',
	},
	{
		icon: <Settings size={17} />,
		text: 'Settings',
		href: '/settings',
	},
	{
		icon: <HelpCircle size={17} />,
		text: 'Help',
		href: '/help',
	},
];

export default menuItems;
