export default function Layout({ children, testing, testroute }) {
  return (
    <>
      {children}
      {testing}
      {testroute}
    </>
  );
}
