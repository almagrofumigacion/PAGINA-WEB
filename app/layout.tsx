import type {Metadata} from 'next';
import './globals.css';
import { PageLoader } from '@/components/page-loader';
export const metadata:Metadata={title:'Almagro Fumigación | Control de Plagas en CABA',description:'Servicio profesional de fumigación y control de plagas en Almagro y toda CABA. Consultá por WhatsApp y solicitá tu presupuesto.',keywords:['fumigación Almagro','fumigaciones CABA','control de plagas Almagro','fumigador CABA','control cucarachas CABA','control de roedores CABA'],icons:{icon:'/logo.webp'},openGraph:{title:'Almagro Fumigación | Control de Plagas en CABA',description:'Recuperá la tranquilidad de tus espacios. Atención personalizada para hogares, comercios y consorcios en toda CABA.',type:'website',locale:'es_AR',siteName:'Almagro Fumigación'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es-AR"><body><PageLoader/>{children}</body></html>}
