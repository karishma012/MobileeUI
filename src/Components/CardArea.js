import React from "react";
import { Link } from 'react-router-dom'; // Import Link from React Router
import Card from "./Card";
import Footer from "./Footer";

const CardArea = ({ cropCards }) => {
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
 

  return (
    <>
      <div
        className={`container mx-auto md:w-2/6  ${
          cropCards ? 'overflow-hidden' : ''
        }`}
      >
        <div className="bg-white h-fit m-2">
          <div className="flex flex-wrap">
            {cardData.map((data, index) => (
              <div key={index} className="w-1/2 p-2">
                {/* Wrap the card with Link */}
                <Link to={`/details/${index}`}>
                  <Card data={data} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardArea;
