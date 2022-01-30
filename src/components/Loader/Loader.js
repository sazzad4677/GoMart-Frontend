import React from 'react';

const Loader = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div class="flex items-center justify-center ">
                <div class="w-40 h-40 border-t-4 border-b-4 border-skin-base rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loader;