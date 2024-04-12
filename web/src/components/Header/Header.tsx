import { useEffect, useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

export default function Example() {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentUserName, setCurrentUserName] = useState('')

  return (
    <header className="bg-main-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={routes.home()} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <MusicalNoteIcon className="h-8 w-auto text-main-orange" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to={routes.home()}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Gigs
          </Link>
          {isAuthenticated && (
            <>
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
            </>
          )}
        </div>
        {isAuthenticated && currentUser ? (
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <div className="flex items-center space-x-2 rounded-md bg-main-white-brighter px-3 py-2 shadow-sm">
              <img
                src={`https://robohash.org/${currentUser.id}`}
                alt={currentUser.name}
                className="w-7 rounded-full border "
              />
            </div>
            <button
              onClick={logOut}
              className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <Link
              to={routes.login()}
              className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
            >
              Log in
            </Link>
            <Link
              to={routes.signup()}
              className="rounded-md bg-main-orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-main-orange/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </Link>
          </div>
        )}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-main-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between gap-x-6">
            <Link to={routes.home()} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <MusicalNoteIcon className="h-8 w-auto text-main-orange" />
            </Link>
            {!isAuthenticated && currentUser ? (
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to={routes.signup()}
                className="ml-auto rounded-md bg-main-orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-main-orange/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </Link>
            ) : (
              <></>
            )}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to={routes.home()}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-main-orange/30"
                >
                  Gigs
                </Link>
                {isAuthenticated && currentUser ? (
                  <>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      to={routes.profile()}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-main-orange/30"
                    >
                      Profile
                    </Link>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      to={routes.attendingGigs()}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-main-orange/30"
                    >
                      Attending Gigs
                    </Link>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      to={routes.postedGigs()}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-main-orange/30"
                    >
                      Posted Gigs
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="py-6">
                {isAuthenticated && currentUser ? (
                  <div>
                    <img
                      src={`https://robohash.org/${currentUser.id}`}
                      alt={currentUser.name}
                      className="w-7 rounded-full border"
                    />
                    <button
                      onClick={logOut}
                      className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-start text-base font-semibold leading-7 text-gray-900 hover:bg-main-orange/30"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to={routes.login()}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-main-orange/30"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
