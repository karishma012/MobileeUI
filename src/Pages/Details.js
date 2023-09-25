import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card'; 

const DetailsPage = () => {
  const { id } = useParams();

  // Assuming you have an array of cardData
  const cardData = [
    {
      name: "Regular fit slogan",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/5a7f/9726/3141347e4d07847fc1ecce9d9606596d?Expires=1696204800&Signature=UUOWm9MArjGSA6KV-uR-RvO1SpeBqxOabS3FoOILrZqEhhVxxfd4FuapuFfxQAGvYuDLUURVKBBdx5e9wTFMZTAekvu8Q95Y-ryvPyEvE-1G7TuLiF9IA4icGbHF2XC2wGHhnZgfGg5P2IxBgRhuIFxcKWK56rRkMunNy3-Qpp5BZpsl2A~vjQVx6bM-iaLG0MMTc6Bog6ix5PKf1lGsZ~9pnDrTZxpW5uIKx4sEOy7iA48-HkgKkwOfWGaHqQBvayG9upNyQohz~uTtYtvXevszQI7NFciJ1SOvh3OZtBWIM2B15GlRZXpmlrsBqltSXy3kGHKW2MHzzVaftKFhPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: "1,190",
    },
    {
      name: "Regular fit polo",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0285/68d1/bb40c4fc7c9c3f1d051078ef464071a3?Expires=1696204800&Signature=pPqwZ92pdeRbiKHKY45lW43FCkQUrBH9dpyQvu0irtauoNU43r-LRyXhRHXg4TwY0RlsQEZicJOfuOme9aMYfzlIMlgtswoAhz5oeEOyofwSkmjVnzzB46Hu3ABigjJbVhiHo2AXxSy6CjIGyz88dtX0FiRZE9i8IRcmIo50cXNc5ndYJHShHx48FR02kKomYqhofjmABT8KziHeiuqaWuSZLm29V-o9k5AB-0gflXwzUtW0lnzl3CQ3iv6F058DVXgnIqp2Z2Zj8xJ9fard-MQVngeCfTY4eqRkxxh1SQAQO42-WukiYuTaFJWqRgjpFwQfG67AMvF-5Zkkb1WddQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: "1,100  -52%",
    },
    {
      name: "Regular fit color block",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/b53e/c2be/a43fb30736ea6f6bb785c149f7f4f5e9?Expires=1696204800&Signature=cQ-B8R0~ouBP7C2D7yoV6f4~kzi72~gfgiCojb39vCHjZwYGayhvS-4v1LpPlleBbPa9eh5r2AlyvlMyEnEVDFd2QdmxiJ-6pQNVktF8u4TGfZlsE3nGhgo7B6F-JmNFYm-6w8IxoJHhBPVFigo0ykZl7zrn5cG7kmRiTjGG~DCtI1KvJhMnSMv56c6-35Qhj7eY-TpNFDOhxjfnKN1d26PbIf02LlOPnvZKrEdqtAyNqMfKpmIpFH~5kABmvScCYwxZSYrU5sVPRbPdYgAQsS4JR855LcxOTiK2NATcpAF4HwgUZkS920h~rXERsaeDBPUcXujl3znVa0ognkARqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: "1,690",
    },
    {
      name: "Regular fit v-neck",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0fd6/df70/82b496deb8ae76ce39668581243ee2e2?Expires=1696204800&Signature=Fj361Z-VzNwwDDya-2ZeRDN4v3Otd2XaJaefjBnbg9ZxQyPQwlDWgIULloDUlF-b7XhT8H-QFpU2oHgXi8pTy6HTlmd8H7t7GRc3KFt6rQwOfVpkcsmE2~p1i2vfqa4xyZ3owzv49JTUrFpPD7FnAudgODahnuwscbmAp4hzRsjJwC1-fMkiUqjD~fhNY8N7~xkEYvx5wB-lAZdJlJjBFMWK3eHTjXzctY~nqXx~cW5z~fJoqqy3UqWIColh8m31Z2e2lgfmpXeVh9hgyyTV2AONj1hu9DjoBZlBAZK23jiFj6Pdzk34C9OWSkLYevhexohoTb7SgiXQK2t0webRug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: "1,290",
    },
    {
      name: "Product 5",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/2f31/023f/86229d472b8c55771141f312c29d4270?Expires=1696204800&Signature=hkjIHfRFh~zQJXuwIlHzLMYiJNoESKMJjRh-uaxWZUvmlGxuQnMvEuEBevb9B0xKKe9SDVo4SlMAdI-O5O75t0DeSFCUedCfghQWxdzay4FwwJyo49bwmJcwF4318cKTub8Gqadr2HaVttExyLlUjEv61L4sTdqAtPBo6fu97Bj1PbECKi3OAQOZ6UvcE3Gp12H7L~lcwhBCVijgZRLnv5VeyDkxlCP6fa1HoY9Ca40VzMM6qi-yJEPz60pVgehcHr5Ez2AU0B4Xa9B87jadgUvmry8~LUJCCUBEWduGyc6KrpF-KmBi2VY1f0~vgMzrBA5BgzmRdwYLGdKRzogIFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 2000,
    },
    {
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

  return (
    <div className="container mx-auto md:w-2/6 border-solid-red border-4 border-red">
      <div className="bg-white h-screen p-0">
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
          <h2 className="text-black text-lg font-bold text-center flex-grow">Details</h2>

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
        {/* {selectedCard && <Card data={selectedCard} />} */}

        {/* <p className="text-lg mt-2">Price: {selectedCard.price}</p> */}
        {/* Wishlist Button */}
        
      </div>
    </div>
  );
};

export default DetailsPage;
