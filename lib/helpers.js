export const slugify = (text) => {
  return text
    .normalize("NFD") // Normalize accented characters (e.g., é → e + ́)
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Trim hyphens from start/end
};