import Logo from './Logo';
import Search from './Search';
import ButtonGroup from './ButtonGroup';
import { Dispatch, SetStateAction } from "react";

interface Props {
  setInstructnEnabled: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setInstructnEnabled }: Props) {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 shadow">
      <Logo/>
      <Search/>
      <ButtonGroup
        setInstructnEnabled={setInstructnEnabled}
      />
    </header>
  );
}
