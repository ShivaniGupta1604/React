import { CDN_URL } from "../Utils/constants";

const ItemList = ({ items }) => {
    return (
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="m-2 p-2 border-gray-200 border-b-2 text-left"
          >
            <div className="flex justify-between items-start">
              {/* Text Content */}
              <div className="flex-1 pr-4 w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    {" "}
                    - ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              {/* Right-Aligned Image */}
              <div className="w-3/12  object-cover ">
              <div className="absolute">
                <button className="p-2  rounded-lg bg-gray-600 hover:bg-gray-800 text-white shadow-lg m-auto">Add + </button>
                </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full object-cover "
                alt={item.card.info.name}
              />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default ItemList;
