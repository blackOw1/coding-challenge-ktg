import { API_URL } from "./config";

export const fetchData = async function(targetPath) {
    try {
        const url = `${API_URL}${targetPath}`;
        const response = await fetch(url);
        // console.log(response);

        if (!response.ok) throw (`An error has occurred. Please try again (Error ${response.status}).`);
        
        return await response.json();
    } catch(error) {
        throw error;
    }
};