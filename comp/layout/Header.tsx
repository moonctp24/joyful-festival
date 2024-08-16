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
        {/* 햄버거! */}
        <div className="navbar__toogleBtn">
          <svg
            width="33"
            height="24"
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hamburger w-[31.76px] h-[22.86px] "
            preserveAspectRatio="none"
          >
            <path
              d="M5.62854 16.7621H26.799M5.62854 12.0002H26.799M5.62854 7.23828H26.799"
              stroke="#1E90FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </nav>
      <svg
        width="100%"
        height="2"
        viewBox="0 0 390 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-3.1px] top-[55.9px]"
        preserveAspectRatio="none"
      >
        <path d="M-3 0.999966L390 1" stroke="#1E90FF" stroke-width="0.2"></path>
      </svg>
    </>
  );
};

export default Header;
