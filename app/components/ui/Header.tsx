import Logo from "app/assets/logo.jpg";

function Header() {
  return (
    <header className="bg-grey-0 px-8 py-6 border-b border-grey-100">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <span className="sr-only">Logo</span>
          <img className="w-10 h-10 rounded-full" src={Logo} alt="Logo" />
          <h1 className="text-2xl font-semibold">Proflow</h1>
        </div>
        <ul>
          <li className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
              <p className="text-white text-xl font-medium">JD</p>
            </div>
            <h2 className="text-lg font-semibold ml-2">John Doe</h2>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
