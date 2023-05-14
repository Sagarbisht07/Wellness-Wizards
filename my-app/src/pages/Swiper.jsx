import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        style={{
          width: "80%",
        }}
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper">
        <SwiperSlide>
          <img
            src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg"
            alt="random"
            width={300}
          />
          <p
            style={{
              color: "rgb(67, 142, 242)",
                fontSize: "18px",
              fontWeight: "semibold",
            }}>
            15 Make-Ahead Breakfasts <br />
            Under 300 Calories
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/26879-featured-700x400.jpg"
            alt="random"
            width={300}
          />
          <p
            style={{
              color: "rgb(67, 142, 242)",
                fontSize: "18px",
              fontWeight: "semibold",
            }}>
            Essential Guide to Macros
            <br /> Macros
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/26860-featured-700x400.jpg"
            alt="random"
            width={300}
          />
          <p
            style={{
              color: "rgb(67, 142, 242)",
                 fontSize: "18px",
              fontWeight: "semibold",
            }}>
            

              Essential Guide to <br /> Carbohydrates
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/26856-featured-700x400.jpg"
            alt="random"
            width={300}
          />
          <p
            style={{
              color: "rgb(67, 142, 242)",
              fontSize: "20px",
              fontWeight: "semibold",
            }}>
            Essential Guide to Protein
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51000-featured-700x400.jpg"
            alt="random"
            width={300}
          />
          <p
            style={{
              color: "rgb(67, 142, 242)",
                 fontSize: "18px",
              fontWeight: "semibold",
            }}>
            15 Make-Ahead Breakfasts Under <br /> 300 Calories
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/10548-featured-700x400.jpg"
            alt="random"
            width={300}
          />
          <p
            style={{
              color: "rgb(67, 142, 242)",
              fontSize: "18px",
              fontWeight: "semibold",
            }}>
            What to Know Before You <br /> Try Intermittent Fasting
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/53014-featured-700x400.png"
            alt="random"
            width={300}
          />
          <p
            style={{
              color: "rgb(67, 142, 242)",
                fontSize: "18px",
              fontWeight: "semibold",
            }}>
            7 Days To Better Sleep, <br /> Focus, Mood and Energy
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
