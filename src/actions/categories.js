export const GET_CATEGORIES = 'GET_CATEGORIES'
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'

export function getCategories() {
  return {
    type: GET_CATEGORIES,
  }
}

export function updateCategories( categories ) {
  return {
    type: UPDATE_CATEGORIES,
    categories: categories
  }
}