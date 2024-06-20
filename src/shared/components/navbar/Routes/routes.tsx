export type Route = {
	path: string;
	name: string;
	width: string;
  };
  
const routes: Route[] = [
	{ path: '/agendar', name: 'Agendar', width: 'w-[10%]' },
	{ path: '/sobre-nosotros', name: 'Sobre nosotros', width: 'w-[15%]' },
	{ path: '/blog', name: 'Blog', width: 'w-[5%]' },
	{ path: '/faq', name: 'Preguntas frecuentes', width: 'w-[22%]' },
]
  
export default routes
  