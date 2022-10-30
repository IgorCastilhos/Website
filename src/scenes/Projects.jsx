import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 duration-500
  bg-grey z-30 flex flex-col justify-center  items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className='relative'>
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id='projetos' className='pt-48 pb-48'>
      {/* HEADINGS */}
      <motion.div
        className='md:w-2/5 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}>
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-redd'>PRO</span>JETOS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-1/3' />
          </div>
        </div>

        <p className='mt-10 mb-10'>
          Todos estes projetos podem ser encontrados no meu{' '}
          <a href='https://github.com/IgorCastilhos'>Github</a>
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}>
          {/* ROW 1 */}
          <div
            className='flex justify-center text-center items-center p-10 bg-git
            max-w-[400px] max-h-[400px] text-8xl font-arial font-semibold'>
            <a
              className='hover opacity-100 transition duration-500'
              href='https://github.com/IgorCastilhos'
              target='_blank'
              rel='noreferrer'>
              <img src='../assets/GitHubBig.png' alt='github-link' />
            </a>
          </div>
          <Project title='Glowing Icons' />
          <Project title='QR Code Card' />

          {/* ROW 2 */}
          <Project title='Employee Registration' />

          <div
            className='flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-9xl font-arial font-semibold'>
            <a
              className='hover opacity-100 transition duration-500'
              href='mailto:igorcastilhos2010@hotmail.com'
              rel='noreferrer'>
              <img src='../assets/outlook.png' alt='email-link' />
            </a>
          </div>

          <Project title='Calculator' />

          {/* ROW 3 */}
          <Project title='Carousel Review' />
          <Project title='NFT Preview Card' />
          <div
            className='flex justify-center text-center items-center p-10 bg-pink
              max-w-[400px] max-h-[400px] text-7xl font-arial font-semibold'>
            <a
              className='hover opacity-100 transition duration-500'
              href='https://www.instagram.com/igor_paprocki_dev/'
              target='_blank'
              rel='noreferrer'>
              <img src='../assets/instagrambig.png' alt='instagram-link' />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
