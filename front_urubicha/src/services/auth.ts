import axios from 'axios';

export async function login(email: string, password: string): Promise<string> {
  const response = await axios.post('http://localhost:3001/auth/login', { email, password });
  const { access_token } = response.data;
  return access_token;
}
