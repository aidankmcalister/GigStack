import { PlusIcon } from '@heroicons/react/24/solid'

const NewListingButton = () => {
  return (
    <div className="fixed bottom-8 right-8 cursor-pointer rounded-full bg-main-orange p-3 hover:bg-main-orange/80">
      <PlusIcon className="h-10 w-auto text-white" />
    </div>
  )
}

export default NewListingButton
