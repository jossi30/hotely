import Link from "next/link"
import { FaInstagram,FaFacebook,FaTwitter } from 'react-icons/fa';

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
        <li>
            <Link href='/'>
                <FaInstagram />
            </Link>
        </li>
        <li>
            <Link href='/'>
                <FaFacebook />
            </Link>
        </li>
        <li>
            <Link href='/'>
                <FaTwitter />
            </Link>
        </li>
    </ul>
  )
}

export default Socials
