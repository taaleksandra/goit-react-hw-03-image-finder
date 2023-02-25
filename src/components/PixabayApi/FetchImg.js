import axios from 'axios';

export const fetchImg = async (searchQuery, pageNumber) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=31998203-230b8715d00921ede83d56272&image_type=photo&orientation=horizontal&per_page=12`
  );
  // console.log(`Results for ${searchQuery}:`);
  // console.log(response.data.hits);
  return response.data.hits;
};
