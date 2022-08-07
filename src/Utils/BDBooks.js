const BDBooks = [
{
title:"Sobre el Amor y Otros Ensayos",
author:"A. R. Orage",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",
thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",
price:"1130",
stock:"5",
categoryId:" Psicologia"}
,
{title:"Ingreso al Camino medio",author:"Acharia Chandrakirti",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1660",stock:"5", categoryId:"Budismo"}
,
{title:"Jesús vivió y murió en Cachemira",author:"Andreas Faber Kaiser",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1830",stock:"5", categoryId:"Esoterismo"}
,
{title:"Esculpir en el Tiempo",author:"Andrei Tarkovsky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2010",stock:"5", categoryId:"Arte"}
,
{title:"El dibujo de figura",author:"Andrew Loomis",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2900",stock:"5", categoryId:"Arte"}
,
{title:"Los místicos del sol",author:"Angebert",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2800",stock:"5", categoryId:"Esoterismo"}
,
{title:"El dhamapadda",author:"Buddha",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1230",stock:"5", categoryId:"Budismo"}
,
{title:"Recuerdos, sueños, pensamientos",author:"Carl Gustav Jung",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/recuerdos-suenos-pensamientos_zfwowr.jpg",price:"2750",stock:"5", categoryId:"Psicologia"}
,
{title:"Simbolos de transformación",author:"Carl Gustav Jung",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2940",stock:"5", categoryId:"Psicologia"}
,
{title:"El don del águila",author:"Carlos Castaneda",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2410",stock:"5", categoryId:"Literatura"}
,
{title:"Introducción al Budismo Zen",author:"D. T. Suzuki",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1560",stock:"5", categoryId:"Budismo"}
,
{title:"Un mandala Astrológico",author:"Dane Rudhyard",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2670",stock:"5", categoryId:"Astrologia"}
,
{title:"Astrologia Predictiva",author:"Eloy Dumon",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2990",stock:"5", categoryId:"Astrologia"}
,
{title:"Enchiridion",author:"Epicteto",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.", thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"950",stock:"5", categoryId:"Filosofia"}
,
{title:"Así hablaba Perón",author:"Eugenio Rom",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1340",stock:"5", categoryId:"Historia"}
,
{title:"El gran yogi MIlarepa del Tibet",author:"Evan Wentz",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2320",stock:"5", categoryId:"Budismo"}
,
{title:"Lecturas Clásicas para niños - Tomo I",author:"Gob. Mexicano",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"4690",stock:"5", categoryId:"infantiles"}
,
{title:"El ángel de la ventana de Occidente",author:"Gustav Meyrink",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2970",stock:"5", categoryId:"Esoterismo"}
,
{title:"Isis sin velo - Tomo 1",author:"H P Blavatsky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2230",stock:"5", categoryId:"Esoterismo"}
,
{title:"Isis sin velo - Tomo 2",author:"H P Blavatsky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2190",stock:"5", categoryId:"Esoterismo"}
,
{title:"Isis sin velo - Tomo 3",author:"H P Blavatsky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2220",stock:"5", categoryId:"Esoterismo"}
,
{title:"Isis sin velo - Tomo 4",author:"H P Blavatsky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2110",stock:"5", categoryId:"Esoterismo"}
,
{title:"La voz del Silencio",author:"H P Blavatsky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1070",stock:"5", categoryId:"Esoterismo"}
,
{title:"Diccionario de Símbolos",author:"Jean Chevallier",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"6660",stock:"5", categoryId:"Psicologia"}
,
{title:"Ankor, el último príncipe de la Atlántida",author:"Jorge ángel Livraga",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1860",stock:"5", categoryId:"Literatura"}
,
{title:"Astrologia Magistral",author:"José P. Garaña",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2740",stock:"5", categoryId:"Astrologia"}
,
{title:"Bendición de la Tierra",author:"Knut Hamsun",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2890",stock:"5", categoryId:"Literatura"}
,
{title:"Sobre la Educación",author:"Krishnamurti",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1610",stock:"5", categoryId:"Educacion"}
,
{title:"Interpretación de las Revoluciones Solares",author:"Lluis Antoni Cot",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1640",stock:"5", categoryId:"Astrologia"}
,
{title:"Alquimia",author:"M L Von Franz",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2640",stock:"5", categoryId:"Psicologia"}
,
{title:"Simbolos de Redención en los cuentos de hadas",author:"M L Von Franz",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1350",stock:"5", categoryId:"Psicologia"}
,
{title:"La gata: un cuento de redención femenina",author:"M L Von Franz",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1540",stock:"5", categoryId:"Psicologia"}
,
{title:"C G Jung, su mito en nuestro tiempo",author:"M L Von Franz",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1950",stock:"5", categoryId:"Psicologia"}
,
{title:"El camino de los Sueños",author:"M. L. Von Franz",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2020",stock:"5", categoryId:"Psicologia"}
,
{title:"Los Atlantes en Yucatán",author:"Manuel Amabilis Dominguez",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1620",stock:"5", categoryId:"Esoterismo"}
,
{title:"Krishnamurti 01 - Los años del despertar",author:"Mary Lutyens",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2460",stock:"5", categoryId:"Biografia"}
,
{title:"Krishnamurti 02 - Los años de plenitud",author:"Mary Lutyens",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2090",stock:"5", categoryId:"Biografia"}
,
{title:"Krishnamurti 03 - La puerta",author:"Mary Lutyens",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1770",stock:"5", categoryId:"Biografia"}
,
{title:"Krishnamurti 04 - muerte",author:"Mary Lutyens",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2010",stock:"5", categoryId:"Biografia"}
,
{title:"Comentarios Psicológicos - Tomo V",author:"Maurice Nicol",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2920",stock:"5", categoryId:" Psicologia"}
,
{title:"Tiempo Vivo",author:"Maurice Nicol",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2360",stock:"5", categoryId:" Psicologia"}
,
{title:"Comentarios Psicológicos - Tomo 1",author:"Maurice Nicol",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"5250",stock:"5", categoryId:" Psicologia"}
,
{title:"Comentarios Psicológicos - Tomo 2",author:"Maurice Nicol",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"5140",stock:"5", categoryId:" Psicologia"}
,
{title:"Comentarios Psicológicos - Tomo 1",author:"Maurice Nicol",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"3320",stock:"5", categoryId:" Psicologia"}
,
{title:"Comentarios Psicológicos - Tomo 2",author:"Maurice Nicol",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"3460",stock:"5", categoryId:" Psicologia"}
,
{title:"Comentarios Psicológicos Tomo V",author:"Maurice Nicol",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2760",stock:"5", categoryId:" Psicologia"}
,
{title:"El Nuevo Hombre",author:"Maurice Nicol",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1760",stock:"5", categoryId:" Psicologia"}
,
{title:"100 cuentos de Nasrudim",author:"Nasrudim",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1700",stock:"5", categoryId:"Literatura"}
,
{title:"No saber es formidable",author:"Natalie de Salzmann",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2060",stock:"5", categoryId:"Educacion"}
,
{title:"Psicologia de la posible Evolución del Hombre",author:"P.D. Ouspensky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1190",stock:"5", categoryId:" Psicologia"}
,
{title:"La extraña vida de Ivan Osokin",author:"P.D. Ouspensky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1580",stock:"5", categoryId:"Literatura"}
,
{title:"Operas Escogidas",author:"Richard Wagner",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1890",stock:"5", categoryId:"Arte"}
,
{title:"We - Psicologia del Amor romántico",author:"Robert Johnson",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1860",stock:"5", categoryId:"Psicologia"}
,
{title:"He",author:"Robert Johnson",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1190",stock:"5", categoryId:"Psicologia"}
,
{title:"She",author:"Robert Johnson",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1170",stock:"5", categoryId:"Psicologia"}
,
{title:"Espejo de la luz",author:"Rodney Collin",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1080",stock:"5", categoryId:" Psicologia"}
,
{title:"El desarrollo de la Luz",author:"Rodney Collin",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"3110",stock:"5", categoryId:" Psicologia"}
,
{title:"Teoría de la vida eterna",author:"Rodney Collin",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1500",stock:"5", categoryId:" Psicologia"}
,
{title:"Teoría de la Armonía Conciente",author:"Rodney Collin",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1910",stock:"5", categoryId:" Psicologia"}
,
{title:"Textos espirituales",author:"Rodney Collin, P.D. Ouspensky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1540",stock:"5", categoryId:" Religion"}
,
{title:"Eddas",author:"Saemund el Sabio - Snorre Sturlson",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"3030",stock:"5", categoryId:"Poesia"}
,
{title:"Informe Tokarev",author:"Salvatore Puledda",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1240",stock:"5", categoryId:"Literatura"}
,
{title:"El maravilloso viaje del pequeño Nils",author:"Selma Lagerloff",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"3620",stock:"5", categoryId:"infantiles"}
,
{title:"Dammapada",author:"Trad. Bikku Nhandisena",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"1230",stock:"5", categoryId:"Religion"}
,
{title:"Parsifal",author:"Varios",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"3860",stock:"5", categoryId:"Literatura"}
,
{title:"Relatos del interior (de la tierra)",author:"Varios",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",thumbnail:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",price:"2160",stock:"5", categoryId:"Esoterismo"}

]

export default BDBooks 