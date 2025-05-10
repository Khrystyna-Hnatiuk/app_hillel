export const Button = ({ label, ...rest }) => (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-900 transition"
      {...rest}
    >
      {label}
    </button>
  );