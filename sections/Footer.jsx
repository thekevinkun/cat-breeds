import Link from "next/link";

import { Button, SocialMedia } from "@/components";

import { footerLinks } from "@/data/menu";

const Footer = ({ zIdx }) => {
  return (
    <footer 
      id="footer" 
      className="footer section__padding"
      style={{
        zIndex: zIdx ? zIdx : 1
      }}
    >
      <div className="footer-content__wrapper">
        <div className="footer-link_list">
          <p className="footer-title">© 2025 CAT BREEDS</p>
          
          {footerLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link} 
              className="footer-link"
              onClick={(e) => e.preventDefault()}
            >
              {item.name}
            </Link>  
          ))}
        </div>

        <div className="footer-social-media">
          <SocialMedia />
        </div>

        <Button 
          text="GET IN TOUCH"
          btnStyles="btn-footer"
          handleClick={() => {}}
        />
      </div>
    </footer>
  )
}

export default Footer;