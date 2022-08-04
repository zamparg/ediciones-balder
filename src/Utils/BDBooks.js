const BDBooks = [
{id:"1",
titulo:"Sobre el Amor y Otros Ensayos",
autor:"A. R. Orage",
descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",
miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",
valor:"1130",
stock:"5",
initial:"1",
categoryId:" Psicologia"}
,
{id:"2",titulo:"Ingreso al Camino medio",autor:"Acharia Chandrakirti",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1660",stock:"5",initial:"1",categoryId:"Budismo"}
,
{id:"3",titulo:"Jesús vivió y murió en Cachemira",autor:"Andreas Faber Kaiser",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1830",stock:"5",initial:"1",categoryId:"Esoterismo"}
,
{id:"4",titulo:"Esculpir en el Tiempo",autor:"Andrei Tarkovsky",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2010",stock:"5",initial:"1",categoryId:"Arte"}
,
{id:"5",titulo:"El dibujo de figura",autor:"Andrew Loomis",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2900",stock:"5",initial:"1",categoryId:"Arte"}
,
{id:"6",titulo:"Los místicos del sol",autor:"Angebert",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2800",stock:"5",initial:"1",categoryId:"Esoterismo"}
,
{id:"7",titulo:"El dhamapadda",autor:"Buddha",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1230",stock:"5",initial:"1",categoryId:"Budismo"}
,
{id:"8",titulo:"Recuerdos, sueños, pensamientos",autor:"Carl Gustav Jung",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/recuerdos-suenos-pensamientos_zfwowr.jpg",valor:"2750",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"9",titulo:"Simbolos de transformación",autor:"Carl Gustav Jung",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2940",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"10",titulo:"El don del águila",autor:"Carlos Castaneda",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2410",stock:"5",initial:"1",categoryId:"Literatura"}
,
{id:"11",titulo:"Introducción al Budismo Zen",autor:"D. T. Suzuki",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1560",stock:"5",initial:"1",categoryId:"Budismo"}
,
{id:"12",titulo:"Un mandala Astrológico",autor:"Dane Rudhyard",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2670",stock:"5",initial:"1",categoryId:"Astrologia"}
,
{id:"13",titulo:"Astrologia Predictiva",autor:"Eloy Dumon",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2990",stock:"5",initial:"1",categoryId:"Astrologia"}
,
{id:"14",titulo:"Enchiridion",autor:"Epicteto",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.", miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"950",stock:"5",initial:"1",categoryId:"Filosofia"}
,
{id:"15",titulo:"Así hablaba Perón",autor:"Eugenio Rom",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1340",stock:"5",initial:"1",categoryId:"Historia"}
,
{id:"16",titulo:"El gran yogi MIlarepa del Tibet",autor:"Evan Wentz",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2320",stock:"5",initial:"1",categoryId:"Budismo"}
,
{id:"17",titulo:"Lecturas Clásicas para niños - Tomo I",autor:"Gob. Mexicano",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"4690",stock:"5",initial:"1",categoryId:"infantiles"}
,
{id:"18",titulo:"El ángel de la ventana de Occidente",autor:"Gustav Meyrink",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2970",stock:"5",initial:"1",categoryId:"Esoterismo"}
,
{id:"19",titulo:"Isis sin velo - Tomo 1",autor:"H P Blavatsky",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2230",stock:"5",initial:"1",categoryId:"Esoterismo"}
,
{id:"20",titulo:"Isis sin velo - Tomo 2",autor:"H P Blavatsky",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2190",stock:"5",initial:"1",categoryId:"Esoterismo"}
,
{id:"21",titulo:"Isis sin velo - Tomo 3",autor:"H P Blavatsky",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2220",stock:"5",initial:"1",categoryId:"Esoterismo"}
,
{id:"22",titulo:"Isis sin velo - Tomo 4",autor:"H P Blavatsky",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2110",stock:"5",initial:"1",categoryId:"Esoterismo"}
,
{id:"23",titulo:"La voz del Silencio",autor:"H P Blavatsky",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1070",stock:"5",initial:"1",categoryId:"Esoterismo"}
,
{id:"24",titulo:"Diccionario de Símbolos",autor:"Jean Chevallier",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"6660",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"25",titulo:"Ankor, el último príncipe de la Atlántida",autor:"Jorge ángel Livraga",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1860",stock:"5",initial:"1",categoryId:"Literatura"}
,
{id:"26",titulo:"Astrologia Magistral",autor:"José P. Garaña",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2740",stock:"5",initial:"1",categoryId:"Astrologia"}
,
{id:"27",titulo:"Bendición de la Tierra",autor:"Knut Hamsun",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2890",stock:"5",initial:"1",categoryId:"Literatura"}
,
{id:"28",titulo:"Sobre la Educación",autor:"Krishnamurti",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1610",stock:"5",initial:"1",categoryId:"Educacion"}
,
{id:"29",titulo:"Interpretación de las Revoluciones Solares",autor:"Lluis Antoni Cot",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1640",stock:"5",initial:"1",categoryId:"Astrologia"}
,
{id:"30",titulo:"Alquimia",autor:"M L Von Franz",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2640",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"31",titulo:"Simbolos de Redención en los cuentos de hadas",autor:"M L Von Franz",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1350",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"32",titulo:"La gata: un cuento de redención femenina",autor:"M L Von Franz",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1540",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"33",titulo:"C G Jung, su mito en nuestro tiempo",autor:"M L Von Franz",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1950",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"34",titulo:"El camino de los Sueños",autor:"M. L. Von Franz",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2020",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"35",titulo:"Los Atlantes en Yucatán",autor:"Manuel Amabilis Dominguez",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1620",stock:"5",initial:"1",categoryId:"Esoterismo"}
,
{id:"36",titulo:"Krishnamurti 01 - Los años del despertar",autor:"Mary Lutyens",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2460",stock:"5",initial:"1",categoryId:"Biografia"}
,
{id:"37",titulo:"Krishnamurti 02 - Los años de plenitud",autor:"Mary Lutyens",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2090",stock:"5",initial:"1",categoryId:"Biografia"}
,
{id:"38",titulo:"Krishnamurti 03 - La puerta",autor:"Mary Lutyens",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1770",stock:"5",initial:"1",categoryId:"Biografia"}
,
{id:"39",titulo:"Krishnamurti 04 - muerte",autor:"Mary Lutyens",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2010",stock:"5",initial:"1",categoryId:"Biografia"}
,
{id:"40",titulo:"Comentarios Psicológicos - Tomo V",autor:"Maurice Nicol",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2920",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"41",titulo:"Tiempo Vivo",autor:"Maurice Nicol",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2360",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"42",titulo:"Comentarios Psicológicos - Tomo 1",autor:"Maurice Nicol",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"5250",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"43",titulo:"Comentarios Psicológicos - Tomo 2",autor:"Maurice Nicol",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"5140",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"44",titulo:"Comentarios Psicológicos - Tomo 1",autor:"Maurice Nicol",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"3320",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"45",titulo:"Comentarios Psicológicos - Tomo 2",autor:"Maurice Nicol",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"3460",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"46",titulo:"Comentarios Psicológicos Tomo V",autor:"Maurice Nicol",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2760",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"47",titulo:"El Nuevo Hombre",autor:"Maurice Nicol",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1760",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"48",titulo:"100 cuentos de Nasrudim",autor:"Nasrudim",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1700",stock:"5",initial:"1",categoryId:"Literatura"}
,
{id:"49",titulo:"No saber es formidable",autor:"Natalie de Salzmann",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2060",stock:"5",initial:"1",categoryId:"Educacion"}
,
{id:"50",titulo:"Psicologia de la posible Evolución del Hombre",autor:"P.D. Ouspensky",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1190",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"51",titulo:"La extraña vida de Ivan Osokin",autor:"P.D. Ouspensky",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1580",stock:"5",initial:"1",categoryId:"Literatura"}
,
{id:"52",titulo:"Operas Escogidas",autor:"Richard Wagner",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1890",stock:"5",initial:"1",categoryId:"Arte"}
,
{id:"53",titulo:"We - Psicologia del Amor romántico",autor:"Robert Johnson",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1860",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"54",titulo:"He",autor:"Robert Johnson",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1190",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"55",titulo:"She",autor:"Robert Johnson",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1170",stock:"5",initial:"1",categoryId:"Psicologia"}
,
{id:"56",titulo:"Espejo de la luz",autor:"Rodney Collin",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1080",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"57",titulo:"El desarrollo de la Luz",autor:"Rodney Collin",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"3110",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"58",titulo:"Teoría de la vida eterna",autor:"Rodney Collin",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1500",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"59",titulo:"Teoría de la Armonía Conciente",autor:"Rodney Collin",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1910",stock:"5",initial:"1",categoryId:" Psicologia"}
,
{id:"60",titulo:"Textos espirituales",autor:"Rodney Collin, P.D. Ouspensky",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1540",stock:"5",initial:"1",categoryId:" Religion"}
,
{id:"61",titulo:"Eddas",autor:"Saemund el Sabio - Snorre Sturlson",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"3030",stock:"5",initial:"1",categoryId:"Poesia"}
,
{id:"62",titulo:"Informe Tokarev",autor:"Salvatore Puledda",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1240",stock:"5",initial:"1",categoryId:"Literatura"}
,
{id:"63",titulo:"El maravilloso viaje del pequeño Nils",autor:"Selma Lagerloff",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"3620",stock:"5",initial:"1",categoryId:"infantiles"}
,
{id:"64",titulo:"Dammapada",autor:"Trad. Bikku Nhandisena",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"1230",stock:"5",initial:"1",categoryId:"Religion"}
,
{id:"65",titulo:"Parsifal",autor:"Varios",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"3860",stock:"5",initial:"1",categoryId:"Literatura"}
,
{id:"66",titulo:"Relatos del interior (de la tierra)",autor:"Varios",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada nisi scelerisque purus volutpat aliquet. Phasellus et aliquet est. Donec eget nulla odio. Nullam non eros sem.",miniatura:"https://res.cloudinary.com/zamparg/image/upload/v1659034433/ediciones-balder/test_vqhlb3.jpg",valor:"2160",stock:"5",initial:"1",categoryId:"Esoterismo"}

]

export default BDBooks 