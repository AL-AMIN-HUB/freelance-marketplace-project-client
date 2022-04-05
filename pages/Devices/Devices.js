import React from 'react';

const Devices = () => {
    return (
        <div className="container mx-auto my-16">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                    <h3 className="text-3xl text-indigo-900 font-bold">Download App Free App For</h3>
                    <h3 className="text-3xl text-blue-600 font-bold my-3">Android And Iphone</h3>
                    <p className="text-base mb-8">Aliquam bibendum convallis eros malesuada volutpat. Donec odio urna, laoreet sed enim vitae, placerat ornare urna. Cras euismod sit amet urna eget sagittis. In scelerisque gravida commodo. Aliquam quis mi cursus, malesuada turpis non, efficitur elit. Nullam imperdiet ipsum quis diam malesuada, ut suscipit enim aliquam. Nunc suscipit, dolor ac euismod accumsan, justo diam consectetur nibh, in congue est neque sed magna. Donec sed felis vitae tellus maximus finibus. Praesent semper dapibus arcu,</p>
                    <div className="flex gap-6">
                    <div className=" gap-4 items-center bg-gray-900 inline-flex px-6 py-3 rounded-md">
                        <div >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-12" src="Devices/playstore.svg" alt="" />
                        </div>
                       <div>
                       <p className="text-white ">Download on</p>
                        <h4 className="text-white text-xl">Google Play</h4>
                       </div>
                    </div>
                    <div className=" gap-4 items-center bg-blue-900 inline-flex px-6 py-3 rounded-md">
                        <div >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-12" src="Devices/apple.svg" alt="" />
                        </div>
                       <div>
                       <p className="text-white ">Download on</p>
                        <h4 className="text-white text-xl">App Store</h4>
                       </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Devices;