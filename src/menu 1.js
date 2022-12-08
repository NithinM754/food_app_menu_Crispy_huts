import React,{createContext, useContext } from "react";

const MenuContext = createContext();

export const  MenuProvider = ({children}) => {
    const menu= [
        {
            img:"https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=996&t=st=1670087465~exp=1670088065~hmac=958794f89c6860bd08ca8633f4e8b1de38876318a0ee693ecf2657ce2b110502",
            name:"Chicken Biryani",
            price: "Rs . 120",
            id:"1",
        },
        {
            img:"https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74647.jpg?w=996&t=st=1670087953~exp=1670088553~hmac=29684b4997a052de90c83056e4554c1e7d905ed67f53de27875e7a0b5be4c12e",
            name:"Chicken Noodle",
            price: "Rs . 80",
            id:"2",
        },
        {
            img:"https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76173.jpg?w=996&t=st=1670087849~exp=1670088449~hmac=07e10b5f2bd050723f0f77d5fa23c1b022d64c107864ae64e4ec803b66c0534e",
            name:"Alloo paratha",
            price: "Rs . 60",
            id:"3",
        },
        {
            img:"https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73698.jpg?size=626&ext=jpg&ga=GA1.2.873429719.1669179693&semt=sph",
            name:"Paneer butter masala",
            price: "Rs . 100",
            id:"4",
        },
        {
            img:"https://img.freepik.com/free-photo/sambar-rice-sambar-sadam-one-pot-meal-from-south-indian-state-tamil-nadu-kerala_466689-75220.jpg?w=996&t=st=1670087917~exp=1670088517~hmac=65f9b85916742c80aca91bb9892d75fb1214431408f601d981b87b2117b3671d",
            name:"Sambar rice",
            price: "Rs .50 ",
            id:"5",
        },
        {
            img:"https://img.freepik.com/free-photo/indian-sweet-food-gulab-jamun-served-round-ceramic-bowl_466689-71859.jpg?size=626&ext=jpg&ga=GA1.2.873429719.1669179693&semt=sph",
            name:"Gulab Jamun",
            price: "Rs . 40",
            id:"6",
        },
        {
            img:"https://img.freepik.com/free-photo/vada-pav-wada-pao-is-indian-desi-burger-is-roadside-fast-food-dish-from-maharashtra-selective-focus_466689-73967.jpg?size=626&ext=jpg&ga=GA1.2.873429719.1669179693&semt=sph",
            name:"Vada Pav",
            price: "Rs .40 ",
            id:"7",
        },
        {
            img:"https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?size=626&ext=jpg&ga=GA1.2.873429719.1669179693&semt=sph",
            name:"Pasta",
            price: "Rs . 90",
            id:"5",
        },
        {
            img:"https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27379.jpg?size=626&ext=jpg&ga=GA1.2.873429719.1669179693&semt=sph",
            name:"Fried Chicken",
            price: "Rs . 120",
            id:"5",
        },
        {
            img:"https://img.freepik.com/premium-photo/veg-samosa-is-indian-popular-snack-junk-food-served-with-fried-green-chilly-onion-chutney-ketchup_466689-13443.jpg?size=626&ext=jpg&ga=GA1.2.873429719.1669179693&semt=sph",
            name:"Veg Samosa",
            price: "Rs .30 ",
            id:"5",
        },
        {
            img:"https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.2.873429719.1669179693&semt=sph",
            name:"Chicken Tikka",
            price: "Rs . 100",
            id:"5",
        },
        {
            img:"https://img.freepik.com/premium-photo/shahi-paneer-paneer-kadai_57665-1334.jpg?size=626&ext=jpg&ga=GA1.2.873429719.1669179693&semt=sph",
            name:"Paneer Kadai",
            price: "Rs . 140",
            id:"5",
        },
    ];
    return (
        <MenuContext.Provider value={{menu}}>
            {children}
        </MenuContext.Provider>
    );
};
export const UseStateContext = () => useContext(MenuContext);