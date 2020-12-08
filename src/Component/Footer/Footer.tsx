import React from 'react';
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <nav className="float-left">
            <ul>
              <li>
                <a href="#">
                  Selecta
                </a>
              </li>
              <li>
                <a href="#">
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  Blog
                </a>
              </li>
              <li>
                <a href="#">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear())
            </script>, made with <i className="material-icons">favorite</i> by
            <a href="#" target="_blank">Selecta</a> for a better web.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;