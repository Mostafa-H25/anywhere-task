import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/redux/store";
import fetchApi from "../../services/axios/axiosConfig";
import { setAnnouncements } from "../../services/redux/reducers/globalReducer";
const Announcement = () => {
  const { announcements } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  async function fetchData() {
    try {
      const response = await fetchApi.get("/announcement");
      dispatch(setAnnouncements(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article className="main-container">
      <h2>Announcements</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, natus.
      </p>
      {announcements.length > 0 ? (
        <ul className="announcements-list">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="announcement">
              <div className="user-data">
                <img src={announcement.createdBy.department} alt="" />
                <div className="user-title">
                  <h4>
                    {announcement.createdBy.title} &nbsp;
                    {announcement.createdBy.firstName} &nbsp;
                    {announcement.createdBy.lastName}
                  </h4>
                  <p>{announcement.createdBy.department}</p>
                </div>
              </div>
              <p className="announcement-text">{announcement.announcement}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-data">
          <p> No Announcements</p>
        </div>
      )}
    </article>
  );
};

export default Announcement;
