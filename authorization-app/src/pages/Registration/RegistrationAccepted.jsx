import { Link } from 'react-router-dom';

function RegistrationAccepted() {
  return (
    <div className='accepted'>
      <p className='accepted__text'>
        Login account has been created!
      </p>
      <div className='accepted__btn'>
        <Link to='/' className='link accepted__link'>
          Home
        </Link>
        <Link to='../login' className='link accepted__link'>
          Log In
        </Link>
      </div>
    </div>
  )
}

export default RegistrationAccepted;