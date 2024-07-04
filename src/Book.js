

const Book = ({ img, title, Author, index }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title}</h2>
      <h4> {Author} </h4>
      <h3 className="number"># {index+1}</h3>
    </article>
  );
};

export default Book;