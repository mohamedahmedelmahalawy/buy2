import Link from "next/link";
import Image from "next/image";
//types
import { iCoupon } from "../Types";
//Data
import { user } from "../Data";
// Rewards icons
import NetflexLogo from "@/public/Rewards/Netflex-logo.png";
import AmazonLogo from "@/public/Rewards/Amazon-logo.png";
import SpotifyLogo from "@/public/Rewards/Spotify-logo.png";
import WaffarhaLogo from "@/public/Rewards/Waffarha-logo.png";

//-----------------------------------
export default function Rewards() {
  return (
    <div className=" flex flex-col p-6 bg-white rounded-[24px] mt-4">
      <div className="flex justify-between">
        <div>
          <p className="text-[16px]">Rewards</p>
          <p className="text-[10px] text-muted-foreground">
            Purchase these rewards at the store.
          </p>
        </div>
        <Link href="/rewards" className="text-[14px] text-[#756EF3]">
          View All
        </Link>
      </div>

      {/* Rewards Section */}
      <div className=" flex flex-row gap-4 mt-6 overflow-x-auto scrollbar-none ">
        {user.couponData.map((coupon, id) => (
          <CouponCard key={id} coupon={coupon} />
        ))}
      </div>
    </div>
  );
}

function CouponCard({ coupon }: { coupon: iCoupon }) {
  return (
    <div className="w-18.25 h-16.75 flex items-center justify-center p-1.75 bg-gray-100 rounded-lg shrink-0">
      <Image
        src={
          coupon.title === "Amazon"
            ? AmazonLogo
            : coupon.title === "Netflix"
              ? NetflexLogo
              : coupon.title === "Spotify"
                ? SpotifyLogo
                : WaffarhaLogo
        }
        alt={coupon.title}
      />
    </div>
  );
}
