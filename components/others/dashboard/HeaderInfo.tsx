import CurrentDateAndTime from "./CurrentDateAndTime";
import Greeting from "./Greeting";

export default function HeaderInfo() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <Greeting />
      <CurrentDateAndTime />
    </div>
  );
}
