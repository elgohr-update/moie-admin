import React, {} from "react"
import Sales from "../Stats/Sales";
import Departments from "../Stats/Departments";
import Origens from "../Stats/Origens";
import Whatsapp from "../Stats/Whatsapp";
import SaleType from "../Stats/SaleType";
import Bests from "../Stats/Bests";
import Hours from "../Stats/Hours";
import Reincidents from "../Stats/Reincidents";

const Stats = () => {

    return (
        <React.Fragment>
            <Sales className="mb-2" />
            <Departments className="mb-2" />
            <Origens className="mb-2" />
            <Whatsapp className="mb-2" />
            <SaleType className="mb-2" />
            <Bests className="mb-2" />
            <Hours className="mb-2" />
            <Reincidents className="mb-2" />
        </React.Fragment>
    )
}

export default Stats;
