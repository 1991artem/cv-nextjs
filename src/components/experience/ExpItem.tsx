import { IExpItem } from "../types/types";

function ExpItem({ data }: IExpItem) {
  return (
    <div className="exp-item_container">
      <div className="company-name">
        <p> {data.Duration}</p>
        <p>{data.Company}</p>
      </div>
      <div className="company-location">
        <p>
          Company Location: <span>{data["Company Location"]}</span>
        </p>
      </div>
      <div className="company-position">
        <p>
          Position: <span>{data.Position}</span>
        </p>
      </div>
      <div className="company-technologies">
        {data.Technologies?.length ? (
          <>
            <p>Technologies: </p>
            <p>{data.Technologies?.join(", ")}</p>
          </>
        ) : null}
      </div>
      <div className="company-description">
        {data.Description ? (
          <>
            <p>Description: </p>
            <p>{data.Description}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ExpItem;
