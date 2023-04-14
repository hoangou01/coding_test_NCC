import ItemSection from "../components/ItemsSection";
import LoremSection from "../components/LoremSection";
const ContentRight = () => {
  return (
    <>
      <div className="col-md-8 content">
        <img
          className="logo"
          src="https://res.cloudinary.com/hm-findingjob/image/upload/v1681489055/egjdqtgymrgiq93vq38w.png"
        />
        <h5 className="tittle_logo">
          We do <span className="text-red">it</span> with passion
        </h5>
        {<LoremSection />}

        {<ItemSection />}
      </div>
    </>
  );
};
export default ContentRight;
