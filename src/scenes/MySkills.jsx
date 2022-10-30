import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px');

  return (
    <section id='habilidades' className='pt-10 pb-24'>
      {/* HEADER AND IMAGE SECTION */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <p className='font-playfair font-semibold text-4xl mb-5'>
            MINHAS <span className='text-redd'>HABILIDADES</span>
          </p>
          <LineGradient width='w-1/2' />
          <p className='mt-10 mb-7'>
            Falando um pouco sobre as minhas Soft Skills
          </p>
        </motion.div>

        <div className='mt-16 md:mt-0'>
          {isAboveMediumScreens ? (
            <div
              className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
            before:w-full md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]'>
              <img
                alt='habilidades'
                className='z-10'
                src='assets/skills-image.png'
              />
            </div>
          ) : (
            <img
              alt='habilidades'
              className='z-10'
              src='assets/skills-image.png'
            />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* COMMUNICATIVE */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>01</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Comunicador
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
          </div>
          <p className='mt-5'>
            Profissional que transmite mensagens objetivamente, aumentando a
            performance e o alcance da comunicação.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>02</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Inovador
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-redd absolute right-0 top-0 z-[-1]' />
          </div>
          <p className='mt-5'>
            Movido a inovação, busco sempre aprender e integrar novas dinâmicas
            que possam ajudar o time a desempenhar de forma mais eficiente
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>03</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Imaginador
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
          </div>
          <p className='mt-5'>
            Meu objetivo é atuar na criação de aplicações que possam melhorar
            continuamente a vida das pessoas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
