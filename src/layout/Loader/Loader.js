import React from "react";
import Typewriter from "typewriter-effect";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-600 opacity-80">
        <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div>
        <h2 className="text-center text-xl font-semibold text-white">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-white">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
      {/* <div className="flex flex-col items-center justify-center ">
                <div className="w-40 h-40 border-t-4 border-b-4 border-skin-base rounded-full animate-spin"></div>
                <div className="text-skin-secondary font-semibold p-6">
                    <Typewriter
                        options={{
                            strings: ['Hold tight we got this for you', 'We are working on this'],
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Hold tight we got this for you")
                                .pauseFor(500)
                                .deleteAll()
                                .typeString("We are working on this")
                                .start()
                        }}
                    />
                </div>
            </div> */}
    </div>
  );
};

export default Loader;
