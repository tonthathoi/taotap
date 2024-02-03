export const SEQUENCE = ["yourname", 3000, "@tonhoi", 3000, "@xuanminh", 3000];

export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 100,
  arrow: false,
  cssEase: "linear",
  draggable: false,
  useTransform: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
