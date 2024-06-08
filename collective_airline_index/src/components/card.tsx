export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="">
        <h1>This is starting</h1>
        <button className="bg-sky-500 hover:bg-sky-700 text-white">
          {children}
        </button>
        <h1>This is ending</h1>
      </div>
    </>
  );
}
