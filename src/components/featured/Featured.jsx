import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn1.tripoto.com/media/filter/tst/img/2052077/Image/1650295522_back_water_of_kerala_soul_of_kerala.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kerala</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://staticimg.amarujala.com/assets/images/2021/08/23/750x506/rajasthan_1629702845.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Rajasthan</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};



export default Featured;