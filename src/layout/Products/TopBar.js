import React from 'react';

const TopBar = ({setResultPerPage,setSortType} ) => {
    return (
        <div class="card flex flex-row justify-between items-center border rounded-lg px-2 shadow">
            <div class="card-header">
                <p class="font-semibold text-skin-primary p-1 font-semibold">Component</p>
            </div>
            <div className="flex">
                <div className="flex px-2 items-center">
                    <p class="font-semibold text-skin-secondary p-1 text-sm">Show:</p>
                    <select class=" text-skin-primary p-1 focus:outline-none text-sm bg-skin-optional" onChange={(e) => setResultPerPage(e.target.value)}>
                        <option value="10"> 10</option>
                        <option value="20"> 20</option>
                        <option value="30"> 30</option>
                        <option value="40"> 40</option>
                    </select>
                </div>
                <div className="flex px-2 items-center">
                    <p class="font-semibold text-skin-secondary p-1 text-sm">Sort By:</p>
                    <select class=" text-skin-primary p-1 focus:outline-none text-sm bg-skin-optional" onChange={(e) => setSortType(e.target.value)}>
                        <option value="0"> Default</option>
                        <option value="-1"> Price ( High {'>'} Low )</option>
                        <option value="1"> Price ( Low {'>'} High )</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TopBar;