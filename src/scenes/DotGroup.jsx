import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full 
   before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      <AnchorLink
        href='#home'
        className={`${
          selectedPage === 'home' ? selectedStyles : 'bg-dark-grey'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('home')}
      />

      <AnchorLink
        href='#habilidades'
        className={`${
          selectedPage === 'habilidades' ? selectedStyles : 'bg-dark-grey'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('habilidades')}
      />

      <AnchorLink
        href='#projetos'
        className={`${
          selectedPage === 'projetos' ? selectedStyles : 'bg-dark-grey'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('projetos')}
      />

      <AnchorLink
        href='#sobre'
        className={`${
          selectedPage === 'sobre' ? selectedStyles : 'bg-dark-grey'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('sobre')}
      />

      <AnchorLink
        href='#contato'
        className={`${
          selectedPage === 'contato' ? selectedStyles : 'bg-dark-grey'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('contato')}
      />
    </div>
  );
};

export default DotGroup;
