import axios from 'axios';

export async function register(email: string, password: string) {
    try {
        const response = await axios.post(`${process.env.apiUrl}/api/user`, {
            email: email,
            password: password
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}
