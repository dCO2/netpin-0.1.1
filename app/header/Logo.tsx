import Image from 'next/image';

export default function Logo(){
  return(
    <Image
      src="/netpin4.png"
      alt="NetPin Logo"
      width={100}
      height={30}
      priority
    />
  )
}