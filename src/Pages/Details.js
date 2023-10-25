import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State to track whether the item is in the wishlist
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Function to toggle the wishlist status
  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  // Determine the color of the SVG based on the wishlist status
  const svgColor = isInWishlist ? "red" : "black";

  // Selecting the size of Order
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Assuming you have an array of cardData
  const cardData = [
    {
      id:"0",
      name: "Regular fit slogan",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/5a7f/9726/3141347e4d07847fc1ecce9d9606596d?Expires=1696204800&Signature=UUOWm9MArjGSA6KV-uR-RvO1SpeBqxOabS3FoOILrZqEhhVxxfd4FuapuFfxQAGvYuDLUURVKBBdx5e9wTFMZTAekvu8Q95Y-ryvPyEvE-1G7TuLiF9IA4icGbHF2XC2wGHhnZgfGg5P2IxBgRhuIFxcKWK56rRkMunNy3-Qpp5BZpsl2A~vjQVx6bM-iaLG0MMTc6Bog6ix5PKf1lGsZ~9pnDrTZxpW5uIKx4sEOy7iA48-HkgKkwOfWGaHqQBvayG9upNyQohz~uTtYtvXevszQI7NFciJ1SOvh3OZtBWIM2B15GlRZXpmlrsBqltSXy3kGHKW2MHzzVaftKFhPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 1190,
    },
    {
      id:"1",
      name: "Regular fit polo",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0285/68d1/bb40c4fc7c9c3f1d051078ef464071a3?Expires=1696204800&Signature=pPqwZ92pdeRbiKHKY45lW43FCkQUrBH9dpyQvu0irtauoNU43r-LRyXhRHXg4TwY0RlsQEZicJOfuOme9aMYfzlIMlgtswoAhz5oeEOyofwSkmjVnzzB46Hu3ABigjJbVhiHo2AXxSy6CjIGyz88dtX0FiRZE9i8IRcmIo50cXNc5ndYJHShHx48FR02kKomYqhofjmABT8KziHeiuqaWuSZLm29V-o9k5AB-0gflXwzUtW0lnzl3CQ3iv6F058DVXgnIqp2Z2Zj8xJ9fard-MQVngeCfTY4eqRkxxh1SQAQO42-WukiYuTaFJWqRgjpFwQfG67AMvF-5Zkkb1WddQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 1100,
    },
    {
      id:"2",
      name: "Regular fit color block",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/b53e/c2be/a43fb30736ea6f6bb785c149f7f4f5e9?Expires=1696204800&Signature=cQ-B8R0~ouBP7C2D7yoV6f4~kzi72~gfgiCojb39vCHjZwYGayhvS-4v1LpPlleBbPa9eh5r2AlyvlMyEnEVDFd2QdmxiJ-6pQNVktF8u4TGfZlsE3nGhgo7B6F-JmNFYm-6w8IxoJHhBPVFigo0ykZl7zrn5cG7kmRiTjGG~DCtI1KvJhMnSMv56c6-35Qhj7eY-TpNFDOhxjfnKN1d26PbIf02LlOPnvZKrEdqtAyNqMfKpmIpFH~5kABmvScCYwxZSYrU5sVPRbPdYgAQsS4JR855LcxOTiK2NATcpAF4HwgUZkS920h~rXERsaeDBPUcXujl3znVa0ognkARqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 1690,
    },
    {
      id:"3",
      name: "Regular fit v-neck",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0fd6/df70/82b496deb8ae76ce39668581243ee2e2?Expires=1696204800&Signature=Fj361Z-VzNwwDDya-2ZeRDN4v3Otd2XaJaefjBnbg9ZxQyPQwlDWgIULloDUlF-b7XhT8H-QFpU2oHgXi8pTy6HTlmd8H7t7GRc3KFt6rQwOfVpkcsmE2~p1i2vfqa4xyZ3owzv49JTUrFpPD7FnAudgODahnuwscbmAp4hzRsjJwC1-fMkiUqjD~fhNY8N7~xkEYvx5wB-lAZdJlJjBFMWK3eHTjXzctY~nqXx~cW5z~fJoqqy3UqWIColh8m31Z2e2lgfmpXeVh9hgyyTV2AONj1hu9DjoBZlBAZK23jiFj6Pdzk34C9OWSkLYevhexohoTb7SgiXQK2t0webRug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 1290,
    },
    {
      id:"4",
      name: "Product 5",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/2f31/023f/86229d472b8c55771141f312c29d4270?Expires=1696204800&Signature=hkjIHfRFh~zQJXuwIlHzLMYiJNoESKMJjRh-uaxWZUvmlGxuQnMvEuEBevb9B0xKKe9SDVo4SlMAdI-O5O75t0DeSFCUedCfghQWxdzay4FwwJyo49bwmJcwF4318cKTub8Gqadr2HaVttExyLlUjEv61L4sTdqAtPBo6fu97Bj1PbECKi3OAQOZ6UvcE3Gp12H7L~lcwhBCVijgZRLnv5VeyDkxlCP6fa1HoY9Ca40VzMM6qi-yJEPz60pVgehcHr5Ez2AU0B4Xa9B87jadgUvmry8~LUJCCUBEWduGyc6KrpF-KmBi2VY1f0~vgMzrBA5BgzmRdwYLGdKRzogIFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 2000,
    },
    {
      id:"5",
      name: "Product 6",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/6e04/88de/15519d4700092d220b2c70da769fd8c4?Expires=1696204800&Signature=ho9SwLdfOX1iX1JNvx1zpdoR4SwACNxrqQYKPLQXXURNdSsjgBsxflXLQsXWIW1joGtMOf34Hx2oSa5hZSrqZacroJrPVhaAu6eeniXwGHTvwnHitUGMc2LcZiPYhIT~j-yW7vVOG8ZeHoDt4AGP51GiHTUv68GfqIasZND~r-Z5PqpNck9Jt8CXOA8MuZZEjhZ3tYMbWNBjjR2db53BZID1UAqCseHVP1P87QKEPRQ9VK-wFNCXaDVw~MAkQ09AdgyWSBkHo~WIlwbp5PbsYORGJcvnnyPQ~zeZvwOa11d~tVcT9tt1bq8x~nmETPp7UlRGGFWlMW2zYAbV5PjABw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 1700,
    },
  ];


  const selectedCard = cardData[parseInt(id, 10)];

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  const addToCart = () => {
    // Check if a size is selected
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    // Create an object with item details
    const itemToAddToCart = {
      id: selectedCard.id, 
      name: selectedCard.name,
      size: selectedSize,
      price: selectedCard.price,
      imageUrl: selectedCard.imageUrl,

    };

    navigate('/cart', { state: { item: itemToAddToCart } });

  };

  return (
    <div className="container mx-auto md:w-2/6 ">
      <div className="bg-white h-full p-0">
        {/*Navbar Component for all Codes */}
        <div className="p-2 flex justify-between items-center relative">
          {/* Back Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M19 12H5M5 12L12 5M5 12L12 19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Text in Black Color */}
          <h2 className="text-black text-lg font-bold text-center flex-grow">
            Details
          </h2>

          {/* Bell Icon */}
          <div className="absolute top-3 right-2 mr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-black cursor-pointer"
            >
              <circle cx="7" cy="7" r="6.5" fill="black" stroke="white" />
              <path
                d="M7.86415 9.71971V5H6V5.83782H6.89367V9.71971H7.86415Z"
                fill="white"
              />
            </svg>
          </div>
          {/* Original bell icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6 text-white cursor-pointer"
          >
            <path
              d="M9.35416 21C10.0593 21.6224 10.9855 22 12 22C13.0144 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3678 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88257 2.63214 7.75735 3.75736C6.63213 4.88258 5.99999 6.4087 5.99999 8C5.99999 11.0902 5.22046 13.206 4.34965 14.6054C3.61512 15.7859 3.24785 16.3761 3.26131 16.5408C3.27622 16.7231 3.31485 16.7926 3.46176 16.9016C3.59445 17 4.19258 17 5.38884 17H18.6111C19.8074 17 20.4055 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Code for fetching image and Data from dataset */}

        <div className="w-auto h-auto m-4 overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="relative">
            <div
              className="w-full h-96"
              style={{
                backgroundImage: `url(${selectedCard.imageUrl})`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <button
              className="absolute top-4 right-4 bg-white rounded-md p-2"
              onClick={toggleWishlist}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                stroke={svgColor} // Apply color here
                strokeWidth="1.85"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4937 3.22563C8.64426 1.06352 5.56026 0.481919 3.24309 2.46176C0.925921 4.44161 0.599695 7.7518 2.41938 10.0934C3.79383 11.862 7.69845 15.4126 9.52691 17.0443C9.86303 17.3442 10.0311 17.4942 10.2279 17.5532C10.3987 17.6045 10.5886 17.6045 10.7594 17.5532C10.9562 17.4942 11.1243 17.3442 11.4604 17.0443C13.2889 15.4126 17.1935 11.862 18.5679 10.0934C20.3876 7.7518 20.1012 4.42078 17.7442 2.46176C15.3872 0.502745 12.3431 1.06352 10.4937 3.22563Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-2">
          <h3 className="text-md p-2">{selectedCard.name}</h3>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.2826 3.4533C11.5131 2.98636 11.6284 2.75289 11.7848 2.6783C11.9209 2.6134 12.0791 2.6134 12.2152 2.6783C12.3716 2.75289 12.4869 2.98636 12.7174 3.4533L14.904 7.88327C14.9721 8.02112 15.0061 8.09004 15.0558 8.14356C15.0999 8.19094 15.1527 8.22933 15.2113 8.25661C15.2775 8.28741 15.3536 8.29852 15.5057 8.32076L20.397 9.03569C20.912 9.11098 21.1696 9.14862 21.2888 9.27442C21.3925 9.38388 21.4412 9.53428 21.4215 9.68376C21.3988 9.85556 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1911 13.9538 17.136 14.0075 17.1004 14.0714C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.9059 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7553 20.57 17.607 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8583 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8583 11.7639 17.8942 11.6276 17.9658L7.25491 20.2654C6.7939 20.5078 6.5634 20.6291 6.39296 20.5975C6.24467 20.57 6.11671 20.477 6.04472 20.3445C5.96199 20.1922 6.00601 19.9355 6.09406 19.4221L6.92887 14.5547C6.9549 14.403 6.96791 14.3271 6.9591 14.2545C6.95131 14.1902 6.9311 14.128 6.89959 14.0714C6.86401 14.0075 6.80886 13.9538 6.69857 13.8464L3.16054 10.4004C2.78765 10.0372 2.6012 9.85556 2.57851 9.68376C2.55877 9.53428 2.60754 9.38388 2.71124 9.27442C2.83042 9.14862 3.08796 9.11098 3.60303 9.03569L8.4943 8.32076C8.64641 8.29852 8.72247 8.28741 8.7887 8.25661C8.84735 8.22933 8.90015 8.19094 8.94417 8.14356C8.99389 8.09004 9.02791 8.02112 9.09596 7.88327L11.2826 3.4533Z"
                fill="#FFA928"
              />
            </svg>
            <span className="font-bold ">4.5/5</span>
            <p className="text-gray-800">(45 reviews)</p>
          </div>
          <p className="p-2 text-gray-700">
            The name says it all, the right size slightly snugs the body leaving
            enough room for comfort in the sleeves and waist.
          </p>
          {/*Code for Selecting size of order */}
          <div>
            <h3 className="font-bold px-2">Choose Size</h3>
            <button
              className={`px-4 py-2 border-solid border-2 border-gray-700 rounded-md m-1 ${
                selectedSize === "S" ? "bg-gray-400" : ""
              }`}
              onClick={() => handleSizeSelect("S")}
            >
              S
            </button>
            <button
              className={`px-4 py-2 border-solid border-2 border-gray-700 rounded-md m-1 ${
                selectedSize === "M" ? "bg-gray-400" : ""
              }`}
              onClick={() => handleSizeSelect("M")}
            >
              M
            </button>
            <button
              className={`px-4 py-2 border-solid border-2 border-gray-700 rounded-md m-1 ${
                selectedSize === "L" ? "bg-gray-400" : ""
              }`}
              onClick={() => handleSizeSelect("L")}
            >
              L
            </button>
          </div>

          {/*Order Footer for next Page */}
          <div className="flex sticky bg-white shadow-lg z-50 bottom-0 justify-between border-t-2 border-gray-700">
            <div className="flex flex-col m-2 ">
              <p className="text-gray-800">Price:</p>
              <h1 className="text-black text-xl">INR {selectedCard.price}</h1>
            </div>
            <button className="bg-black text-white px-4 m-2 rounded-xl flex items-center"
            onClick={addToCart}>
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="black"
              >
                <path
                  d="M16.4996 8C16.4996 9.06087 16.0782 10.0783 15.328 10.8284C14.5779 11.5786 13.5605 12 12.4996 12C11.4387 12 10.4213 11.5786 9.67116 10.8284C8.92102 10.0783 8.49959 9.06087 8.49959 8M4.13281 7.40138L3.43281 15.8014C3.28243 17.6059 3.20724 18.5082 3.51227 19.2042C3.78027 19.8157 4.24462 20.3204 4.83177 20.6382C5.50006 21 6.40545 21 8.21623 21H16.783C18.5937 21 19.4991 21 20.1674 20.6382C20.7546 20.3204 21.2189 19.8157 21.4869 19.2042C21.7919 18.5082 21.7167 17.6059 21.5664 15.8014L20.8664 7.40138C20.737 5.84875 20.6723 5.07243 20.3285 4.48486C20.0257 3.96744 19.5748 3.5526 19.0341 3.29385C18.42 3 17.641 3 16.083 3L8.91623 3C7.35821 3 6.57921 3 5.9651 3.29384C5.42433 3.5526 4.97349 3.96744 4.67071 4.48486C4.32689 5.07243 4.26219 5.84875 4.13281 7.40138Z"
                  stroke="white"
                  stroke-opacity="1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add to Cart
            </button>
          </div>
          {/* <p className="text-gray-600">INR {selectedCard.price}</p> */}
        </div>
        {/* <p className="text-lg mt-2">Price: {selectedCard.price}</p> */}
        {/* Wishlist Button */}
      </div>
    </div>
  );
};

export default DetailsPage;
