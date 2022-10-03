import Link from 'next/link';
import Image from "next/image";
import TopLogo from "../images/knight2.png";

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
        <Image src={TopLogo} />

      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
