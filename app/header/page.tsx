import Logo from './Logo';
import Search from './Search';
import ButtonGroup from './ButtonGroup';
import { Dispatch, SetStateAction } from "react";

interface PageProps {
  params: {
    setInstructnEnabled: Dispatch<SetStateAction<boolean>>;
  }
}

export default function Header({ params }: PageProps) {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 shadow">
      <Logo/>
      <Search/>
      <ButtonGroup
        params={{setInstructnEnabled: params.setInstructnEnabled}}
      />
    </header>
  );
}
