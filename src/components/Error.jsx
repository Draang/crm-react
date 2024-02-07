export default function Error({ children }) {
  return (
    <div className="my-4 text-center bg-red-800 text-white font-bold p-3 uppercase rounded">
      {children}
    </div>
  );
}
