import { Guestbook } from "@/types/guestbook";
import axios from "axios";

const API_URL = "http://localhost:3001";

export const getGuestbook = async (): Promise<Guestbook[]> => {
  const response = await axios.get(`${API_URL}/guestbooks`);
  return response.data.data;
};

export const createGuestbook = async (
  guestbook: Pick<Guestbook, "author" | "content">
) => {
  const response = await axios.post(`${API_URL}/guestbooks`, guestbook);
  return response.data;
};

export const getGuestbookById = async (id: string) => {
  const response = await axios.get(`${API_URL}/guestbooks/${id}`);
  return response.data;
};
