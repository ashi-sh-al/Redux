import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-(--c2) px-10 py-6">
        <Link to='/' className="font-semibold text-2xl">Media Search</Link>
        <div className="flex gap-5 items-center">
          <Link className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2 " to="/">Search</Link>
          <Link className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2 " to="/collection">CollectionPage </Link>
        </div>
      </div>
  )
}

export default Navbar
