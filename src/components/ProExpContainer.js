import React from "react";
import  {Data} from "../data/Data";
import FragContainer from "./FragContainer";

const ProExpContainer= () => {
    return (
        <>
           {Data.map((data, key) => {
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