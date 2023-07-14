import { UseControllerProps } from 'react-hook-form';

export interface TextField {
	control: UseControllerProps<any>['control'];
	name: UseControllerProps<any>['name'];
	type: string;
	icon?: React.ReactNode;
	placeholder?: string;
	fullWidth?: boolean;
}
