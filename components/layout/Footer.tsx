function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">JOYFUL FESTIVAL</h1>

        <h2>Contact</h2>

        <address>
          {"100, Eulji-ro, Jung-gu, Seoul, Republic of Korea"}
          <br />

          <a className="footer__btn" href="mailto:example@gmail.com">
            Email Us
          </a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media Test</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Online</a>
            </li>

            <li>
              <a href="#">Print</a>
            </li>

            <li>
              <a href="#">Alternative Ads</a>
            </li>
          </ul>
        </li>

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Technology</h2>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="#">Next.js</a>
            </li>

            <li>
              <a href="#">Typescript</a>
            </li>

            <li>
              <a href="#">Tailwind CSS</a>
            </li>

            <li>
              <a href="#">VSCode</a>
            </li>

            <li>
              <a href="#">MacOS</a>
            </li>

            <li>
              <a href="#">Vercel</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2024 Something. All rights reserved.</p>

        <div className="legal__links">
          <span>
            Made with <span className="heart">♥</span> remotely from Anywhere
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
