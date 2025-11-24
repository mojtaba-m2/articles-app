import { useState } from "react";
import Input from "../../components/input/Input";
import axios from "axios";

export interface InewArt {
  id?: number;
  title: string;
  date: string;
  readingTime: number | null;
  author: string;
  textArticle: string;
}

function WritingArticle() {
  const [newArt, setNewArt] = useState<InewArt>({
    title: "",
    date: "",
    readingTime: null,
    author: "",
    textArticle: "",
  });

  const handlerTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);

    setNewArt((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handlerDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewArt((prevState) => ({
      ...prevState,
      date: e.target.value,
    }));
  };

  const handlerReadingTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewArt((prevState) => ({
      ...prevState,
      readingTime: Number(e.target.value),
    }));
  };

  const handlerAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewArt((prevState) => ({
      ...prevState,
      author: e.target.value,
    }));
  };

  const handlerArticleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewArt((prevState) => ({
      ...prevState,
      textArticle: e.target.value,
    }));
  };

  const validate = (data: InewArt) => {
    if (!data.title.trim()) return " عنوان نمیتواند خالی باشد";

    if (!data.author.trim()) return "نام نویسنده نمیتواند خالی باشد";

    if (!data.textArticle) return "متن مقاله نمیتواند خالی باشد";
  };

  const handlerSendArticle = () => {
    const checkValidation = validate(newArt);
    if (checkValidation) {
      alert(checkValidation);
    }

    // console.log(newArt);

    // function sendArticle({
    //   title,
    //   date,
    //   author,
    //   readingTime,
    //   articleText,
    // }: InewArt) {
    //   axios.post("http://localhost:8000/articles", {
    //     id: 7,
    //     titleArticle: title,
    //     dateArticle: date,
    //     authorArticle: author,
    //     readingTimeArticle: readingTime,
    //     articleTextArticle: articleText,
    //   });
    // }
    // sendArticle(newArt);

    axios.post("http://localhost:8000/articles", {
      title: newArt.title,
      date: newArt.date,
      author: newArt.author,
      readingTime: newArt.readingTime,
      textArticle: newArt.textArticle,
    });
  };

  return (
    <div className="text-right">
      <h1 className="mt-8 text-2xl font-bold">نوشتن مقاله</h1>
      <div className="w-full">
        <Input
          onChange={handlerTitle}
          title="عنوان"
          inputType="text"
          placeholder="عنوان مقاله"
        />
        <Input onChange={handlerDate} title="تاریخ" inputType="date" />
        <Input
          onChange={handlerReadingTime}
          title="مدت زمان خواندن"
          inputType="number"
        />
        <Input onChange={handlerAuthor} title="نویسنده" inputType="string" />

        <div>
          <label className="inline-block mt-6">متن مقاله</label>
          <textarea
            onChange={handlerArticleText}
            className="inline-block border-2 w-full h-40 "
          ></textarea>
        </div>

        <div className="text-center">
          <button
            onClick={handlerSendArticle}
            className="bg-red-300 my-10 p-2  rounded-xl font-medium"
          >
            ارسال مقاله شما
          </button>
        </div>
      </div>
    </div>
  );
}

export default WritingArticle;
