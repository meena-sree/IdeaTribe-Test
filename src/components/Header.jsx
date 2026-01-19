import logo from '../assets/logo-gca.png'

export default function Header() {
  return (
    <header className="w-full bg-black border-b border-gray-800">
      <div className="flex justify-center px-10 py-3">
        <img
          src={logo}
          alt="GCA Logo"
          className="h-8 object-contain"
        />
      </div>
    </header>
  );
}
