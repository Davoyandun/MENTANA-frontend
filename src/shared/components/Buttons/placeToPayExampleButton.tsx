'use client'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const PlaceToPayExampleButton = (props: object) => {
	/*
    cuando se ejecuta este boton que debe ser el de pago, se el debe enviar props con la informacion de pago
    <PlaceToPayEjemplo buttonProps={props}  donde props es el objeto que contiene la informacion de pago
    props = { 
        "payment": {
          "reference": "1122334455",
          "description": "Prueba",
          "amount": {
            "currency": "USD",
            "total": 100
          }
            } />
    y este componente se encarga de hacer el request al backend y recibe la url de la transaccion y redirige al usuario
    para que realice el pago
    
    */
	const router = useRouter()
	const paymentObj = {...props}

	const paymentRequest = async (paymentObj: object) => {
		const response = await axios.post('/localhost:3000/placeToPay', paymentObj)
		const data =  response.data 
		return data
	}

	const fetchPaymentUrl = async () => {
		const data = await paymentRequest(paymentObj)
		router.push(data.url)
	}
    
	return (
		<Button onClick={fetchPaymentUrl}>
            Pagar con PlaceToPay
		</Button>
	)
}
export default PlaceToPayExampleButton