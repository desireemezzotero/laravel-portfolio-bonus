import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

function DefaultLayout() {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <main>
        <Outlet />
      </main>

    </>

  )
}

export default DefaultLayout