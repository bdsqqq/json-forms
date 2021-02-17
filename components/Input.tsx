interface InputProps {
  fieldName: string;
  refName: any;
  textArea?: boolean;
}

const Input: React.FC<InputProps> = ({ fieldName, refName, textArea }) => {
  return (
    <div className="my-2">
      <label
        className="font-semibold text-gray-700 block pb-1 text-left"
        htmlFor={fieldName}
      >
        {fieldName}
      </label>
      {textArea ? (
        <textarea
          className="border-1 rounded-r px-4 py-2 w-full"
          placeholder={fieldName}
          name={fieldName}
          ref={refName}
        />
      ) : (
        <input
          className="border-1 rounded-r px-4 py-2 w-full"
          type="text"
          placeholder={fieldName}
          name={fieldName}
          ref={refName}
        />
      )}
    </div>
  );
};

export default Input;
