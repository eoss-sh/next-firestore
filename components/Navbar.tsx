import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const user: string | null = null;
  const username: boolean | null = null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" passHref={true}>
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin" passHref={true}>
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref={true}>
                <Image src="" alt="user" />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <li>
            <Link href="/enter" passHref={true}>
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
