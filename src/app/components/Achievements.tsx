const Achievements = () => {
  const stats = [
    { label: "Students", value: "+200" },
    { label: "Courses", value: "50k" },
    { label: "Teachers", value: "370k" },
    { label: "Certifications", value: "100+" },
  ];

  return (
    <section className="bg-white py-12 text-[#000000]">
      <div className="text-center mb-8 px-4 pt-[112px] pb-[112px] pl-[64px] pr-[64px] gap-[80px]">
        <h2 className="text-4xl font-bold font-roboto mb-4">
          Our Achievements
        </h2>
        <p className="text-lg text-[#000000] font-roboto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
