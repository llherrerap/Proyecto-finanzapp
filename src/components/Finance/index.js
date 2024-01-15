import React from 'react'
import './Finance.css';
import Footer from "../Footer";

const PersonalFinance = () => {

  return (
    <div>
        <div className="headerFinance">
            <h1>Gestor de Finanzas Personales</h1>
            <div className="containerBotton">
                <a href='/signup' className="datos">Ingresa más datos</a>
            </div>
        </div>
        <div className="ContainerDescription">
            <p className="description">
                A continuación verás un desglose de tus finanzas personales. Recuerda que puedes filtrar por año, mes, dia, categoria de los gastos... Y demás opciones.
            </p>
        </div>
        
        <iframe title="finazapp" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=620c44a5-aca4-46de-9c60-48ade80e2a10&autoAuth=true&ctid=264f4077-fed0-4f80-87d8-1afb10da992f&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
        
    </div>
  )
}

export default PersonalFinance