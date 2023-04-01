import { BiErrorAlt } from 'react-icons/bi'

const NotFound = () => {

  return (
    <div className=' w-full h-full flex flex-col gap-3 items-center justify-center bg-white '>
       <BiErrorAlt className=' text-3xl text-red-500' />
      <h1 className=' text-red-500 text-center '>Page Not Found</h1>
    </div>
  )
}

export default NotFound
