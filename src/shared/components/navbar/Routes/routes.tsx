export type Route = {
	path: string;
	name: string;
	width: string;
  };
  
const routes: Route[] = [
	{ path: '/agendar', name: 'Agendar', width: '10%' },
	{ path: '/sobre-nosotros', name: 'Sobre nosotros', width: '15%' },
	{ path: '/blog', name: 'Blog', width: '5%' },
	{ path: '/faq', name: 'Preguntas frecuentes', width: '22%' },
]
  
export default routes
  