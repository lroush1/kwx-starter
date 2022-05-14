import * as React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer";
import Header from "../components/header";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  margin:"0 auto",
  textAlign:"center",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <><Header /><main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Oops, you've caught us failing 404ward!</h1>
      <p style={paragraphStyles}>If you get stuck again, we're here for you.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/" className="btn-primary">Go home</Link>
      </p>
    </main><Footer /></>
  )
}

export default NotFoundPage
