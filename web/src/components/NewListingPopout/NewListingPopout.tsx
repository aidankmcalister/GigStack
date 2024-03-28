import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import { Form, Label, TextField, DateField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

export const CREATE_LISTING_MUTATION = gql`
  mutation CreatGigListingMutation($input: CreateGigListingInput!) {
    createGigListing(input: $input) {
      id
      title
      date
      userId
    }
  }
`

const NewListingPopout = ({ open, setOpen, notify }) => {
  const { currentUser } = useAuth()

  const [createGigListing, { loading }] = useMutation(CREATE_LISTING_MUTATION, {
    onCompleted: (data) => {
      notify({
        message: `Gig Listing ${data.createGigListing.title} successfully created.`,
        type: 'success',
      })
      setTimeout(() => setOpen(false), 0)
    },
    onError: (error) => {
      const errorMessage = `Failed to create gig listing: ${error.message}`
      notify({ message: errorMessage, type: 'error' })
    },
    refetchQueries: ['GigListingsQuery'],
  })

  const handleSubmit = (values) => {
    createGigListing({
      variables: {
        input: {
          ...values,
          userId: currentUser.id,
        },
      },
    })
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <Form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4"
                >
                  <div className="flex flex-col">
                    <Label name="title" className="font-semibold">
                      Title
                    </Label>
                    <TextField
                      name="title"
                      validation={{ required: true }}
                      className="border rounded-md px-2 py-1"
                    />
                  </div>

                  <div className="flex flex-col">
                    <Label name="date" className="font-semibold">
                      Date
                    </Label>
                    <DateField name="date" />
                  </div>

                  <button className="px-2 py-1 border rounded-md" type="submit">
                    Submit
                  </button>
                </Form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NewListingPopout
