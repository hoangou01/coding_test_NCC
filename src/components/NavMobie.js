const NavMobie = () => {
  return (
    <>
      <label
        for="nav_input-mobile"
        className="IconShowListNav Show-Mobile Show-table Show-Mobile-tablet"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{color:'#fff'}}
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </label>
      <input
        type="checkbox"
        hidden
        name="changeAnimation"
        className="nav_input-mobile"
        id="nav_input-mobile"
      />
      <label for="nav_input-mobile" className="nav_overlayout"></label>
      <div className="nav_mobile">
        <label for="nav_input-mobile" className="nav__mobile-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </label>

        <ul className="nav_mobile-lists">
          <li className="nav_mobile-link">
            <a href="#header">Home</a>
          </li>
          <li className="nav_mobile-link">
            <a href="#aboutme">About me</a>
          </li>
          <li className="nav_mobile-link">
            <a href="#mySkills">Skills</a>
          </li>
          <li className="nav_mobile-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav_mobile-link">
            <a href="#contact_section">Contact</a>
          </li>
          <li className="nav_mobile-link">
            <a
              href="https://www.facebook.com/profile.php?id=100009396856849"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className="nav_mobile-link">
            <a
              href="https://github.com/hoangou01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavMobie
