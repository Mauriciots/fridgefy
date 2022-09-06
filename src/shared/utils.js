export const truncateRecipeTitle = (title, maxLength = 35) => {
    return title?.length > maxLength ? `${title.slice(0, maxLength).trim()}...` : title;
}