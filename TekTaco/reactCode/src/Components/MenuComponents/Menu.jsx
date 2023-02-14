import React, {useEffect, useState} from "react";
import Entrees from "./Entrees";
import "../../Styling/Menu.css";
import NavBar from "../NavBar";
import {getAllMenuItems} from "../AdminComponents/utils";

export default function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {


        getAllMenuItems()
            .then((items) => setMenuItems(items))


    }, []);

    const menuList = menuItems.map((product) => {
        return <Entrees key={product.SKU} data={product}/>
    });

    return (
        <div id="menu-page">
            <NavBar/>
            <section id="menu-box">{menuList}</section>
        </div>
    );
}
