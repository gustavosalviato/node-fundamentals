export function extractQuery(query) {
  return query
    .substr(1)
    .split("&")
    .reduce((acc, obj) => {
      const [key, value] = obj.split("=");

      acc[key] = value;

      return acc;
    }, {});
}
