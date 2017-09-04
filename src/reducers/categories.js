import { GET_CATEGORIES, UPDATE_CATEGORIES } from '../actions/categories'

const initialCategoriesState = [];

function categories(categoriesState = initialCategoriesState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return categoriesState;
    case UPDATE_CATEGORIES:
      return action.categories
    default:
      return categoriesState
  }
}

export default categories;