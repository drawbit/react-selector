export const getSuggestions = ({
  keywords,
  values,
  search,
  limit = 5,
}: {
  keywords: string[];
  values: string[];
  search: string;
  limit?: number;
}): string[] => {
  if (!search) return [];

  // exclude selected values
  const filteredKeywords = keywords.filter(
    (keyword: string) => !values.find((value) => value === keyword),
  );
  const searchFiltered = filteredKeywords.filter((keyword: string) =>
    keyword.toLowerCase().includes(search.toLowerCase()),
  );
  const countFiltered =
    searchFiltered.length > limit ? searchFiltered.slice(0, limit) : searchFiltered;

  return countFiltered;
};
