import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function Info() {
  return (
    <div className="flex relative mr-auto h-10 w-10">
      <button
        className="flex h-full w-full items-center justify-center rounded-full bg-slate-200"
      >
        <InformationCircleIcon className="h-6 w-6"/>
      </button>
      {/* <aside>
        <h2>How to use netpin</h2>
      </aside> */}
    </div>
  );
}
