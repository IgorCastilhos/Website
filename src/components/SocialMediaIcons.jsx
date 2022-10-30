const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/igorcastilhos/'
        target='_blank'
        rel='noreferrer'>
        <img src='../assets/linkedin.png' alt='linkedin-link' />
      </a>

      <a
        className='hover opacity-50 transition duration-500'
        href='https://github.com/IgorCastilhos'
        target='_blank'
        rel='noreferrer'>
        <img src='../assets/GitHubIcon.png' alt='github-link' />
      </a>

      <a
        className='hover opacity-50 transition duration-500'
        href='https://www.facebook.com/profile.php?id=100086585395870'
        target='_blank'
        rel='noreferrer'>
        <img src='../assets/facebook.png' alt='facebook-link' />
      </a>

      <a
        className='hover opacity-50 transition duration-500'
        href='https://www.instagram.com/igor_paprocki_dev/'
        target='_blank'
        rel='noreferrer'>
        <img src='../assets/instagram.png' alt='instagram-link' />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
