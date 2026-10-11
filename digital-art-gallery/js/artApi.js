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
      title: "Water Lilies",
      artist: "Claude Monet",
      date: "1906",
      medium: "Oil on canvas",
      department: "Impressionism",
      imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 103,
      title: "The Scream",
      artist: "Edvard Munch",
      date: "1893",
      medium: "Oil, tempera and pastel",
      department: "Expressionism",
      imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 104,
      title: "The Great Wave",
      artist: "Katsushika Hokusai",
      date: "1831",
      medium: "Woodblock print",
      department: "Japanese Art",
      imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 105,
      title: "The Birth of Venus",
      artist: "Sandro Botticelli",
      date: "1485",
      medium: "Tempera on canvas",
      department: "Early Renaissance",
      imageUrl: "https://images.unsplash.com/photo-1582561234710-449e7943d674?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 106,
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      date: "1503",
      medium: "Oil on poplar panel",
      department: "High Renaissance",
      imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 107,
      title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      date: "1665",
      medium: "Oil on canvas",
      department: "Dutch Golden Age",
      imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 108,
      title: "The Night Watch",
      artist: "Rembrandt van Rijn",
      date: "1642",
      medium: "Oil on canvas",
      department: "Dutch Golden Age",
      imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 109,
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      date: "1931",
      medium: "Oil on canvas",
      department: "Surrealism",
      imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 110,
      title: "Wanderer above the Sea of Fog",
      artist: "Caspar David Friedrich",
      date: "1818",
      medium: "Oil on canvas",
      department: "Romanticism",
      imageUrl: "https://images.unsplash.com/photo-1579783901586-d88db75b4fe4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 111,
      title: "The Swing",
      artist: "Jean-Honoré Fragonard",
      date: "1767",
      medium: "Oil on canvas",
      department: "Rococo",
      imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 112,
      title: "American Gothic",
      artist: "Grant Wood",
      date: "1930",
      medium: "Oil on beaverboard",
      department: "Modern Art",
      imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80"
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