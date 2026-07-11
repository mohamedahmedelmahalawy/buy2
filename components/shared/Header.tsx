import LoggedUserInfo from "../others/LoggedUserInfo";
import { Search } from "../others/Search";

export default function Header() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
      <Search />
      <LoggedUserInfo />
    </div>
  );
}
