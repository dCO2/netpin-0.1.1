import Logo from './Logo';
import Search from './Search';
import ButtonGroup from './ButtonGroup';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 shadow">
      <Logo/>
      <Search/>
      <ButtonGroup/>
    </header>
  );
}
