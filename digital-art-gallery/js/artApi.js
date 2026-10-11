const BASE_URL = 'https://api.artic.edu/api/v1/artworks';

export async function fetchArtworks(query = 'monet', limit = 12) {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${query}&limit=${limit}&fields=id,title,artist_display,date_display,medium_display,department_title,image_id&include=config`);
    if (!response.ok) throw new Error('Network response failed');
    
    const data = await response.json();
    const iiifBaseUrl = data.config?.iiif_url || 'https://www.artic.edu/iiif/2';

    const artworks = data.data.map(item => {
      const hasImage = Boolean(item.image_id);
      const imageUrl = hasImage 
        ? `${iiifBaseUrl}/${item.image_id}/full/843,/0/default.jpg` 
        : 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80';

      return {
        id: item.id,
        title: item.title || 'Untitled',
        artist: item.artist_display || 'Unknown Artist',
        date: item.date_display || 'N/A',
        medium: item.medium_display || 'N/A',
        department: item.department_title || 'General Collection',
        imageUrl: imageUrl
      };
    });

    return artworks;
  } catch (error) {
    console.error('API Fetch Error:', error);
    return [];
  }
}