import Image from "next/image";

const courses = [
  {
    title: "UX/UI Design 201",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$430",
    image: "/image1.png",
  },
  {
    title: "Introduction to Python",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$430",
    image: "/image2.png",
  },
  {
    title: "Data Analysis for Beginners",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$430",
    image: "/image3.png",
  },
  {
    title: "Art Specialization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$430",
    image: "/image4.png",
  },
  {
    title: "Rule of Law",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$430",
    image: "/image5.png",
  },
  {
    title: "Introduction to Webflow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$430",
    image: "/image6.png",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] py-8 flex justify-center items-center">
      <div className="max-w-6xl mx-auto p-8 rounded-lg text-[#000000] pt-[112px] pb-[112px] pl-[64px] pr-[64px]">
        <h1 className="text-3xl font-bold font-roboto text-center mb-8">
          Courses
        </h1>
        <h2 className="text-xl text-center font-roboto mb-12 text-[#000000]">
          Your Ultimate Guide to Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#F7F7F7] rounded-lg shadow-md"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={400}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <button className="font-roboto px-4 py-2 bg-[#F7F7F7] text-[#000000] rounded border-[1px] border-[#676767]">
                    Enroll Now
                  </button>
                  <span className="text-lg font-bold text-[#000000]">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="font-roboto px-6 py-3 bg-[#F7F7F7] text-[#000000] rounded border-[1px] border-[#676767]">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
