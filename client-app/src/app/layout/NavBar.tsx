type Props = {
  onCreateActivityClick: () => void
}

function NavBar({ onCreateActivityClick }: Props) {
  return (
    <nav className='bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center w-full h-20 text-white'>
      <div className='flex items-center justify-between px-2 w-full md:px-0 md:w-sm lg:w-md xl:w-lg font-medium'>
        <div className='flex items-center gap-2'>
          <img className='w-10' src='/assets/logo.png' alt='logo' />
          <h1 className='text-xl'>Reactivities</h1>
        </div>
        <ul className='flex items-center gap-4'>
          <li>Activities</li>
          <span className='relative h-16 border-l-[1px] border-gray-400' />
          <li>
            <button
              onClick={onCreateActivityClick}
              className='bg-green-500 px-3 py-1 rounded-md font-medium'
              type='button'
            >
              Create Activity
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
// linear-gradient(135deg, rgb(24,42,115) 0%, rgb(33, 138, 174) 69%, rgb(32, 167, 172) 89%)
