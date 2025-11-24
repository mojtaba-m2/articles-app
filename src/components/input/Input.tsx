interface IInput {
  title: string;
  inputType: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange: () => {
  //   title?: string;
  //   date?: number;
  //   readingTime?: number;
  //   author?: string;
  //   articleText?: string;
  // };
}

function Input(props: IInput) {
  return (
    <div>
      <label className="inline-block mt-4">{props.title}</label>
      <input
        className="block w-full border-2 text-right p-1 rounded mt-2"
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.inputType}
      />
    </div>
  );
}

export default Input;
