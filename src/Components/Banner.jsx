import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import banner4 from "../assets/banner4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            className="w-full h-[300px] md:h-[500px] opacity-50" />
            <p className="text-3xl md:text-5xl text-gray-800 font-bold absolute top-[50%] left-[25%]">Have anything to ask about a porduct ??</p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            className="w-full h-[300px] md:h-[500px] opacity-50" />
            <p className="absolute  text-3xl md:text-5xl text-gray-800 font-bold top-[50%] right-[30%]">Get FeedBack on Your asked Questions</p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner3}
            className="w-full h-[300px] md:h-[500px] opacity-50" />
            <p className="absolute text-3xl md:text-5xl text-white font-bold top-[50%] right-[20%]">Recommend Others The Best Products for others</p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={banner4}
            className="w-full h-[300px] md:h-[500px] opacity-50" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;