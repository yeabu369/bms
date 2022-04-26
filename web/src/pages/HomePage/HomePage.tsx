import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="የመጽሓፍ ዝርዝር" description="Home page" />

      <h1>
        <Link to={routes.home()}>የመጽሓፍ ዝርዝር</Link>
      </h1>
    </>
  )
}

export default HomePage
