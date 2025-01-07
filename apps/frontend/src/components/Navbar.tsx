
type SelectedType = "home" | "problems" | "contests"


export const Navbar = ({selected} : {selected : SelectedType}) => {
    return <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 px-4">
    <div className="flex max-w-5xl mx-auto items-center justify-between py-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codddy</span>
      </a>

      <div className="" id="navbar-dropdown">
        <ul className="flex rounded-lg md:space-x-8">
          <li>
            <a href="/" className={`block py-2 px-3 ${selected == "home" ? "text-blue-400" : "text-white"}`} aria-current="page">Home</a>
          </li>
          <li>
            <a href="/problems" className={`block py-2 px-3 ${selected == "problems" ? "text-blue-400" : "text-white"}`}>Problems</a>
          </li>
          <li>
            <a href="/contests" className={`block py-2 px-3 ${selected == "contests" ? "text-blue-400" : "text-white"}`}>Contest</a>
          </li>
          <li>
            <a href="#" className={`block py-2 px-3 text-white`}>Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}