import { useState, useEffect } from 'react'

import { Form, TextField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      email
    }
  }
`

const UserInfoForm = ({ user }) => {
  const [name, setName] = useState(user.name || '')
  const [email, setEmail] = useState(user.email || '')

  const [updateUser, { loading }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: (data) => {
      // notify({
      //   message: `Gig Listing ${data.updateUser.title} successfully updated.`,
      //   type: 'success',
      // })
    },
    onError: (error) => {
      const errorMessage = `Failed to update gig listing: ${user.name}`
      // notify({ message: errorMessage, type: 'error' })
    },
    refetchQueries: ['UserQuery'],
  })

  const handleSubmit = (values) => {
    updateUser({
      variables: {
        id: user.id,
        input: {
          ...values,
        },
      },
    })
  }

  const textFieldClasses = 'border rounded-md px-2 py-1 '

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="flex w-96 flex-col items-center space-y-6  rounded-md border bg-main-white-brighter p-5 shadow-sm"
      >
        <img
          src={`https://robohash.org/${user.id}`}
          alt={user.email || user.name}
          className="w-20 rounded-full"
        />

        <div className="flex w-full flex-col">
          <label htmlFor="name">Name:</label>
          <TextField
            className={`${textFieldClasses}`}
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* <div className="flex flex-col w-full">
          <label htmlFor="location">Location:</label>
          <TextField
            className={`${textFieldClasses}`}
            id="location"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter your location"
          />
        </div> */}

        {/* <div className="flex flex-col w-full">
          <label htmlFor="instruments">Instruments Played:</label>
          <TextField
            className={`${textFieldClasses}`}
            id="instruments"
            name="instruments"
            value={instruments.join(',')}
            onChange={handleInstrumentsChange}
            placeholder="Enter instruments played (separated by commas)"
          />
        </div> */}

        <div className="flex w-full flex-col">
          <label htmlFor="email">Email:</label>
          <TextField
            className={`${textFieldClasses}`}
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <button className="rounded-md border px-2 py-1" type="submit">
          Submit
        </button>
      </Form>
    </div>
  )
}

export default UserInfoForm
