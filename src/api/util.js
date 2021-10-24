import axios from './axios';

export const getRequest = async (url) => {
	try {
		let response = await axios.get(url);
		return generateSuccessOutput(response);
	} catch (error) {
		return generateErrorOutput(error);
	}
};

export const getRequestWithHeaders = async (url,header) => {
	try {	
		let response = await axios.get(url,header);
		return generateSuccessOutput(response);
	} catch (error) {
		return generateErrorOutput(error);
	}
};

export const postRequest = async (url, data) => {
	try {
		let response = await axios.post(url, data);
		return generateSuccessOutput(response);
	} catch (error) {
		return generateErrorOutput(error);
	}
};

export const postRequestWithHeader = async (url, data,header) => {
	try {
		let response = await axios.post(url, data,header);
		return generateSuccessOutput(response);
		
	} catch (error) {
		return generateErrorOutput(error);
	}
};

export const putRequest = async (url, data, headers = {}) => {
	try {
		let response = (data) ? await axios.put(url, data, headers) : await axios.put(url, headers);
		return generateSuccessOutput(response);
	} catch (error) {
		return generateErrorOutput(error);
	}
};

export const deleteRequest = async (url) => {
	try {
		let response = await axios.delete(url);
		return generateSuccessOutput(response);
	} catch (error) {
		return generateErrorOutput(error);
	}
};

const generateSuccessOutput = (response) => {
	console.log(response);
	return {
		data: response.data,
		message: response.data.message,
		code: response.status
	}
}

const generateErrorOutput = (error) => {
	if (error.response)
		return {
			error: error,
			title: error.response.statusText,
			code: error.response.status,
			message: error.response.data.message
		}
	else
		return {
			error: error,
			title: error.message,
			code: 1,
			message: "Cannot connect to the server"
		}
}