import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { CocktailCard, Warning } from "../../components";
import { fetchIngredient, getIngredientDrinks } from "../../helpers/functions";
import { IngredientResponse } from "../../interfaces";
import images from "../../assets/images";
import "./style.css";

const ChangeIngredient = ({
  ingId,
  custom,
}: {
  ingId: string;
  custom?: boolean;
}) => {
  return (
    <div className={custom ? "ingredient-btn" : "wide-ingredient-btn"}>
      {ingId !== "1" && (
        <div>
          <Link to={`/ingredient/iid=${parseInt(ingId as string) - 1}`}>
            <img src={images.arrowLeft} alt="left arrow" />
          </Link>
        </div>
      )}
      <div>
        <Link to={`/ingredient/iid=${parseInt(ingId as string) + 1}`}>
          <img src={images.arrowRight} alt="right arrow" />
        </Link>
      </div>
    </div>
  );
};

const IngredientPage = () => {
  const params = useParams();
  const { ingId } = params;

  if (!ingId) <Warning warning="No information" />;
  const {
    isLoading,
    isError,
    data: ingredient,
    error,
  } = useQuery(
    ["ingredient", ingId],
    ({ queryKey }) => fetchIngredient(queryKey[1] as string),
    { retry: 1 }
  );

  const { isIdle, data } = useQuery(
    ["drinks", ingredient],
    ({ queryKey }) => getIngredientDrinks(queryKey[1] as IngredientResponse),
    {
      enabled: !!ingredient,
    }
  );

  if (!ingredient)
    return (
      <>
        <Warning warning="No ingredient found" />
        <ChangeIngredient ingId={ingId as string} />
      </>
    );
  if (isLoading || (isIdle && ingredient))
    return <Warning warning="Loading..." />;
  if (isError)
    return <Warning warning={(error as Record<string, string>)?.message} />;
  return (
    <section className="outer-wrapper">
      <div className="ingredient-images">
        <article>
          <h2>{data?.strIngredient}</h2>
          <div className="ingredient-image-container">
            <img src={data?.strIngredientThumb} alt={data?.strIngredient} />
          </div>
          <ChangeIngredient custom ingId={ingId as string} />
        </article>
        <article>
          <h2>Drinks</h2>
          <div className="cocktail-ingredients-grid">
            {data?.ingredientDrinks?.map((drink) => (
              <CocktailCard key={drink.idDrink} size={100} drink={drink} />
            ))}
          </div>
        </article>
      </div>
      <div className="ingredient-text">
        {data?.strDescription && (
          <>
            <h2>Description</h2>
            <p>{data?.strDescription}</p>
          </>
        )}
        {data?.strDescription && (
          <>
            <h2>Type</h2>
            <p>{data?.strType}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default IngredientPage;
