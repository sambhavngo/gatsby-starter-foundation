/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Made by IT Team of Sambhav with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="/">Stackrole.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer
