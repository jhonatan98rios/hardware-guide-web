import axios from 'axios';
import { smartEndpoint } from '@/constants/endpoints';

export interface Recommendation {
    image: string
    name: string
    link: string
    moba: string
    cpu: string
    storage: string
    ram: string
    gpu: string
    screen: string
    so: string
    price: string
}

export async function fetchRecommendations(sample: string): Promise<Recommendation[]> {
  try {
    const response = await axios.post(smartEndpoint, { text: sample });
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    //@ts-ignore
    throw new Error(error.message);
  }
}