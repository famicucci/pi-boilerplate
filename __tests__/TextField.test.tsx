import { render, screen } from '@testing-library/react';
import { TextField } from '@/components/TextField';
import { Lock } from 'react-feather';

describe('TextField', () => {
	describe('Normal status', () => {
		beforeEach(() => {
			render(
				<TextField
					type="password"
					name="password"
					placeholder="Contraseña"
					icon={<Lock size={16} />}
					value={'ejemplo de value'}
					onChange={() => {}}
				/>
			);
		});

		test('check if elements appear: label, placeholder, icon, error message does not appear', () => {
			const textField = screen.getByPlaceholderText('Contraseña'); // ACT

			expect(textField).toBeInTheDocument(); // ASSERT
			expect(textField).toHaveValue('ejemplo de value');
			expect(textField).toHaveAttribute('type', 'password');
		});

		test('check color: font, borders and icon are grau', () => {
			const textField = screen.getByPlaceholderText('Contraseña'); // ACT

			expect(textField).toHaveClass('input'); // ASSERT
		});
		test('check font size: placeholder, icon, label', () => {});
	});

	describe('Error status', () => {
		test('check if elements appear: label, placeholder, icon, error message appear', () => {});
		test('check color: font, borders, icon and error message are red ', () => {});
		test('check font size: placeholder, icon, label', () => {});
	});
});
