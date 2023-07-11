export interface UserDetails {
  firstName?: string;
  lastName?: string;
  dob?: string;
  pincode?: string | number;
  gender?: string;
  email?: string;
}

export interface BankDetails {
  name: string;
  number: string | number;
  ifsc: string;
}