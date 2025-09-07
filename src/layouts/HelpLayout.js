import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Quis laboris do velit sunt veniam exercitation exercitation ullamco quis
        sunt nisi do labore. Sunt consequat cupidatat nulla quis enim deserunt
        nisi anim est et ex. Labore sunt quis consequat do eiusmod elit.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
