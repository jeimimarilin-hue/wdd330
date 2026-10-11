const BASE_URL = 'https://api.artic.edu/api/v1/artworks';

export async function fetchArtworks(query = 'monet', limit = 12) {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${query}&limit=${limit}&fields=id,title,artist_display,date_display,medium_display,department_title,image_id&include=config`);
    if (!response.ok) throw new Error('Network response failed');
    
    const data = await response.json();
    const iiifBaseUrl = data.config?.iiif_url || 'https://www.artic.edu/iiif/2';

    const fallbackImages = [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1582561214197-cba6306fc475?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=600&q=80'
    ];

    const artworks = data.data.map((item, index) => {
      let imageUrl;
      if (item.image_id) {
        imageUrl = `${iiifBaseUrl}/${item.image_id}/full/843,/0/default.jpg`;
      } else {
        imageUrl = fallbackImages[index % fallbackImages.length];
      }

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
    return [
      {
        id: 1,
        title: "Starry Reflections",
        artist: "Vincent van Gogh",
        date: "1889",
        medium: "Oil on canvas",
        department: "Paintings",
        imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 2,
        title: "Water Lilies",
        artist: "Claude Monet",
        date: "1919",
        medium: "Oil on canvas",
        department: "Paintings",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80"
      }
    ];
  }
}