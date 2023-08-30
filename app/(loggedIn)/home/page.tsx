import { Card } from '@/components/Card/Card';
import { ButtonPrimary } from './components/Buttons/ButtonPrimary';
import { TableExample } from './components/TableExample';
import { ButtonSecondary } from './components/Buttons/ButtonSecondary';

function Home() {
	return (
		<div>
			<Card>
				<ButtonPrimary />
				<ButtonSecondary />
			</Card>
			<Card>
				<TableExample />
			</Card>
		</div>
	);
}

export default Home;
