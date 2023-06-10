import Image from 'next/image';
import Link from 'next/link';

export default function Logo(){
  return(
    <Link href="/">
    <Image
      src="/netpin4.png"
      alt="NetPin Logo"
      width={100}
      height={30}
      priority
    />
    </Link>
  )
}