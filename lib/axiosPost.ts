import { userType } from '@/Types/user';
import axios from 'axios';
import toast from 'react-hot-toast';

export const axiosPost = async (
  endpoint: string,
  data: Pick<userType, 'email' | 'password'>,
  token: string = ''
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data) {
      return res.data;
    }
  } catch (error: any) {
    toast.error(error.response?.data?.message);
  }
};
