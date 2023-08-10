import { HelpCircle, Home, Settings, User, Users } from 'react-feather';
import { MenuItems } from '../models';

const menuItems: MenuItems = [
	{
		icon: <Home size={17} />,
		text: 'Home',
		href: '#',
	},
	{
		icon: <Users size={17} />,
		text: 'Users',
		href: '#',
	},
	{
		icon: <User size={17} />,
		text: 'Profile',
		href: '#',
	},
	{
		icon: <Settings size={17} />,
		text: 'Settings',
		href: '#',
	},
	{
		icon: <HelpCircle size={17} />,
		text: 'Help',
		href: '#',
	},
];

export default menuItems;
