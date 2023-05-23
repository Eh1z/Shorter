import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className=' w-full flex justify-between items-center pt-5 mb-10'>
        <img className='w-32 object-contain' src={logo} alt="shorter_logo" />
        <button
          onClick={() => {window.open('https://github.com/Eh1z/Shorter')}}
          className='black_btn'
        >
          Github
        </button>
      </nav>
    </header>
  )
}

export default Hero