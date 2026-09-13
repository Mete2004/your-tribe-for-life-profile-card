export async function load() {
  const id = 275;
  const res = await fetch(`https://fdnd.directus.app/items/person/${id}`);
  const data = await res.json();

  return { person: data.data };
}