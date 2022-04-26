import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [

{
  _id: uuid(),
  title: "Full-Rim Cat-Eye Sunglasses",
  brand: "SKECHERS",
  image:
    "https://assets.ajio.com/medias/sys_master/root/hce/h70/14162255708190/skechers-blue-cat-eye-full-rim-cat-eye-sunglasses.jpg",
  price: "1500",
  discount: "50",
  total_price:'3000',
  category: "shades",
  rating: 4,
  inStock: true,
  fastDelivery: true,
  trending:true,
},
{
  _id: uuid(),
  title: "Th 2545 Mirrored Sunglasses",
  brand: "TOMMY HILFIGER",
  image:
    "https://assets.ajio.com/medias/sys_master/root/20201027/CU0r/5f983e55f997dd8c837907bc/tommy-hilfiger-pink-cat-eye-th-2545-mirrored-cateye-sunglasses.jpg",
  price: "1000",
  discount: "50",
  total_price:'2000',
  category: "shades",
  rating: 5,
  inStock: true,
  fastDelivery: false,
  trending:false
},
{
  _id: uuid(),
  title: "Printed Full-Rim Wayfarers",
  brand: "FOSSIL",
  image:
    "https://assets.ajio.com/medias/sys_master/root/20210213/Ee0P/602712e0aeb2696981654715/fossil-black-wayfarers-202768-printed-full-rim-wayfarers.jpg",
  price: "2000",
  discount: "50",
  total_price:'4000',
  category: "shades",
  rating: 4,
  inStock: true,
  fastDelivery: false,
  trending:false
},
{
  _id: uuid(),
  title: "Full-Rim Oval Sunglasses",
  brand: "FOSSIL",
  image:
    "https://assets.ajio.com/medias/sys_master/root/20210213/qoFr/6027108af997dd5c40f02cfc/fossil-brown-oval-203335-full-rim-oval-sunglasses.jpg",
  price: "1814",
  discount: "45",
  total_price:'3299',
  category: "shades",
  rating: 4,
  inStock: true,
  fastDelivery: false,
  trending:false
},
{
  _id: uuid(),
  title: "Full-Rim Cat Eye Sunglasses shades",
  brand: "FRENCH CONNECTION",
  image:
    "https://assets.ajio.com/medias/sys_master/root/20201027/fhwt/5f9843bef997dd8c837937f4/french-connection-golden-cat-eye-fc-7432-c1-full-rim-cat-eye-sunglasses.jpg",
  price: "1349",
  discount: "55",
  total_price:'2999',
  category: "shades",
  rating: 4,
  inStock: true,
  fastDelivery: true,
  trending:false
},
{
  _id: uuid(),
  brand: "DRESSBERRY",
  title: "Black Embellished Block Mules",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13927592/2022/3/22/567c7606-cc06-4948-8f18-37e1c1c9b3be1647932070475-DressBerry-Women-Heels-2031647932070189-1.jpg",
  price: "1000",
  discount: "50",
  total_price:'1999',
  category: "heels",
  rating: 4,
  inStock: true,
  fastDelivery: false,
  trending:false
},
{
  _id: uuid(),
  title: "Women Black Solid Stiletto Heels",
  brand: "TOMMY HILFIGER",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16654542/2022/1/21/88862727-392f-4992-904b-e6239e32e3201642761883327-Tommy-Hilfiger-Black-Leather-Sandals-9541642761882983-1.jpg",
  price: "2014",
  discount: "35",
  total_price:'3099',
  category: "heels",
  rating: 4,
  inStock: true,
  fastDelivery: false,
  trending:false
},
{
  _id: uuid(),
  title: "Fuchsia Solid Block Pumps",
  brand: "DRESSBERRY",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13938162/2021/10/25/bf4cb7ee-24bc-4b4d-aa7b-1674ed822c8e1635139618848-DressBerry-Women-Heels-7161635139618350-1.jpg",
  price: "1499",
  discount: "50",
  total_price:'3000',
  category: "heels",
  rating: 4,
  inStock: true,
  fastDelivery: false,
  trending:false
},
{
  _id: uuid(),
  title:
    "Women Leather Handcrafted Stilettos",
  brand: "SAINT G",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11538672/2021/12/22/3c34f849-03f4-4f79-8322-de3e4fcfb1d81640179135931SaintGWomenBrownPrintedLeatherHeels1.jpg",
  price: "3000",
  discount: "50",
  total_price:'6000',
  category: "heels",
  rating: 5,
  inStock: true,
  fastDelivery: true,
  trending:false
},
{
  _id: uuid(),
  title: "Red Embellished Stiletto Heels",
  brand: "ALLEN SOLLY",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17284060/2022/3/14/155f0990-38d5-4118-8d3e-2d4cffcbe1641647239177370-Allen-Solly-Women-Heels-2471647239176950-1.jpg",
  price: "4791",
  discount: "15",
  total_price:'5590',
  category: "heels",
  rating: 4,
  inStock: true,
  fastDelivery: false,
  trending:true,
},
{
  _id: uuid(),
  title: "Women Black Striped Dial & Solid Straps Analogue",
  brand: "DRESSBERRY",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15964862/2022/3/10/21fbb4ba-b931-4ac7-bcc0-1c8b61b06b7e1646897572530-DressBerry-Women-Black-Striped-Dial--Solid-Straps-Analogue-W-13.jpg",
  price: "1999",
  discount: "50",
  total_price:'3000',
  category: "watch",
  rating: 4,
  inStock: false,
  fastDelivery: true,
  trending:false
},
{
  _id: uuid(),
  title: "Women Off-White Carlie Analogue Watch",
  brand: "FOSSIL",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13726840/2022/1/10/f3ef99c9-f78f-433b-865b-409a550ce9a61641826639046FossilWomenOff-WhiteCarlieAnalogueWatchES46141.jpg",
  price: "1200",
  discount: "50",
  total_price:'2400',
  category: "watch",
  rating: 5,
  inStock: true,
  fastDelivery: false,
  trending:false
},

{
  _id: uuid(),
  title: "Women Blue Kalya Analogue Watch",
  brand: "FOSSIL",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10654710/2022/1/10/6fac58f9-df7c-491b-861a-e162b186f6f61641825577830FossilWomenBlueKalyaAnalogueWatchES46631.jpg",
  price: "1500",
  discount: "60",
  total_price:'3750',
  category: "watch",
  rating: 3,
  inStock: false,
  fastDelivery: true,
  trending:false
},
{
  _id: uuid(),
  title: "Fiord Women Charcoal Grey Analogue",
  brand: "DANIEL KLEIN",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7837381/2018/12/27/c4c89775-7d3e-4c89-85a7-ca1a3b19ec2f1545903321823-Daniel-Klein-Fiord-Women-Charcoal-Grey-Analogue-Watch-DK1190-1.jpg",
  price: "3000",
  discount: "50",
  total_price:'6000',
  category: "watch",
  rating: 4,
  inStock: true,
  fastDelivery: true,
  trending:true,
},
{
  _id: uuid(),
  title:
    "Women Silver-Toned Analogue Watch",
  brand: "DANIEL KLEIN",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/3450317/2021/5/24/aeb84de9-fcb1-44c6-87f5-3cb9ce9225871621830505809-Daniel-Klein-Women-Silver-Toned-Analogue-Watch-DK11328-3-687-15.jpg",
  price: "2575",
  discount: "50",
  total_price:'5150',
  category: "watch",
  rating: 5,
  inStock: true,
  fastDelivery: false,
  trending:true,
},
{
  _id: uuid(),
  title: "Women Black Solid Sling Bag",
  brand: "LINO PERROS",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13247968/2020/12/17/6dd8626d-97a5-4e52-a8a5-4e5634c61bf01608202018762-Lino-Perros-Womens-Black-Leatherette-Hand-Bag-37016082020163-1.jpg",
  price: "1499",
  discount: "50",
  total_price:'3000',
  category: "bag",
  rating: 3,
  inStock: false,
  fastDelivery: false,
  trending:false
},
{
  _id: uuid(),
  title:
    "Blue Solid Crossbody Sling Bag",
  brand: "TOMMY HILFIGER",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16757788/2022/3/14/8448198b-ede6-491f-a351-5812bd458bd61647259009806-Tommy-Hilfiger-Women-Handbags-7671647259009371-1.jpg",
  price: "4119",
  discount: "20",
  total_price:'5149',
  category: "bag",
  rating: 5,
  inStock: true,
  fastDelivery: true,
  trending:false
},
{
  _id: uuid(),
  title: "Peach-Coloured PU Bowling Sling Bag",
  brand: "KLEIO",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16531258/2022/1/4/d95adfe6-b55b-44eb-b055-c4bcabd634df1641266489560-KLEIO-Peach-Coloured-PU-Bowling-Sling-Bag-with-Quilted-20516-11.jpg",
  price: "3599",
  discount: "40",
  total_price:'6000',
  category: "bag",
  rating: 3,
  inStock: true,
  fastDelivery: false,
  trending:false
},
{
  _id: uuid(),
  title:
    "Red PU Structured Sling Bag",
  brand: "ALLEN SOLLY",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16957126/2022/2/15/8425a7a2-788f-4f09-b399-796272b6ef461644908569278-Allen-Solly-Women-Handbags-341644908568751-1.jpg",
  price: "1190",
  discount: "65",
  total_price:'3400',
  category: "bag",
  rating: 5,
  inStock: false,
  fastDelivery: true,
  trending:false
},
{
  _id: uuid(),
  title:
    "Black PU Structured Sling Bag",
  brand: "ALLEN SOLLY ",
  image:
    "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17331722/2022/3/15/adfc0f0d-f859-4623-aec0-62779e05eea61647322729166-Allen-Solly-Black-PU-Structured-Sling-Bag-2171647322728683-1.jpg",
  price: '1000',
  discount: "50",
  total_price:'2000',
  category: "bag",
  rating: 5,
  inStock: true,
  fastDelivery: false,
  trending:true,
},
];
