type Props = {
  children: JSX.Element
}

function MainLayout({ children }: Props) {
  return <div className='flex mx-4 mt-12 md:mx-auto md:w-sm lg:w-md xl:w-lg '>{children}</div>
}

export default MainLayout
