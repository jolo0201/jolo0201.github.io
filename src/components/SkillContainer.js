import React from "react";
import  {Tech} from "../data/Tech";
import FragContainer from "./FragContainer";

const ProExpContainer= () => {
    return (
        <>
           {Tech.map((data, key) => {
            return (
                <div className='data-container' key={key}>
                    <FragContainer data={data} />
                </div>
            );
            })} 
        </>
    );
};

export default ProExpContainer