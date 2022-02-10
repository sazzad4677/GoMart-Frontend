import React from "react";

const Testimonial = () => {
  const peoples = [
    {
      id: 1,
      name: "Andres Berlin",
      designation: "Chief Executive Officer",
      description:
        "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
      image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    },
    {
      id: 2,
      name: "Silene Tokyo",
      designation: "Product Design Head",
      description:
        "he emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.",
      image: "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif",
    },
    {
      id: 3,
      name: "Johnson Stone",
      designation: "Manager Development",
      description:
        "Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.",
      image: "https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif",
    },
    {
      id: 4,
      name: "Dean Jones",
      designation: "Principal Software Engineer",
      description:
        "An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.",
      image: "https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg",
    },
    {
      id: 5,
      name: "Rachel Adams",
      designation: "Product Design Head",
      description:
        "Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.",
      image:
        "https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg",
    },
    {
      id: 6,
      name: "Charles Keith",
      designation: "UX Designer",
      description:
        "A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.",
      image: "https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif",
    },
  ];
  return (
    <div className="mb-16 ">
      <div className="bg-gray-100">
        <div className="container mx-auto flex justify-center pt-16">
          <div>
            <p className="label-text text-center">BUILDING TEAM</p>
            <h1 className="heading-2 text-center">
              The Talented People <br /> Behind the Scenes of the Organization
            </h1>
          </div>
        </div>
        <div className=" w-full px-10 pt-10">
          <div className="mx-auto mt-10 px-3 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-screen-xl lg:px-8">
            <div
              role="list"
              aria-label="Behind the scenes People "
              className="flex-wrap items-center sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between"
            >
              {peoples.map((people, key) => (
                <div
                  key={key}
                  role="listitem"
                  className="relative mt-16 mb-32 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-white shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src={people.image}
                          alt={`Pictures of ${people.name}`}
                          className="h-full w-full rounded-full object-cover shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6 pb-5">
                      <h1 className="mb-1 text-center text-3xl font-bold">
                        {people.name}
                      </h1>
                      <p className="text-center text-sm text-gray-800">
                        {people.designation}
                      </p>
                      <p className="pt-3 text-center text-base font-normal text-gray-600">
                        {people.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
