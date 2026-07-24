import Rewards from '@/components/others/profile/RewardsSection/Rewards'
import UserInfo from '@/components/others/profile/UserSection/UserInfo'

export default function Profile() {
  return (
    <div className="flex flex-col gap-4">
      <UserInfo />
      <Rewards />
    </div>

  )
}
