import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function Info() {
  return (
    <div className="flex relative mr-auto h-10 w-10">
      <div
        className="flex h-full w-full items-center justify-center rounded-full"
      >
        <InformationCircleIcon className="h-7 w-7"/>
      </div>
    </div>
  );
}
