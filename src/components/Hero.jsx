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

      <h1 className='head_text'>
        Summarize Articles with<br className='max-md:hidden'/>
        <span className='purple_gradient pt-10'>The Power of GPT-4</span>
      </h1>
      <h2 className='desc'>
      Simplify your reading experience with Shorter, the AI-powered summarizer. Extract key points from any text, effortlessly.
      </h2>
    </header>
  )
}

export default Hero