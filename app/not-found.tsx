import { Button } from '@/components/Button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div>
			<h2>Error 404</h2>
			<p>Esta página no fué encontrada</p>
			<Link href="/">
				<Button>Return Home</Button>
			</Link>
		</div>
	);
}
