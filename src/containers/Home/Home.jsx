"use client";

// external import
import Slider from "react-slick";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// internal import
import { HeadLine } from "@/components";
import { Accordion, Feedback, Heading, SwiperItem, settings } from "@/containers/Home";

// image
import bgLayout from "@/assets/images/bg_layout.png";

const Home = () => {
  return (
    <div className="mt-20 overflow-hidden">
      <div
        className="fixed top-0 right-0 w-[104%] min-h-screen  bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgLayout.src})`,
        }}
      />

      <section className="relative z-[2] wide">
        <Heading />
      </section>

      <section className="relative z-[2] mt-6">
        <Slider {...settings} className="-mr-[25px]">
          {Array(10)
            .fill(null)
            .map((item, idx) => (
              <SwiperItem key={idx} />
            ))}
        </Slider>
      </section>

      <section className="relative z-[2] wide">
        <HeadLine
          title="Feedback từ khách hàng"
          containerClassName="my-6 text-black text-center font-bold text-[30px] max-md:text-xl font-semibold"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feedback />
          <Feedback />
          <Feedback />
          <Feedback />
          <Feedback />
          <Feedback />
        </div>
      </section>

      <section className="relative z-[2] wide">
        <HeadLine
          title="Câu hỏi thường gặp"
          containerClassName="my-6 text-black text-center font-bold text-[30px] max-md:text-xl font-semibold"
        />

        <Accordion />
      </section>
    </div>
  );
};

export default Home;
