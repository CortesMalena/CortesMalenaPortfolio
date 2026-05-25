import salaImg from './projects-img/sala-de-juegos.png'
import redSocialImg from './projects-img/red-social.png'

export const projectsData = [
    {
      id: 1,
      title: "Sala de juegos en línea",
      description: "Aplicación web de juegos interactivos con autenticación, estadísticas y funcionalidades en tiempo real para competir y registrar resultados.",
      technologies: ["Angular", "Bootstrap", "Supabase", "Vercel"],
      link: "https://github.com/CortesMalena/MaleArcade-SalaDeJuegos-CortesMalena",
      demo: "https://male-arcade-sala-de-juegos-cortes-m.vercel.app/",
      image: salaImg
    }, 
    {
      id: 2,
      title: "Red social para deportistas Frontend",
      description: "Aplicación que permite a nuestros usuarios conectarse con otros deportistas y compartir sus logros y actividades.",
      technologies: ["Angular", "Bootstrap", "Vercel"],
      link: "https://github.com/CortesMalena/RedSocial-Frontend-CortesMalena",
      demo: "https://red-social-frontend-cortes-malena.vercel.app/",
      image: redSocialImg

    },
    {
      id: 3,
      title: "Red social para deportistas Backend",
      description: "Backend de la aplicación de red social para deportistas. Proporciona la gestión para las peticiones de los usuarios, la autenticación y la gestión de datos.",
      technologies: ["NestJS", "MongoDB", "Cloudinary", "JWT" ,"Vercel"],
      link: "https://github.com/CortesMalena/RedSocial-Backend-CortesMalena",
      demo: "",
      image: ""
    }
  ]