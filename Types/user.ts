import { bookingType } from './booking';
import { commonType } from './comon';

export type userType = {
  name: string;
  email: string;
  password: string;
  photoUrl: string;
  address?: string;
  phoneNumber?: string;
  role: 'user' | 'admin';
  bookings: bookingType[];
} & commonType;
