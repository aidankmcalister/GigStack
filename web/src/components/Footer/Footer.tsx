import { MusicalNoteIcon } from '@heroicons/react/24/solid'

import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <div className="my-16 flex w-full flex-col items-center justify-center space-y-3">
      <Link to={routes.home()} className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <MusicalNoteIcon className="h-8 w-auto text-main-orange" />
      </Link>
      <div className='flex space-x-4'>
        <Link
          to={routes.home()}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Gigs
        </Link>
        <Link
          to={routes.profile()}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Profile
        </Link>
        <Link
          to={routes.attendingGigs()}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Attending Gigs
        </Link>
        <Link
          to={routes.postedGigs()}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Posted Gigs
        </Link>
      </div>
    </div>
  )
}

export default Footer
