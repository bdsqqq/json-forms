interface buttonProps {
  action: () => void;
}

const Button: React.FC<buttonProps> = ({ children, action }) => {
  return (
    <button
      onClick={action}
      className="inline-block px-3 py-1 mr-3 mb-3 text-xs font-medium leading-6 text-center text-gray-700 uppercase transition bg-gray-300 rounded shadow hover:shadow-lg hover:bg-gray-400 focus:outline-none cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
