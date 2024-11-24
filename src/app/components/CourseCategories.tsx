const categories = [
  {
    name: "Design & Development",
    icon: "/1.png",
    courses: "50+ Courses Available",
  },
  { name: "Marketing", icon: "/2.png", courses: "50+ Courses Available" },
  { name: "Development", icon: "/3.png", courses: "50+ Courses Available" },
  { name: "Communication", icon: "4.png", courses: "50+ Courses Available" },
  {
    name: "Digital Marketing",
    icon: "/5.png",
    courses: "50+ Courses Available",
  },
  { name: "Self Development", icon: "6.png", courses: "50+ Courses Available" },
  { name: "Business", icon: "/7.png", courses: "50+ Courses Available" },
  { name: "Finance", icon: "/8.png", courses: "50+ Courses Available" },
  { name: "Consulting", icon: "/9.png", courses: "50+ Courses Available" },
];

export default function CourseCategories() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] py-[16px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[112px] pb-[112px] pl-[64px] pr-[64px] gap-[80px]">
        <h1 className="text-3xl font-bold font-roboto text-center text-[#000000] mb-8">
          Explore Courses By Category
        </h1>
        <p className="text-center mb-12 font-roboto">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center p-[20px] bg-[#F7F7F7] rounded-lg shadow-md"
            >
              <div className="flex-shrink-0">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="h-24 w-24"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <p className="text-gray-500">{category.courses}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#FFFFFF] text-[#000000] font-roboto rounded-md border-[1px] border-[#676767]">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}
