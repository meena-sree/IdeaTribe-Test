export default function Menu() {
  return (
    <nav className="w-full bg-black">
      <ul className="flex justify-center gap-10 py-4 text-sm">
        <li className="cursor-pointer hover:text-blue-400 transition">
          Home
        </li>

        <li className="relative group cursor-pointer hover:text-blue-400 transition">
          About
          <ul className="absolute hidden group-hover:block bg-gray-900 mt-3 rounded shadow-lg min-w-[160px]">
            <li className="px-4 py-2 hover:bg-gray-700">Who We Are</li>
            <li className="px-4 py-2 hover:bg-gray-700">Mission</li>
          </ul>
        </li>

        <li className="relative group cursor-pointer hover:text-blue-400 transition">
          Courses
          <ul className="absolute hidden group-hover:block bg-gray-900 mt-3 rounded shadow-lg min-w-[160px]">
            <li className="px-4 py-2 hover:bg-gray-700">Beginner</li>
            <li className="px-4 py-2 hover:bg-gray-700">Advanced</li>
          </ul>
        </li>

        <li className="cursor-pointer hover:text-blue-400 transition">
          Certifications
        </li>
      </ul>
    </nav>
  );
}
