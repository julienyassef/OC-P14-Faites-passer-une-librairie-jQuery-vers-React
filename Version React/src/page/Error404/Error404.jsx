//SCSS
import './Error404.scss'

//React
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div class="page-404">
        <h1 class="page-404__title">Error 404</h1>
        <h2 class="page-404__subtitle">Page non trouvée</h2>
        <Link to="/" className="page-404__link">Retour à l'accueil</Link>
    </div>
  )
}
export default Error404