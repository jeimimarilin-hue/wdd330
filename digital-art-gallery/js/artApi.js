const SEARCH_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=';
const OBJECT_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

export async function fetchArtworks(query = 'painting', limit = 12) {
  try {
    const searchQuery = query ? query : 'painting';
    const searchResponse = await fetch(`${SEARCH_URL}${encodeURIComponent(searchQuery)}`);
    if (!searchResponse.ok) throw new Error('Search failed');
    
    const searchData = await searchResponse.json();
    const objectIDs = searchData.objectIDs || [];

    const validIDs = objectIDs.slice(0, limit * 2);
    const artworkPromises = validIDs.map(async (id) => {
      try {
        const res = await fetch(`${OBJECT_URL}${id}`);
        if (!res.ok) return null;
        const item = await res.json();
        
        if (!item.primaryImage) return null;

        return {
          id: item.objectID,
          title: item.title || 'Untitled Masterpiece',
          artist: item.artistDisplayName || 'Unknown Artist',
          date: item.objectDate || 'N/A',
          medium: item.medium || 'N/A',
          department: item.department || 'General Collection',
          imageUrl: item.primaryImage
        };
      } catch {
        return null;
      }
    });

    const results = await Promise.all(artworkPromises);
    const artworks = results.filter(art => art !== null).slice(0, limit);

    return artworks;
  } catch (error) {
    console.error('API Fetch Error:', error);
    return [];
  }
}