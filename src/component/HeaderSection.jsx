import React from 'react';
import HeaderRs from './HeaderRs';

const HeaderSection = () => {
    return (
        <>
        <div className=" bg-black section-of-header hover:w-full p-3 ">
            <div className=" grid grid-cols-2 gap-4 place-item-center text-center  ">
                <div className="col-1 bg-gray-400 ">
                    <HeaderRs />
                </div>
                <div className="col-2 bg-green-400" >02</div>
            </div>
        </div>
        </>
    );
}

export default HeaderSection;
