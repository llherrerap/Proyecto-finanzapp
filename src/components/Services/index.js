import React from 'react'
import Icon1 from '../../images/svg-6.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-4.svg'
import Icon4 from '../../images/svg-7.svg'
import { ServicesContainer, 
    ServicesH1, 
    ServicesCard, 
    ServicesH2, 
    ServicesIcon, 
    ServicesP, 
    ServicesWrapper
} from './servicesElementes'

const Services = () => {
  return (
    <>
        <ServicesContainer id="services">
            <ServicesH1>Nuestros Servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Ahorra</ServicesH2>
                    <ServicesP>Analizar tus finanzas te ayudará a generar un mejor plan de ahorro.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Optimiza</ServicesH2>
                    <ServicesP>Tus finanzas serán analizadas constantemente mediante graficos.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Gestiona</ServicesH2>
                    <ServicesP>Ingresa tus gastos e ingresos y FinanzApp hará en resto por ti.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Analiza</ServicesH2>
                    <ServicesP>Visualiza tus finanzas de manera facil y sencilla usando graficos.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services