const TopHeader = () => {
  return (
    <div className='home-top d-flex justify-between'>
      <div className='information'>
        <a href='tel:+977-9860088834'>+977-9860088834</a>
        <a href='mailto:sumanstha999@gmail.com'>sumanstha999@gmail.com</a>
      </div>
      <div className='language'>
        <ul className='nav d-flex'>
          <li className='active'>
            <a href='#'>EN</a>
          </li>
          <li>
            <a href='#'>DE</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
