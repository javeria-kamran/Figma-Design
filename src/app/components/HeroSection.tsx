import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="bg-[#FFFFFF] py-0">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-stretch ">
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start px-6 pt-[90px]  pb-[90px]">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-roboto text-black leading-tight">
              Learn new skills online with ease
            </h1>
            <p className="mt-4 text-gray-600 font-roboto">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
            <div className="mt-6 flex space-x-4 justify-center md:justify-start">
              <button className="bg-[#000000] text-[#FFFFFF] px-6 py-3 rounded-md font-roboto">
                Start learning now
              </button>
              <button className="border-[#676767] border-[1px] bg-[#FFFFFF] text-[#000000] px-6 py-3 rounded-md font-roboto">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="w-full md:w-1/2 flex justify-end items-center p-0">
          <Image
            src="/Image.png"
            alt="Hero"
            layout="intrinsic"
            width={500}
            height={500}
            className="md:w-[640px] md:h-[600px] sm:w-[300px] sm:h-[300px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
