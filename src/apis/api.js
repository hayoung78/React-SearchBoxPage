import axios from "axios";

const ApiUrl = "http://localhost:3000";

// const searchJsonData = async (url) => {
//     try {
//         const response = await axios.get(`${ApiUrl}/${url}`);
//         return response.data;
//     } catch (error) {
//         console.error(`Error fetching JSON data from ${ApiUrl}/${url}:`, error);
//         throw error;
//     }
// };
// export const fetchData = async () => {
//     try {
//         const jsonData = await searchJsonData("search");
//         console.log(jsonData.data, "data");
//         return jsonData.data;
//     } catch (error) {
//         console.error(`Error fetching data:`);
//         throw error;
//     }
// }
const searchJsonRequest = (url, params) => {
    return axios.get(`${ApiUrl}/${url}`, {
        headers: {
            accept: "application/json",
        },
        params: {
            ...params,
        },
    });
};

export const searchApi = async (key) => {
    try {
        const response = await searchJsonRequest(`search`, { key });
        console.log(response.data, "response");
        return response.data;
    } catch (error) {
        console.error("Error fetching search data: ", error);
        throw error;
    }
};
