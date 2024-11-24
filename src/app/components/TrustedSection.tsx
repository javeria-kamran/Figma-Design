import Image from "next/image";

const TrustedSection = () => {
  return (
    <section className="bg-[#F7F7F7] font-roboto py-8 border-t border-gray-200 md:pt-[60px] md:pr-[64px] md:pl-[64px] md:pb-[60px]">
      <div className="max-w-7xl font-roboto mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-semibold font-roboto text-gray-800">
            Trusted by 2000+ companies worldwide.
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:w-2/3">
          <Image
            src="/Logo1.png"
            alt="Logo 1"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/Logo2.png"
            alt="Logo 2"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/Logo3.png"
            alt="Logo 3"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/Logo4.png"
            alt="Logo 4"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/Logo5.png"
            alt="Logo 5"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
