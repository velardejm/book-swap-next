export default function SwapRequest({ setIsSwapRequestOpen, selectedBook }) {
  return (
    <>
      <p>Swap Request Form</p>
      {selectedBook && <p>{selectedBook}</p>}
      <button onClick={() => setIsSwapRequestOpen(false)}>Close</button>
    </>
  );
}
