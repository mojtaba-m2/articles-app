import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import Sniper from "../../components/sniper/Sniper";
import type { StateLoading } from "../home/Home";

interface IContentArt {
  id: number;
  title: string;
  imgUrl: string;
  readingTime: number;
  author: string;
  date: string;
  textArticle: string;
}

function InnerArticle() {
  const [contentArt, setContentArt] = useState<IContentArt>();

  const [isLogin, setIsLogin] = useState<StateLoading>(false);

  const params = useParams();

  console.log(params.id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${params.id}`)

      .then((res) => {
        setContentArt(res.data);
        setIsLogin(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLogin(true);
      });

    console.log(contentArt);
  }, []);

  return (
    <div className="text-right">
      {isLogin === false ? (
        <Sniper />
      ) : (
        <Container>
          <h2 className="mt-10 text-3xl font-bold"> {contentArt?.title} </h2>
          <div className="my-4 flex flex-row-reverse gap-4">
            <span>تاریخ : {contentArt?.date}</span>
            <span> نویسنده: {contentArt?.author}</span>
            <span>{`مدت زمان خواندن : ${contentArt?.readingTime} دقیقه `}</span>
          </div>
          <div className="0">
            <img className="w-full" src={contentArt?.imgUrl} alt="" />
            <p
              dir="auto"
              className="whitespace-pre-wrap break-normal mt-8 mb-44 leading-loose font-medium   "
            >
              {contentArt?.textArticle}
            </p>
          </div>
        </Container>
      )}
    </div>
  );
}

export default InnerArticle;
