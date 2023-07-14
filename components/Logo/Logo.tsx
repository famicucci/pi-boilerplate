import Image from 'next/image';
import * as React from 'react';
import logo from '@/public/logo.svg';

const Logo = () => {
	return <Image src={logo} alt="SVG Image" />;
};

export default Logo;
