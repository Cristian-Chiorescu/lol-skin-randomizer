export async function getAllChampionIcons() {
  const url =
    "https://ddragon.leagueoflegends.com/cdn/15.18.1/data/en_US/champion.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch all champion icons");
  }
}

export async function getChampionData(championName: string) {
  const url = `https://ddragon.leagueoflegends.com/cdn/15.18.1/data/en_US/champion/${championName}.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch champion skins");
  }
}
