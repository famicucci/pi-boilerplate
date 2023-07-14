import Image from 'next/image';
import * as React from 'react';
import logo from '@/public/logo.svg';
import { LogoProps } from '@/models/logoProps';

const Logo = ({ top }: LogoProps) => {
	return (
		<Image
			src={logo}
			width={68}
			height={68}
			alt="Picture of the author"
			style={{ marginTop: `${top}px` }}
		/>
	);
};

export default Logo;
