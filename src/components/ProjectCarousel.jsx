import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const screenshots = [
  {
    image: "/login.png",
    title: "Login"
  },
  {
    image: "/admin-dashboard.png",
    title: "Admin Dashboard"
  },
  {
    image: "/employee-dashboard.png",
    title: "Employee Dashboard"
  },
  {
    image: "/ems_panel.png",
    title: "Employee Management"
  },
  {
    image: "/attendance.png",
    title: "Attendance"
  },
  {
    image: "/leave-management.png",
    title: "Leave Management"
  },
  {
    image: "/password-reset.png",
    title: "Password Reset"
  }
];

function ProjectCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
    >
      {screenshots.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-slate-950">

            <img
              src={item.image}
              alt={item.title}
              className="
              w-full
              h-[450px]
              object-cover
              rounded-t-2xl
              "
            />

            <div className="py-5">

              <h3
                className="
                text-center
                text-2xl
                font-semibold
                text-white
                "
              >
                {item.title}
              </h3>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProjectCarousel;