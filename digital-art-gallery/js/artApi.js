const BASE_URL = 'https://api.artic.edu/api/v1/artworks';

export async function fetchArtworks(query = '', limit = 12) {
  try {
    let url = `${BASE_URL}?limit=50&fields=id,title,artist_display,date_display,medium_display,department_title,image_id`;
    
    if (query) {
      url = `${BASE_URL}/search?q=${encodeURIComponent(query)}&limit=${limit}&fields=id,title,artist_display,date_display,medium_display,department_title,image_id`;
    }
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response failed');
    
    const data = await response.json();
    const iiifBaseUrl = data.config?.iiif_url || 'https://www.artic.edu/iiif/2';
    const items = data.data || [];

    const artworks = items
      .filter(item => item && item.image_id)
      .slice(0, limit)
      .map(item => ({
        id: item.id,
        title: item.title || 'Untitled',
        artist: item.artist_display || 'Unknown Artist',
        date: item.date_display || 'N/A',
        medium: item.medium_display || 'N/A',
        department: item.department_title || 'General Collection',
        imageUrl: `${iiifBaseUrl}/${item.image_id}/full/843,/0/default.jpg`
      }));

    return artworks;
  } catch (error) {
    console.error('API Fetch Error:', error);
    return [];
  }
}