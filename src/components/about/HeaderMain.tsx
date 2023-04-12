import FirstNotes from "./FirstNotes";
import Rectangle from "./Rectangle";

function HeaderMain() {
  return (
    <div className="header-main">
      <Rectangle />
      <div className="header-main_info">
        <div className="owner-name">
          <p>Artem</p>
          <p>Puzik</p>
        </div>
        <div className="owner-proffession">
          <p>Frontend-Developer</p>
        </div>
        <FirstNotes />
      </div>
    </div>
  );
}

export default HeaderMain;
