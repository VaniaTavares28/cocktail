import axios from "axios";
import { IngredientResponse } from "../interfaces";

export const randomEight = <Type>(array: Type[]): Type[] => {
  const randomIndex = Math.floor(Math.random() * (array.length - 7));
  return [...array].sort(() => Math.random() - 0.5).splice(randomIndex, 8);
};

export const alphabetGenerator = () => {
  return [...Array(26)].map((_elt, index: number) =>
    String.fromCharCode(index + 97)
  );
};

const treatItemName = (item: string): string => {
  const itemArray = item.split(" ");
  if (itemArray.length === 1) return item;
  else return itemArray.join("%20");
};

export const fetchIngredient = async (
  ingredientId: string | number
): Promise<IngredientResponse | void> => {
  try {
    const { status, data } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${ingredientId}`
    );
    if (status === 200 && data?.ingredients) {
      return data?.ingredients[0];
    } else throw new Error("No ingredient found");
  } catch (error) {
    throw new Error((error as Record<string, string>)?.message);
  }
};

export const getIngredientDrinks = async (
  obj: IngredientResponse
): Promise<IngredientResponse> => {
  const newObj = { ...obj };
  const { data } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${treatItemName(
      obj.strIngredient as string
    )}`
  );
  newObj.ingredientDrinks = data?.drinks || [];
  newObj.strIngredientThumb = `https://www.thecocktaildb.com/images/ingredients/${treatItemName(
    obj.strIngredient as string
  )}.png`;
  return newObj;
};
