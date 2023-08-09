import Image from 'next/image';
import * as React from 'react';
import logo from '@/public/logo.svg';

const LogoMini = () => {
	return (
		<Image src={logo} width={42} height={42} alt="Picture of the author" />
	);
};

export default LogoMini;
