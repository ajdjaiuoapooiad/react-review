import { useState } from "react";
import people from './data'
import { FaBeer } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";



const App = () => {
  const [ index,setIndex ] = useState(2)
  const {name,job,image,text} = people[index]

  console.log(name);

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return newIndex;
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return newIndex;
    })
  }
  

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt="" className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight  />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>

          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  );
};
export default App;
