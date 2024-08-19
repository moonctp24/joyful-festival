const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <i className="fas fa-dog"></i>
          <a href="">LOGO</a>
        </div>
        <ul className="navbar__menu">
          <li>
            <a href="" className="text-xl">
              국내축제
            </a>
          </li>
          <li>
            <a href="" className="text-xl">
              세계축제
            </a>
          </li>
          <li>
            <a href="" className="text-xl">
              관심행사
            </a>
          </li>
        </ul>
        <ul className="navbar__icons">
          <li>
            <i className="far fa-building">h</i>
          </li>
          <li>
            <i className="fas fa-home">z</i>
          </li>
        </ul>
        {/* 햄버거 */}
        <svg
          width="35"
          height="30"
          viewBox="0 0 35 30"
          fill="none"
          className="navbar__toogleBtn hamburger"
          preserveAspectRatio="none"
        >
          <path
            d="M5.83337 21.25H29.1667M5.83337 15H29.1667M5.83337 8.75H29.1667"
            stroke="#1E90FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        {/* 햄버거 */}
      </nav>
      {/* 가로선 */}
      <svg
        width="100%"
        height="2"
        viewBox="0 0 390 2"
        fill="none"
        className="absolute"
        preserveAspectRatio="none"
      >
        <path d="M-3 0.999966L390 1" stroke="#1E90FF" strokeWidth="0.2"></path>
      </svg>
      {/* 가로선 */}
    </>
  );
};

export default Header;
