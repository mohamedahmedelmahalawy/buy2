//types
export interface iUser {
  name: string;
  email: string;
  image?: string | null;
  role: string;
  phoneNumber: string;
  totalPoints: number;
  couponData: iCoupon[];
}
export interface iCoupon {
  id: number;
  title: string;
  code: string;
  discount: number;
}