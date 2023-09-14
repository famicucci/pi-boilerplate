import { render, screen } from '@testing-library/react';
import Home from '@/app/(loggedIn)/home/page';

test('renders learn react link', () => {
	render(<Home />); // ARRANGE

	const buttonsText = screen.getByText('Estos son los botones'); // ACT

	expect(buttonsText).toBeInTheDocument(); // ASSERT
});
