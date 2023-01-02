import axios from "axios";
const bearer = process.env.NEXT_PUBLIC_BEARER_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_EXPERT;

// HTTP POST Request - Returns Resolved or Rejected Promise
export const postRequest = async (endpoint, data) => {
    try {
        const response = await axios.post(`${baseUrl}${endpoint}`, data, {
            headers: {
                "Content-Type": "application/json",
                mode: "no-cors",
                Authorization: `bearer ${bearer}`,
                "Access-Control-Allow-Origin": "*",
            }
        });
        return response;
    }
    catch (err) {
        return handleError(err);
    }
};

// HTTP GET Request - Returns Resolved or Rejected Promise
export const getRequest = async (endPoint, data) => {
    try {
        const response = await axios.get(`${baseUrl}${endPoint}`, data, {
            headers: {
                "Content-Type": "application/json",
                mode: "no-cors",
                Authorization: `bearer ${bearer}`,
                "Access-Control-Allow-Origin": "*",
            }
        });
        return response;
    }
    catch (err) {
        return handleError(err);
    }
};