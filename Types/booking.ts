import { beautyPackageType } from './beautyPackage';
import { commonType } from './comon';
import { userType } from './user';

export type bookingType = {
  user: userType;
  beautyPackage: beautyPackageType;
} & commonType;
