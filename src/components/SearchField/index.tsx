import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images";

const SearchField = ({
  placeholder,
  includeButton,
}: {
  placeholder: string;
  includeButton?: boolean;
}) => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    navigate(`search/drink=${target.search.value}`);
    target.search.value = "";
  };

  return (
    <form className="custom-form" ref={formRef} onSubmit={handleSubmit}>
      <input
        name="search"
        style={{ color: "#000001" }}
        placeholder={placeholder}
        type="text"
      />
      {includeButton && (
        <button>
          <img src={images.search} alt="search_button" />
        </button>
      )}
    </form>
  );
};

export default SearchField;
