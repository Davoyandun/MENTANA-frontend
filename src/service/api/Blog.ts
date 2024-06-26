'use client'
import axios from 'axios'

const mockBlogs = [
	{
		title:'Cómo manejar la ansiedad en tiempos de estrés', 
		image_url:'/Images/ansiedad.jpeg',
		description:'Descubre estrategias efectivas para lidiar con la ansiedad durante momentos dificiles.', 
		createdAt:'11/06/24',
		author:'Dr. Mentana',
		id:'05e4166c-8a3f-46c0-8e1c-e8cf065681dd',
	},
	{
		title:'Cómo manejar la comunicación en pareja', 
		image_url:'/Images/comunPareja.jpeg',
		description:'Aprende técnicas para fortalecer la conexión y entendimiento con tu pareja.', 
		createdAt:'11/06/24',
		author:'Dr. Mentana',
		id:'d95b2158-c11c-4f3f-8ca8-eb88626ad10f',
	},
	{
		title:'Cómo practicar la mindfulness en la vida diaria', 
		image_url:'/Images/mindfulness.jpeg',
		description:'DescDescubre técnicas sencillas para incorporar la atención plena en tu rutina.', 
		createdAt:'11/06/24',
		author:'Dr. Mentana',
		id:'c8963ca3-6e0c-45d4-910a-99d00be4763b',
	},
	{
		title:'Cómo manejar la ansiedad en tiempos de estrés', 
		image_url:'https://img.freepik.com/vector-premium/terapeuta-linea-comunicacion-internet-asesoramiento-psicologico-tratamiento-medico-virtual-sesion-terapia-web-apoyo-distancia-concepto-vector-decente_53562-19514.jpg?w=1380',
		description:'Descubre estrategias efectivas para lidiar con la ansiedad durante momentos dificiles.', 
		createdAt:'11/06/24',
		author:'Dr. Mentana',
		id:'06e4166c-8a3f-46c0-8e1c-e8cf065681dd',
	},
	{
		title:'Cómo manejar la ansiedad en tiempos de estrés', 
		image_url:'https://img.freepik.com/vector-premium/hombre-triste-sentado-silla-hablando-psicologa-visita-psiquiatra-tratamiento-depresion-ilustracion_277904-2924.jpg?w=900',
		description:'Descubre estrategias efectivas para lidiar con la ansiedad durante momentos dificiles.', 
		createdAt:'11/06/24',
		author:'Dr. Mentana',
		id:'07e4166c-8a3f-46c0-8e1c-e8cf065681dd',
	}, 
]

export const getBlogs = async () => {
	try {
		const url = 'http://localhost:3001/blogs'
		const { data } = await axios.get(url)

		const blogs = data.concat(mockBlogs) //! una vez se deje de usar data mockeada, debe quedar como:    const blogs = data
        
		return blogs
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		throw new Error(error.message)
	}
}
