import React from 'react';

const Testimonial = () => {
    const peoples = [
        {
            id: 1,
            name: 'Andres Berlin',
            designation: 'Chief Executive Officer',
            description: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
            image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
        },
        {
            id: 2,
            name: 'Silene Tokyo',
            designation: 'Product Design Head',
            description: "he emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.",
            image: "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
        },
        {
            id: 3,
            name: 'Johnson Stone',
            designation: 'Manager Development',
            description: "Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.",
            image: "https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
        },
        {
            id: 4,
            name: 'Dean Jones',
            designation: 'Principal Software Engineer',
            description: "An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.",
            image: "https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
        },
        {
            id: 5,
            name: 'Rachel Adams',
            designation: 'Product Design Head',
            description: "Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.",
            image: "https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
        },
        {
            id: 6,
            name: 'Charles Keith',
            designation: 'UX Designer',
            description: "A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.",
            image: "https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
        },
    ]
    return (
        <div className="mb-16 ">
            <div className="bg-gray-100">
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="label-text text-center">BUILDING TEAM</p>
                        <h1 className="heading-2 text-center">The Talented People <br /> Behind the Scenes of the Organization</h1>
                    </div>
                </div>
                <div className=" w-full px-10 pt-10">
                    <div className="px-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 mt-10">
                        <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            {peoples.map((people, key) => <div key={key} role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={people.image} alt={`Pictures of ${people.name}`} className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16 pb-5">
                                        <h1 className="font-bold text-3xl text-center mb-1">{people.name}</h1>
                                        <p className="text-gray-800 text-sm text-center">{people.designation}</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">{people.description}</p>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;