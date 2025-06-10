import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "514911",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/487a52e2-2ee9-482f-90eb-2054de4a079a_514911.JPG",
      locality: "Huda Market",
      areaName: "Sector 37",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "3.3K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-11 01:00:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
    },
    cta: {
      link: "https://www.swiggy.com/city/gurgaon/kfc-huda-market-sector-37-rest514911",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "651214",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/e21d1285-b7ff-4233-a6d5-f442916bab5c_651214.JPG",
      locality: "Huda Market",
      areaName: "Sector 77",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "7.6K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-11 01:45:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹91",
      },
    },
    cta: {
      link: "https://www.swiggy.com/city/gurgaon/mcdonalds-huda-market-sector-77-rest651214",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "21742",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/b3c5f351-8f24-4262-9e72-0cfea6dd22d2_21742.JPG",
      locality: "Huda Market",
      areaName: "Huda City",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 3.8,
      parentId: "1776",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-11 04:00:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "₹165 OFF",
        subHeader: "ABOVE ₹649",
        discountTag: "FLAT DEAL",
        headerTypeV2: 12,
      },
    },
    cta: {
      link: "https://www.swiggy.com/city/gurgaon/wow-momo-huda-market-huda-city-rest21742",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "807690",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/abfa0526-fe57-4971-84c3-b7a14b9cad23_807690.JPG",
      locality: "Jailland",
      areaName: "Sector- 11",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.0,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-11 04:45:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
    },
    cta: {
      link: "https://www.swiggy.com/city/gurgaon/pizza-hut-jailland-sector-11-rest807690",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "418199",
      name: "Mad Over Donuts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/12/5f4bdb4c-1929-43a0-9f72-d6808e623b50_418199.jpg",
      locality: "Huda Market",
      areaName: "Sector 37",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts"],
      avgRating: 4.4,
      veg: true,
      parentId: "611",
      avgRatingString: "4.4",
      totalRatingsString: "371",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹165 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
        headerTypeV2: 12,
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-220283d8-2fdb-47cb-b00d-df94bd8307b7",
    },
    cta: {
      link: "https://www.swiggy.com/city/gurgaon/mad-over-donuts-huda-market-sector-37-rest418199",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "259714",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/2b72751a-b3b5-4687-8db9-05e181060f12_259714.jpg",
      locality: "Mata Road",
      areaName: "Sector 14",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.6",
      totalRatingsString: "4.4K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-11 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "65% OFF",
        subHeader: "UPTO ₹125",
        headerTypeV2: 12,
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-220283d8-2fdb-47cb-b00d-df94bd8307b7",
    },
    cta: {
      link: "https://www.swiggy.com/city/gurgaon/nic-ice-creams-mata-road-sector-14-rest259714",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} /> */}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  //console.log(props);
  const { resData } = props;

  const {
    cloudinaryImageId,
    cuisines,
    avgRating,
    name,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />

      <h3 className="resName">{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <h4 className="rating">{avgRating}</h4>
      <h4 className="costForTwo">{costForTwo}</h4>
      <h4 className="time">{deliveryTime}</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
