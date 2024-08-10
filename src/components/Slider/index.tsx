import "./slider.css";

const Slider = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/2149774102/photo/smiling-black-schoolboy-writing-on-a-class-at-elementary-school.webp?b=1&s=170667a&w=0&k=20&c=BR9RTWiSEYLAcFVEEkMDBXjYs12eS8FSRMTG0oNdVHE="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/1401178460/photo/teacher-helping-a-young-student-with-her-homework-in-the-library-after-school-two-females-are.webp?b=1&s=170667a&w=0&k=20&c=aPY2PqE2XJtiRo-9WSdDR0DHTy3PgocUK0GVTwoYmcg="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.webp?b=1&s=170667a&w=0&k=20&c=wmjzzESyHcSDFXYI1qzngse-EIj7aBMfebEaqjT8cjM="
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
