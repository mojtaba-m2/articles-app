import type { IArticle } from "../../pages/home/Home";

interface IProps {
  props: IArticle;
}

function Article({ props }: IProps) {
  return (
    <div className="border-2 ">
      <img className="object-cover w-full h-60" src={props.imgUrl} />
      <div className="p-3">
        <h3 className="text-center text-lg">{`<${props.title}>`}</h3>

        <p className="text-right mt-3">{` خواندن ${props.readingTime} دقیقه ای `}</p>
      </div>
    </div>
  );
}

export default Article;
