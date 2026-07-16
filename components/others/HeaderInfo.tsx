import CurrentDateAndTime from "./dashboard/CurrentDateAndTime";
import Greeting from "./dashboard/Greeting";

export default function HeaderInfo() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <Greeting />
      <CurrentDateAndTime />
    </div>
  );
}
