import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header className="py-3 bg-gray-800">
        <nav className=" text-white">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="text-xl font-bold">
              <a href="/">Movie Ticket</a>
            </div>
            <div>
              <a href="/detail" className="px-4 py-2 rounded hover:bg-gray-900">
                Cart
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="py-3 bg-gray-800">
        <div className="container mx-auto px-4 py-2 text-white text-center">
          <p>Movie Ticket &copy; 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
