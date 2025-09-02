import { useState ,useEffect,  useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Works  from './Works.jsx'
import { WORKS } from './Works.data'

function App() {
  const [count,setCount] = useState(1)
  const aref1 = useRef(null)
  const aref2 = useRef(null)
  const div1 = useRef(null)
  const div2 = useRef(null)
  const div3 = useRef(null)
  const div4 = useRef(null)
  const scroll = () => document.querySelector('.anim-scroll').scrollTo({ top: 4000, behavior: 'smooth' })
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && aref1.current) {
          aref1.current.classList.add('a-anim1');
          aref2.current.classList.add('a-anim2');
          
        }
      },
      {
        threshold: 0.5, // Запускаем анимацию, когда 10% элемента видно
      }
    );

    if (aref1.current) {
      observer.observe(aref1.current);
    }

    return () => {
      if (aref1.current) {
        observer.unobserve(aref1.current);
      }
    };
  }, []);
  
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && aref1.current) {
          setCount(1)
        }
      },
      {
        threshold: 0.5, // Запускаем анимацию, когда 10% элемента видно
      }
    );

    if (div1.current) {
      observer.observe(div1.current);
    }

    return () => {
      if (div1.current) {
        observer.unobserve(div1.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && aref1.current) {
          setCount(2)
        }
      },
      {
        threshold: 0.5, // Запускаем анимацию, когда 10% элемента видно
      }
    );

    if (div2.current) {
      observer.observe(div2.current);
    }

    return () => {
      if (div2.current) {
        observer.unobserve(div2.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && aref1.current) {
          setCount(3)
          scroll()
        }
      },
      {
        threshold: 0.5, // Запускаем анимацию, когда 10% элемента видно
      }
    );

    if (div3.current) {
      observer.observe(div3.current);
    }

    return () => {
      if (div3.current) {
        observer.unobserve(div3.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && aref1.current) {
          setCount(4)
        }
      },
      {
        threshold: 0.5, // Запускаем анимацию, когда 10% элемента видно
      }
    );

    if (div4.current) {
      observer.observe(div4.current);
    }

    return () => {
      if (div4.current) {
        observer.unobserve(div4.current);
      }
    };
  }, []);
   const scrollToMain = () => {
    div1.current.scrollIntoView({ behavior: 'smooth' });
  };
   const scrollToAbout = () => {
    div2.current.scrollIntoView({ behavior: 'smooth' });
  };
   const scrollToWorks = () => {
    div3.current.scrollIntoView({ behavior: 'smooth' });
  };
   const scrollToContacts = () => {
    div4.current.scrollIntoView({ behavior: 'smooth' });
  };



   console.log(count)
  return (
    <> 
   { count === 1 ? '': <div className='fixed transition-all bottom-[0%] md:top-[35vh]  right-[0vw] z-3 w-[100%] md:w-[10.5%] h-[8.5vh] md:h-[30vh] md:p-[3vmin] flex flex-row md:flex-col md:items-center justify-between rounded-3xl ' >
      <button onClick={scrollToMain} className='flex flex-col md:flex-row items-center md:justify-between w-full md:h-[24%] active:scale-95 font-inter-bold text-white/75 opacity-25 hover:opacity-100 transition-all' >
      <h1>Главная</h1>
      <div className='rounded-full bg-white/85 h-[2vmin] w-[2vmin]' ></div>
      </button>
      <button onClick={scrollToAbout} className={`flex flex-col md:flex-row items-center  md:justify-between w-full md:h-[24%] active:scale-95 font-inter-bold text-white/75 hover:opacity-100 transition-all ${count === 2 ? '':'opacity-25 transition-all'}`} >
      <h1>Обо мне</h1>
      <div className='rounded-full bg-white/85 h-[2vmin] w-[2vmin]' ></div>
      </button>
      <button onClick={scrollToWorks} className={`flex flex-col md:flex-row items-center  md:justify-between w-full md:h-[24%] active:scale-95 font-inter-bold text-white/75 hover:opacity-100 transition-all ${count === 3 ? '':'opacity-25 transition-all'}`} >
      <h1>Работы</h1>
      <div className='rounded-full bg-white/85 h-[2vmin] w-[2vmin]' ></div>
      </button>
      <button onClick={scrollToContacts} className={`flex flex-col md:flex-row items-center  md:justify-between w-full md:h-[24%] active:scale-95 font-inter-bold text-white/75 hover:opacity-100 transition-all ${count === 4 ? '':'opacity-25 transition-all'}`}>
      <h1>Контакты</h1>
      <div className='rounded-full bg-white/85 h-[2vmin] w-[2vmin]' ></div>
      </button>
    </div>}
     <div ref={div1} className='w-[100vw] h-[100vh] bg-1' >
      <div  className='mx-auto  hs-anim1 pt-[15vh] text-center flex items-center justify-center flex-col' >
        <h3 className='md:text-2xl text-2xs font-inter-bold text-white/80' >Привет, меня зовут</h3>
        <h1 className='p-[1vmin] text-6xl md:text-7xl font-exo-bold bg-clip-text text-transparent bg-linear-30 from-blue-400 via-cyan-100/90 to-sky-400/80' >Матвей Синицкий</h1>
        <h2 className='p-[2.5vmin] md:p-[1vmin] md:text-xl text-xs font-inter-bold text-white/80' >Я занимаюсь разработкой Landing page's<br/> и Версткой сайтов</h2>
      </div>
      <div className='mx-auto flex hs-anim2  font-inter-bold flex-col md:flex-row items-center w-[80%] md:w-[48%] mt-[35.5%] md:mt-[25%]  p-[1.5vmin] justify-between' >
        <button onClick={scrollToAbout} className='hs-b' >Обо мне</button>
        <button onClick={scrollToWorks} className='hs-b'>Мои работы</button>
        <button onClick={scrollToContacts} className='hs-b'>Контакты</button>
      </div>
     </div>
     <div ref={div2} className='w-[100vw] h-auto md:h-[100vh] flex flex-col relative bg-2' >
      <h1 ref={aref1} className='font-exo-bold absolute  left-[25%] top-[15%] md:top-[45%] w-[50%] text-center text-white/70 text-8xl' >Обо мне</h1>
      <div ref={aref2} className='w-full h-full  opacity-0 p-[10vmin]' >
        <h1 className='text-4xl font-exo-bold text-white/70' >Обо мне:</h1>
        <p className='text-white/70 mt-[5vh]  md:text-3xl md:leading-10.5 font-inter' >Я, Матвей Синицкий,  фронтенд-разработчик, специализирующийся на создании современных, адаптивных и функциональных веб-интерфейсов.
В своей работе я придерживаюсь принципов написания чистого и структурированного кода, уделяю внимание деталям и стремлюсь к постоянному профессиональному развитию.<br/> Моя цель — создавать надежные и эстетически привлекательные решения, которые способствуют достижению бизнес-целей. Готов внести свой вклад в ваш проект и обеспечить его успех.</p>
      <div className='w-full  mt-[10.5%] flex flex-col' >
        <p className='text-3xl text-white/75 font-exo-bold' >Я могу работать с такими инструментами как:</p>
        <div className='flex flex-col md:flex-row  w-[100%] mb-[22.5%] md:mb-[0] items-center backdrop-blur-2xl bg-white/3 shadow-2xl shadow-white/3 rounded-3xl mt-[5vh] justify-evenly md:justify-between' >
          <div className='flex flex-col p-[3vmin] text-center md:w-[18%] h-[25vh]' >
          <img src='./react.png' className='md:w-[80%] h-[80%]  mx-auto' ></img>
          <h1 className='text-2xl text-cyan-400 font-exo-bold p-[1vmin]' >React</h1>
          </div>
            <div className='flex flex-col p-[3vmin] text-center md:w-[18%] h-[25vh]' >
          <img src='./tailwind.png' className='md:w-[80%] h-[80%] mx-auto' ></img>
          <h1 className='text-2xl text-sky-400 font-exo-bold p-[1vmin]' >Tailwind Css</h1>
          </div>
          <div className='flex flex-col p-[3vmin] text-center md:w-[18%] h-[25vh]' >
          <img src='./java.png' className='md:w-[80%] h-[80%] mx-auto' ></img>
          <h1 className='text-2xl text-yellow-300 font-exo-bold p-[1vmin]' >Java Script</h1>
          </div>
            <div className='flex flex-col p-[3vmin] text-center md:w-[18%] h-[25vh]' >
          <img src='./css.png' className='md:w-[65%] h-[80%] mx-auto' ></img>
          <h1 className='text-2xl text-blue-400 font-exo-bold p-[1vmin]' >CSS</h1>
          </div>
          <div className='flex flex-col p-[3vmin] text-center md:w-[18%] h-[25vh]' >
          <img src='./html.png' className='md:w-[65%] h-[80%] mx-auto' ></img>
          <h1 className='text-2xl text-orange-500 font-exo-bold p-[1vmin]' >HTML</h1>
          </div>
        </div>
      </div>
      </div>
     </div>
     <div ref={div3} className='w-[100vw] h-[100vh] bg-3 flex md:flex-row justify-center flex-col-reverse md:justify-between items-center' >
    <div className='md:w-[55vw] w-[100vw]  scroll-bar-none anim-scroll h-[50vh] mt-[10%] md:mt-[0]  md:h-[100%] overflow-scroll p-[1.5vmin] backdrop-blur-3xl shadow-2xl flex flex-col items-center  md:justify-between  shadow-stone-200/5 bg-white/5'  >
      {WORKS.map(work => <Works
      img={work.img}
      name={work.Name}
      link={work.link}
      />)} 
      </div>
     <h1 className='md:mr-[10%] text-5xl md:text-6xl md:w-[25%]  text-center font-exo-bold bg-clip-text text-transparent bg-linear-30 from-blue-400 via-cyan-100/90 to-sky-400/80' >Мои работы</h1>
     
     </div>
     <div ref={div4} className='w-[100vw] h-[80vh] items-center justify-center  p-[5vmin] flex flex-col' >
     
      <div className='flex hover:scale-105 transition-all w-[50%] flex-row hover:cursor-pointer items-center font-inter-bold text-white/85' >
      <img src='./tg.webp' className='w-[8vw]' ></img>
      <a className='underline text-3xl' href='https://matveysinitckiy.github.io/portfolio/' >Мой Телеграм</a>
      </div>
     </div>
    </>
  )
}

export default App
