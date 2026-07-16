import LoggedUserInfo from "../others/header/LoggedUserInfo";
import { Search } from "../others/header/Search";

export default function Header() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
      <Search />
      <LoggedUserInfo />
    </div>
  );
}
