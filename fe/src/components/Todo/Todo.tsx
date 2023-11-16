import { useEffect, useState } from "react";
import fetchApi from "../../services/axios/axiosConfig";
import { useAppDispatch, useAppSelector } from "../../services/redux/store";
import {
  setFilteredQuizzes,
  setQuizzes,
} from "../../services/redux/reducers/globalReducer";
import FilterDropdown from "../Dropdown/FilterDropdown/FilterDropdown";
import moment from "moment";

const Todo = () => {
  const { quizzes, filteredQuizzes } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  async function fetchData() {
    try {
      const response = await fetchApi.get("/quiz");
      dispatch(setQuizzes(response.data));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    dispatch(
      setFilteredQuizzes(
        quizzes.filter((quiz) => quiz.type === filter.toLowerCase())
      )
    );
  }, [filter]);
  const displayedQuizzes =
    filter.toLowerCase() === "all" ? quizzes : filteredQuizzes;
  console.log(displayedQuizzes);

  return (
    <section className="side-container">
      <div className="container-title">
        <h2>What's Due</h2>
        <p
          className="filter"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {filter}
        </p>
        {isOpen ? (
          <FilterDropdown setFilter={setFilter} setIsOpen={setIsOpen} />
        ) : (
          <></>
        )}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        quaerat?
      </p>
      {displayedQuizzes.length > 0 ? (
        <ul className="tasks-list">
          {displayedQuizzes.map((quiz) => (
            <li key={quiz.id} className="task">
              <div className="task-title">
                {/* <span>{quiz.icon}</span> */}
                <h3>{quiz.title}</h3>
              </div>
              <div className="task-content">
                <div className="col">
                  <p>Course: </p>
                  <p>Topic: </p>
                  <p>Due to: </p>
                </div>
                <div className="col">
                  <p>{quiz.course}</p>
                  <p>{quiz.topic}</p>
                  <p>{moment(quiz.due).format("MMMM Do YYYY")}</p>
                </div>
              </div>

              <button>{quiz.command}</button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-data">
          <p> No Quizzes</p>
        </div>
      )}
    </section>
  );
};

export default Todo;
