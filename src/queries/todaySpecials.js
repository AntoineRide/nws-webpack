export default async function retrieveTodaysSpecials() {
    const url = "https://api.gill-cote-bistro.fr/suggestions?_sort=id:asc";
  
    const response = await fetch(url);
    return response.json();
  }