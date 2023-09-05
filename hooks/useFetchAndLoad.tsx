import { AxiosCall } from '@/models/axiosCall';
import { useState } from 'react';

const useFetchAndLoad = () => {
	// const [loading, setLoading] = useState<boolean>(false);

	const callEndpoint = async (axiosCall: AxiosCall) => {
		// setLoading(true);
		try {
			const result = await axiosCall.call;
			// setLoading(false);
			return result;
		} catch (error) {
			// setLoading(false);
			throw Error('Esto es una prueba del manejo del mensaje');
			// throw error;
		}
	};

	return { callEndpoint };
};

export default useFetchAndLoad;
