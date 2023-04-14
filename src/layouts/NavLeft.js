import NavMobie from "../components/NavMobie";
const NavLeft = () => {
  return (
    <>
      <div class="col-md-2 left_nav hide-Mobile hide-Tablet-Mobile">
        <ul class="list_nav">
          <li class="nav_items">
            <a href="">Home</a>
          </li>
          <li class="nav_items">
            <a href="">Service</a>
          </li>
          <li class="nav_items">
            <a href="">Service</a>
          </li>
          <li class="nav_items">
            <a href="">Service</a>
          </li>
          <li class="nav_items">
            <a href="">Service</a>
          </li>
        </ul>
      </div>
      {<NavMobie/>}
    </>
  );
};
export default NavLeft
