const BASE_URL = 'https://api.artic.edu/api/v1/artworks';

export async function fetchArtworks(query = 'monet', limit = 12) {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${query}&limit=${limit}&fields=id,title,artist_display,date_display,medium_display,department_title,image_id`);
    if (!response.ok) throw new Error('Network response failed');
    const data = await response.json();
    const config = data.config;
    
    // Construct full image URLs
    const artworks = data.data.map(item => ({
      id: item.id,
      title: item.title || 'Untitled',
      artist: item.artist_display || 'Unknown Artist',
      date: item.date_display || 'N/A',
      medium: item.medium_display || 'N/A',
      department: item.department_title || 'General Collection',
      imageUrl: item.image_id 
        ? `${config.iiif_url}/${item.image_id}/full/843,/0/default.jpg` 
        : 'https://via.placeholder.com/400x300?text=No+Image+Available'
    }));

    return artworks;
  } catch (error) {
    console.error('API Fetch Error:', error);
    return [];
  }
}