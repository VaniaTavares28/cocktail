import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { alphabetGenerator } from "../../helpers/functions";

const AlphabeticalFilter = ({ filterTitle }: { filterTitle: string }) => {
  const alphabet = useMemo<string[]>(() => {
    return alphabetGenerator();
  }, []);

  return (
    <section
      className="outer-wrapper"
      style={{ paddingBlockEnd: "50px", borderBlockStart: "1.5px solid white" }}
    >
      <h3>Browse {filterTitle}</h3>
      <h2>
        {alphabet.map((letter, index) => (
          <span key={letter + "af"}>
            {index === 0 ? "" : " / "}
            <NavLink
              style={{ fontSize: "20px" }}
              to={`/search/letter=${letter}`}
            >
              {letter.toUpperCase()}
            </NavLink>
          </span>
        ))}
      </h2>
    </section>
  );
};

export default AlphabeticalFilter;
