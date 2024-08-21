const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="">LOGO</a>
        </div>
        <ul className="navbar__icons">
          <li>
            <button className="acctBtn">로그인</button>
          </li>
          <li>
            <button className="acctBtn">로그아웃</button>
          </li>
          <li>
            <button className="acctBtn">내정보</button>
          </li>
        </ul>
        {/* 햄버거 */}
        <svg
          width="35"
          height="30"
          viewBox="0 0 35 30"
          fill="none"
          className="hamburger"
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
      <nav className="navbar_full">
        <ul className="navbar__menu">
          <li>
            <button className="text-xl menuBtn">국내축제</button>
          </li>
          <li>
            <button className="text-xl menuBtn">세계축제</button>
          </li>
          <li>
            <button className="text-xl menuBtn">관심행사</button>
          </li>
        </ul>
      </nav>
      {/* 가로선 */}
      <svg
        width="100%"
        height="2"
        viewBox="0 0 390 2"
        fill="none"
        className="absolute headerLine"
        preserveAspectRatio="none"
      >
        <path d="M-3 0.999966L390 1" stroke="#1E90FF" strokeWidth="0.2"></path>
      </svg>
      {/* 가로선 */}
    </>
  );
};

export default Header;
