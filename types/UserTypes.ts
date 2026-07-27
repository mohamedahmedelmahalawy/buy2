//types for profile [User info]
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

//types for performance Scetion [Metrics]
export interface iPerformanceSectionProps {
  value: iMetricData[];
  colors: string[];
}
export interface iMetricData {
  name: string;
  value: number;
}