import axios from 'axios';

export async function fetchData() {
    try {
        const response = await axios.get(`${process.env.apiUrl}/api/user`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
