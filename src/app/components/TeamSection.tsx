import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { name: "James Ndaku", title: "Marketing Coordinator", image: "/pic1.png" },
  { name: "Joseph Munyambu", title: "Nursing Assistant", image: "/pic2.png" },
  { name: "Joseph Ngumba", title: "Medical Assistant", image: "/pic3.png" },
  { name: "Erick Kipkemboi", title: "Web Designer", image: "/pic4.png" },
  { name: "Stephen Kerubo", title: "President of Sales", image: "/pic5.png" },
  { name: "John Leboo", title: "Dog Trainer", image: "/pic6.png" },
];

const testimonials = [
  {
    name: "James Ndaku",
    title: "Software Developer",
    review:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    image: "/pic3.png",
    rating: 5,
  },
  {
    name: "Erick Kipkemboi",
    title: "Custom Maker",
    review:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    image: "/pic1.png",
    rating: 4,
  },
  {
    name: "Stephen Kerubo",
    title: "UI/UX Designer",
    review:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    image: "/pic6.png",
    rating: 5,
  },
];

const TeamSection = () => {
  return (
    <div className="min-h-screen py-12 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold font-roboto mb-8">Our Team</h2>
          <p className="text-[#000000] mb-12 font-roboto">
            Meet the professionals who make it all happen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className=" rounded-lg  p-6 text-left">
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className=""
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold font-roboto">
                      {member.name}
                    </h3>
                    <p className="text-[#000000] font-roboto">{member.title}</p>
                  </div>
                </div>
                <div className="flex space-x-4 mt-4 justify-center">
                  <a href="#" className="text-[#000000] hover:text-[#676767]">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-[#000000] hover:text-[#676767]">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="text-[#000000] hover:text-[#676767]">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold font-roboto mb-8">
            Customer Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] rounded-lg border-[#676767] border-[1px] pt-[64px] pb-[64px] pr-[32px] pl-[32px] text-center"
              >
                <div className="mb-4">
                  <div className="flex justify-start mb-2 pl-7">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#000000]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.168 3.588a1 1 0 00.95.691h3.764c.969 0 1.371 1.24.588 1.81l-3.035 2.205a1 1 0 00-.364 1.118l1.169 3.588c.3.921-.755 1.688-1.54 1.118l-3.035-2.205a1 1 0 00-1.175 0l-3.035 2.205c-.784.57-1.839-.197-1.54-1.118l1.169-3.588a1 1 0 00-.364-1.118L2.5 9.016c-.783-.57-.38-1.81.588-1.81h3.764a1 1 0 00.95-.691l1.168-3.588z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 font-roboto">
                    {testimonial.review}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4 text-left">
                    <h3 className="text-lg font-semibold font-roboto">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#000000] font-roboto">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamSection;
