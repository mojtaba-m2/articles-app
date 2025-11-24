import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/article/Article";
import { Link } from "react-router-dom";
import Spiner from "../../components/sniper/Sniper";

export interface IArticle {
  id: number;
  title: string;
  imgUrl: string;
  readingTime: number;
}

export type StateLoading = boolean;

function Home() {
  const [articles, setArticles] = useState<IArticle[]>([]);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        // console.log(res.data);

        setArticles(res.data);

        setIsLogin(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLogin(true);
      });
  }, []);

  // console.log(articles);

  return (
    <div>
      {isLogin === false ? (
        <Spiner />
      ) : (
        <div className="w-full">
          <h1 className="text-right mt-7 text-2xl font-bold">مقالات</h1>
          <div className=" grid grid-cols-4 gap-5 mt-6  ">
            {articles.map((article) => (
              <Link key={article.id} to={`/articles/${article.id}`}>
                <Article props={{ ...article }} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
