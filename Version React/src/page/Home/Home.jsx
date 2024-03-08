//SCSS
import './Home.scss'

//React
import { Link } from 'react-router-dom'

//Import
import Form from '../../components/Form/Form';

function Home() {
  return (
    <>
      <div className="home">
        <h1 className="home__title">HRnet</h1>
        <Link to="/employee-list" className="home__link">View Current Employees</Link>
        <h2 className="home__subtitle">Create Employee</h2>
        <Form />
      </div>
  </>
  );
}
export default Home