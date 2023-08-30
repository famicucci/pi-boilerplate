import { Card } from '@/components/Card/Card';
import { ButtonPrimary } from './components/Button/ButtonPrimary';
import { TableExample } from './components/TableExample';

function Home() {
	return (
		<div>
			<Card>
				<ButtonPrimary />
			</Card>
			<Card>
				<TableExample />
			</Card>
		</div>
	);
}

export default Home;
