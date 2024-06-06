export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* first rendering the page.tsx  */}
      {children}
      <h1>Feature Products</h1>
    </>
  );
}
