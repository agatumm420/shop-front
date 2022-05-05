const perfumes = [
  {
    src: "https://img.freepik.com/free-photo/high-angle-empty-perfume-bottle_23-2149234339.jpg?t=st=1650123341~exp=1650123941~hmac=e415ee5935a406ba48d9359658aa94a45073708e2874a162138c7e319e800c98&w=360",
    name: "Princess Pink",
    price: "59.99$",
  },
  {
    src: "https://img.freepik.com/free-photo/bottle-perfumes-pink-wall-with-flowers_169016-5739.jpg?t=st=1650123341~exp=1650123941~hmac=28e31c58d315aef84836e4840d5bb5892910edb5df185394f1592ad7f3d75497&w=360",
    name: "Blue Lavender",
    price: "60.99$",
  },
  {
    src: "https://img.freepik.com/free-photo/empty-perfume-glass-bottles-design-resource_53876-96700.jpg?t=st=1650123341~exp=1650123941~hmac=ff3551d0d95398a56236fa52328c698cd8440da011b61abc991b6e73ffd8791d&w=360",
    name: "Her Ladyship",
    price: "109.99$",
  },
  {
    src: "https://img.freepik.com/free-photo/empty-perfume-bottles-arrangement_23-2149234382.jpg?t=st=1650123341~exp=1650123941~hmac=d9faee91456c3c07825d2baa60dee429e8ff1e8521c6632434549b1444a4c747&w=360",
    name: "Venus",
    price: "89.99$",
  },
  {
    src: "https://img.freepik.com/free-photo/blank-perfume-glass-bottle-design-resource_53876-105945.jpg?t=st=1650123341~exp=1650123941~hmac=8287a606ee3931b8f6e23ee226488eae31a0857945fdd5a262ce1ec600a11de6&w=740",
    name: "Hot Girl Summer",
    price: "77.99$",
  },
  {
    src: "https://img.freepik.com/free-photo/feminine-perfume-glass-bottle-powder-textured_53876-95939.jpg?w=360",
    name: "Pink Haze",
    price: "55.99$",
  },
  {
    src: "https://img.freepik.com/free-photo/perfume-bottle-beauty-product_53876-145201.jpg?w=360",
    name: "Golden Shower",
    price: "49.99$",
  },
  {
    src: "https://img.freepik.com/free-photo/high-angle-empty-perfume-bottle_23-2149234338.jpg?t=st=1650123341~exp=1650123941~hmac=60cd08ac283e3936591b2b824adabeb0c33ee8e299c77077f813c4697ee0b92a&w=360",
    name: "Moonligth",
    price: "99.99$",
  },
  {
    src: "https://img.freepik.com/free-photo/high-angle-perfume-bottle-stand_23-2149234326.jpg?w=360",
    name: "Voice of the Sea",
    price: "109.99$",
  },
];
const skincare = [
  {
    src: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Youth Serum",
    price: "25.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1616750819456-5cdee9b85d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Forever Glow",
    price: "31.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sunshine Kiss",
    price: "15.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1601327412946-5803b94fe535?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Beauty Sleep",
    price: "20.99$",
  },
  {
    src: "https://img.freepik.com/free-photo/assortment-skin-beauty-product-bottle_23-2148761495.jpg?w=360",
    name: "Concentrated Care",
    price: "12.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80",
    name: "Sleepover Set",
    price: "80.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Goodbye Eye-Bags Cream",
    price: "30.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1597931752949-98c74b5b159f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Cozy Body Lotion",
    price: "25.99$",
  },
];
const accesories = [
  {
    src: "https://images.unsplash.com/photo-1612902457652-33aff0a641fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    name: "Cheetah Sunglasses",
    price: "30.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Golden Street Pack",
    price: "49.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    name: "Sweet Golden Neckleces",
    price: "15.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1561172478-a203d9c8290e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Shiny Star Earings",
    price: "109.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1623680621227-533cdf197a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    name: "Rose Gold Bracelette",
    price: "75.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
    name: "Floral Bag",
    price: "65.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1579619312739-8d373e647330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
    name: "Pink Heart Sunglasses",
    price: "30.99$",
  },
  {
    src: "https://images.unsplash.com/photo-1619352703613-6e05e062f326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Golden watch",
    price: "25.99$",
  },
];
export { perfumes, accesories, skincare };
