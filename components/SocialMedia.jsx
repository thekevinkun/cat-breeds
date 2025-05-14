import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const SocialMedia = () => {
  return (
    <>
      <Link
        href="https://www.facebook.com"
        target="_blank"
        className="social-media_icon"
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://www.twitter.com"
        target="_blank"
        className="social-media_icon"
      >
        <FaTwitter />
      </Link>
      <Link
        href="https://www.youtube.com"
        target="_blank"
        className="social-media_icon"
      >
        <TfiYoutube />
      </Link>
      <Link
        href="https://www.linkedin.com"
        target="_blank"
        className="social-media_icon"
      >
        <FaLinkedinIn /> 
      </Link>
      <Link
        href="https://www.instagram.com"
        target="_blank"
        className="social-media_icon"
      >
        <FaInstagram />
      </Link>
    </>
  )
}

export default SocialMedia;