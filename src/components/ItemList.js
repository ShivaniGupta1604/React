import { useDispatch } from "react-redux";
import { useState } from "react";
import { CDN_URL } from "../Utils/constants";
import { addIetm, removeItem } from "../Utils/cartSlice";

const ItemList = ({ items, showAddButton = true }) => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({}); // Track added items by ID

  const handleAddItem = (item) => {
    const itemId = item.card.info.id;

    if (!addedItems[itemId]) {
      dispatch(addIetm(item)); // Add to cart
    } else {
      dispatch(removeItem(item)); // Remove from cart
    }

    // Toggle the added state
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div>
      {items.map((item) => {
        const itemId = item.card.info.id;
        return (
          <div
            key={itemId}
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
              <div className="w-3/12 relative">
                {showAddButton && (
                  <button
                    className="absolute bottom-2 right-2 p-2 rounded-lg bg-gray-700 hover:bg-gray-900 text-white shadow-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    {addedItems[itemId] ? "Remove" : "Add +"}
                  </button>
                )}

                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full object-cover rounded"
                  alt={item.card.info.name}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
