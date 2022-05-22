import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { CocktailCard, Warning } from "../../components";
import { fetchIngredient, getIngredientDrinks } from "../../helpers/functions";
import { IngredientResponse } from "../../interfaces";
import images from "../../assets/images";
import "./style.css";

const IngredientPage = () => {
  const params = useParams();
  const { ingId } = params;

  if (!ingId) <Warning warning="No information" />;
  const {
    isLoading,
    isError,
    data: ingredient,
    error,
  } = useQuery(["ingredient", ingId], ({ queryKey }) =>
    fetchIngredient(queryKey[1] as string)
  );

  const { isIdle, data } = useQuery(
    ["drinks", ingredient],
    ({ queryKey }) => getIngredientDrinks(queryKey[1] as IngredientResponse),
    {
      enabled: !!ingredient,
    }
  );

  if (isLoading || isIdle) <Warning warning="Loading..." />;
  if (isError) <Warning warning={(error as Record<string, string>)?.message} />;
  return (
    <>
      <section className="ingredient-images">
        <article>
          <h2>{data?.strIngredient}</h2>
          <div className="ingredient-image">
            <img src={data?.strIngredientThumb} alt={data?.strIngredient} />
          </div>
          <div className="ingredient-btn">
            <img src={images.arrowLeft} alt="left arrow" />
            <img src={images.arrowRight} alt="right arrow" />
          </div>
        </article>
        <article>
          <h2>Drinks</h2>
          <div className="cocktail-ingredients-grid">
            {data?.ingredientDrinks?.map((drink) => (
              <CocktailCard key={drink.idDrink} size={100} drink={drink} />
            ))}
          </div>
        </article>
      </section>
      <section className="ingredient-text">
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
      </section>
    </>
  );
};

export default IngredientPage;
