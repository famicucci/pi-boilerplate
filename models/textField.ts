import { UseControllerProps } from 'react-hook-form';

export interface TextField {
	control: UseControllerProps<any>['control'];
	name: UseControllerProps<any>['name'];
	type: string;
	placeholder?: string;
}
