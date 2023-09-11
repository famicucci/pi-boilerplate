import { Card } from '@/components/Card/Card';
import { ButtonPrimary } from './components/Buttons/ButtonPrimary';
import { TableExample } from './components/TableExample';
import { ButtonSecondary } from './components/Buttons/ButtonSecondary';
import { Suspense } from 'react';
import { SkeletonTable } from '@/components/Skeleton';

function Home() {
	return (
		<div>
			<Card>
				<ButtonPrimary />
				<ButtonSecondary />
			</Card>
			<Card>
				<Suspense fallback={<SkeletonTable />}>
					<TableExample />
				</Suspense>
			</Card>
		</div>
	);
}

export default Home;
