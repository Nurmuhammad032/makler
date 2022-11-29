const baseURL = "https://fathulla.tk";

const requests = {
  fetchCategories: `${baseURL}/api/v1/categories/`,
  fetchAllHouses: `${baseURL}/products/web/api/v1/all-web-houses/`,
  fetchAllMasters: `${baseURL}/master/api/v1/maklers/`,
};

export const getRequests = async () => {
  const [categories, allHouses, masters] = await Promise.all([
    fetch(requests.fetchCategories).then((res) => res.json()),
    fetch(requests.fetchAllHouses).then((res) => res.json()),
    fetch(requests.fetchAllMasters).then((res) => res.json()),
  ]);

  return {
    categories: categories.results,
    allHouses: allHouses.results,
    masters: masters.results,
  };
};

// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
export default requests;
