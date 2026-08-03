import { Icon } from "@iconify/react";
import Image from "next/image";

type iUserAvatarProps = {
  userName?: string ;
  userImage?: string | null;
};

export default function UserAvatar({userName, userImage}: iUserAvatarProps) {
  return (
    <>
      {userImage ? (
        <Image
          src={userImage}
          alt={userName??"User Image"}
          width={80}
          height={80}
          className="rounded-[20px]"
        />
      ) : (
        <Icon icon="solar:user-bold" width={80} height={80} color="#B4DBFF" />
      )}
    </>
  );
}
