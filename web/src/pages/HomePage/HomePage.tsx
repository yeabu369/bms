import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="የመጽሓፍ ዝርዝር" description="Home page" />

      <nav className="flex justify-around items-center border p-10">
        <h4 className="text-lg font-medium">
          <Link to={routes.home()}>የመጽሓፍ ዝርዝር | Books List</Link>
        </h4>
        <div className="pl-2 flex items-center border rounded-sm h-10 hover:border-blue-900 focus-within:border-blue-900">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 text-gray-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 11a6 6 0 10-12 0 6 6 0 0012 0zm-6-8a8 8 0 110 16 8 8 0 010-16z"
                fill="#76808F"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.586 22L15 16.414 16.414 15 22 20.586 20.586 22z"
                fill="#76808F"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="search"
            onChange={() => {}}
            placeholder="Search"
            className="px-3 outline-none text-sm w-full h-full"
          />
        </div>
      </nav>
    </>
  )
}

export default HomePage
