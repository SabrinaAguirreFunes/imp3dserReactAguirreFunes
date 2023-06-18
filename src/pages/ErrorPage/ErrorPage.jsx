import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {

    const navigate = useNavigate();

    useEffect(() =>{
        setTimeout(() => {
            navigate("/");
        }, 3000);
    }, [])


  return (
    <div>
        <h1>Página no encontrada. </h1>
        <h2>Redireccionando a Home</h2>
    </div>
  )
}

export default ErrorPage