export async function fetchArtworks(query = '', limit = 12) {
  const artworksCollection = [
    {
      id: 101,
      title: "The Starry Night",
      artist: "Vincent van Gogh",
      date: "1889",
      medium: "Oil on canvas",
      department: "Post-Impressionism",
      imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 102,
      title: "Color and Form Study",
      artist: "Wassily Kandinsky",
      date: "1923",
      medium: "Oil on canvas",
      department: "Modern Art",
      imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 103,
      title: "Classical Abstract Composition",
      artist: "International Gallery",
      date: "20th Century",
      medium: "Mixed media",
      department: "Contemporary Art",
      imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 104,
      title: "Renaissance Portrait",
      artist: "Renaissance Master",
      date: "1550",
      medium: "Oil on panel",
      department: "European Painting",
      imageUrl: "https://images.unsplash.com/photo-1582561234710-449e7943d674?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 105,
      title: "Impression of Light",
      artist: "Claude Monet Style",
      date: "1905",
      medium: "Oil on canvas",
      department: "Impressionism",
      imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 106,
      title: "Sculpture and Chiaroscuro",
      artist: "Classical Renaissance",
      date: "1600",
      medium: "Marble and Oil",
      department: "Fine Arts",
      imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 107,
      title: "Still Life with Flowers",
      artist: "Flemish School",
      date: "1650",
      medium: "Oil on canvas",
      department: "Golden Age",
      imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 108,
      title: "Harmony in Warm Tones",
      artist: "Artistic Avant-Garde",
      date: "1935",
      medium: "Oil on canvas",
      department: "Modern Art",
      imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 109,
      title: "Romantic Landscape",
      artist: "19th Century Master",
      date: "1840",
      medium: "Oil on canvas",
      department: "Romanticism",
      imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 110,
      title: "Chromatic Expression",
      artist: "Contemporary Artist",
      date: "1970",
      medium: "Acrylic on canvas",
      department: "Contemporary Art",
      imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 111,
      title: "Face and Shadow Study",
      artist: "Academy of Fine Arts",
      date: "1880",
      medium: "Charcoal and Oil",
      department: "Academic",
      imageUrl: "https://images.unsplash.com/photo-1579783901586-d88db75b4fe4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 112,
      title: "Geometry of Art",
      artist: "Modern Movement",
      date: "1950",
      medium: "Mixed media",
      department: "Abstract Art",
      imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
    }
  ];

  await new Promise(resolve => setTimeout(resolve, 50));

  if (!query || query.trim() === '') {
    return artworksCollection.slice(0, limit);
  }

  const searchTerm = query.toLowerCase();
  const filtered = artworksCollection.filter(art => 
    art.title.toLowerCase().includes(searchTerm) ||
    art.artist.toLowerCase().includes(searchTerm) ||
    art.department.toLowerCase().includes(searchTerm)
  );

  return filtered.length > 0 ? filtered : artworksCollection.slice(0, limit);
}