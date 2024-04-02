import { useState } from 'react' // Import useState hook
import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import Select from 'react-select'

import { Form, Label, TextField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

export const CREATE_LISTING_MUTATION = gql`
  mutation CreatGigListingMutation($input: CreateGigListingInput!) {
    createGigListing(input: $input) {
      id
      title
      date
      instrumentsWanted
      userId
    }
  }
`

const dropdownOptions = [
  { value: 'guitar', label: 'Guitar' },
  { value: 'piano', label: 'Piano' },
  { value: 'drums', label: 'Drums' },
  { value: 'bass', label: 'Bass' },
  { value: 'voice', label: 'Voice' },
  { value: 'saxophone', label: 'Saxophone' },
  { value: 'violin', label: 'Violin' },
  { value: 'trumpet', label: 'Trumpet' },
  { value: 'flute', label: 'Flute' },
  { value: 'clarinet', label: 'Clarinet' },
  { value: 'harp', label: 'Harp' },
]

const NewListingPopout = ({ open, setOpen, notify }) => {
  const { currentUser } = useAuth()
  const [selectedInstruments, setSelectedInstruments] = useState([]) // State for selected instruments
  const [selectedDate, setSelectedDate] = useState(null) // State for selected date

  const [createGigListing, { loading }] = useMutation(CREATE_LISTING_MUTATION, {
    onCompleted: (data) => {
      notify({
        message: `Gig Listing ${data.createGigListing.title} successfully created.`,
        type: 'success',
      })
      setTimeout(() => setOpen(false), 0)
      setSelectedInstruments([]) // Clear selected instruments
      setSelectedDate(null) // Clear selected date
    },
    onError: (error) => {
      const errorMessage = `Failed to create gig listing: ${error.message}`
      notify({ message: errorMessage, type: 'error' })
    },
    refetchQueries: ['PostedGigsQuery'],
  })

  const handleSubmit = (values) => {
    createGigListing({
      variables: {
        input: {
          ...values,
          userId: currentUser.id,
          instrumentsWanted: selectedInstruments.map(
            (instrument) => instrument.value
          ),
          date: selectedDate, // Include selected date in form submission
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
                      className="rounded-md border px-2 py-1"
                    />
                  </div>

                  <div className="flex flex-col">
                    <Label name="date" className="font-semibold">
                      Date
                    </Label>
                    <DesktopDatePicker
                      value={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      renderInput={(params) => <TextField {...params} />}
                      // Other props as needed
                    />
                  </div>

                  <div className="flex flex-col">
                    <Label name="instrumentsWanted" className="font-semibold">
                      Instruments Wanted
                    </Label>
                    <Select
                      closeMenuOnSelect={false}
                      isMulti
                      options={dropdownOptions}
                      value={selectedInstruments}
                      onChange={setSelectedInstruments}
                      menuPortalTarget={document.body}
                      styles={{
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                      }}
                    />
                  </div>

                  <button className="rounded-md border px-2 py-1" type="submit">
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
