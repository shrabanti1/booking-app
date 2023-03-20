
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://media.cntraveller.in/wp-content/uploads/2019/04/ITC-Royal-Bengal-Lead.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn0.weddingwire.in/vendor/6409/3_2/1280/jpg/hotel-itc-royal-bengal-a-luxury-collection-hotel-hotel-space3_15_316409-159775608773237.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://static.toiimg.com/thumb/msid-55061677,width-400,resizemode-4/55061677.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>JW Mariott</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.travelapi.com/lodging/38000000/37600000/37590700/37590630/74422c61_z.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/86/84/7d/pool.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Taj Bengal</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;