//SCSS
import './Home.scss'

//React
import { Link } from 'react-router-dom'

//Import
import Form from '../../components/Form/Form';

function Home() {
  return (
    <>
      <div className="title">
        <h1 className="title">HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list" className="small-button">
          View Current Employees
        </Link>
        <h2 className="subtitle">Create Employee</h2>
        <Form />
      </div>
    </>
  );
}
export default Home