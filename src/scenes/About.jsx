import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const About = () => {
  const aboutStyles = `mx-auto relative max-w-[800px] h-[450px] flex flex-col
    justify-center p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id='sobre' className='pt-32 pb-16'>
      {/* HEADING */}
      <motion.div
        className='md:w-1/3 text-center md:text-left'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
        <p className='font-playfair font-semibold text-4xl mb-5 text-redd'>
          SOBRE
        </p>
        <LineGradient width='mr-auto w-1/3' />
      </motion.div>

      {/* ABOUT */}
      <div className='md:flex md:justify-between gap-20'>
        <a
          href='https://www.unisinos.br/'
          target='_blank'
          rel='noopener noreferrer'>
          <motion.div
            className={`bg-uni ${aboutStyles} before:content-university1`}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}>
            <p className='font-playfair text-2xl'>
              Estudante de Sistemas de Informação na Unisinos
            </p>
          </motion.div>
        </a>

        <a
          href='https://www.banrisul.com.br/'
          target='_blank'
          rel='noopener noreferrer'>
          <motion.div
            className={`bg-bank ${aboutStyles} before:content-bank`}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}>
            <p className='font-playfair text-2xl'>
              Experiência de estágio no Banrisul
            </p>
          </motion.div>
        </a>

        <a
          href='https://www.rocketseat.com.br/'
          target='_blank'
          rel='noopener noreferrer'>
          <motion.div
            className={`bg-purple ${aboutStyles} before:content-rocketseatimg`}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}>
            <p className='font-playfair text-2xl'>
              Estudante da trilha Ignite na Rocketseat
            </p>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default About;
