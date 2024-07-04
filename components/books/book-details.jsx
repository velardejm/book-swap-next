export default function BookDetails({ book, children }) {
  const { title, author, genre, condition } = book;
  return (
    <>
      <tr className="hover:bg-gray-100">
        <td>{title}</td>
        <td>{author}</td>
        <td>{genre}</td>
        <td>{condition}</td>
        {/* <td className="flex">
          <button className="btn">Swap</button>
        </td> */}
        {children}
      </tr>
    </>
  );
}
