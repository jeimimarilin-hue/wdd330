export async function fetchArtworks(query = '', limit = 12) {
  const sampleArtworks = [
    {
      id: 1,
      title: "The Starry Night",
      artist: "Vincent van Gogh",
      date: "1889",
      medium: "Oil on canvas",
      department: "Post-Impressionism",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    },
    {
      id: 2,
      title: "Water Lilies",
      artist: "Claude Monet",
      date: "1906",
      medium: "Oil on canvas",
      department: "Impressionism",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson_and_Burnham_Libraries.jpg/800px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson_and_Burnham_Libraries.jpg"
    },
    {
      id: 3,
      title: "The Scream",
      artist: "Edvard Munch",
      date: "1893",
      medium: "Oil, tempera and pastel on cardboard",
      department: "Expressionism",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_Nasjonalmuseet.jpg/640px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_Nasjonalmuseet.jpg"
    },
    {
      id: 4,
      title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      date: "1831",
      medium: "Woodblock print",
      department: "Japanese Art",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Great_Wave_off_Kanagawa.jpg/800px-The_Great_Wave_off_Kanagawa.jpg"
    },
    {
      id: 5,
      title: "The Birth of Venus",
      artist: "Sandro Botticelli",
      date: "1485",
      medium: "Tempera on canvas",
      department: "Early Renaissance",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_de_Venere_-_Google_Art_Project_-2.jpg/800px-Sandro_Botticelli_-_La_nascita_de_Venere_-_Google_Art_Project_-2.jpg"
    },
    {
      id: 6,
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      date: "1503",
      medium: "Oil on poplar panel",
      department: "High Renaissance",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/640px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg"
    },
    {
      id: 7,
      title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      date: "1665",
      medium: "Oil on canvas",
      department: "Dutch Golden Age",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Johannes_Vermeer_-_De_meisje_met_de_parel.jpg/800px-Johannes_Vermeer_-_De_meisje_met_de_parel.jpg"
    },
    {
      id: 8,
      title: "The Night Watch",
      artist: "Rembrandt van Rijn",
      date: "1642",
      medium: "Oil on canvas",
      department: "Dutch Golden Age",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/The_Night_Watch_-_Bicker.jpg/800px-The_Night_Watch_-_Bicker.jpg"
    },
    {
      id: 9,
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      date: "1931",
      medium: "Oil on canvas",
      department: "Surrealism",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Persistence_of_Memory_%281931%29.jpg/800px-The_Persistence_of_Memory_%281931%29.jpg"
    },
    {
      id: 10,
      title: "Wanderer above the Sea of Fog",
      artist: "Caspar David Friedrich",
      date: "1818",
      medium: "Oil on canvas",
      department: "Romanticism",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg"
    },
    {
      id: 11,
      title: "The Swing",
      artist: "Jean-Honoré Fragonard",
      date: "1767",
      medium: "Oil on canvas",
      department: "Rococo",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jean-Honor%C3%A9_Fragonard_-_The_Swing_%28WGA08159%29.jpg/800px-Jean-Honor%C3%A9_Fragonard_-_The_Swing_%28WGA08159%29.jpg"
    },
    {
      id: 12,
      title: "American Gothic",
      artist: "Grant Wood",
      date: "1930",
      medium: "Oil on beaverboard",
      department: "Modern Art",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"
    }
  ];

  if (!query) {
    return sampleArtworks.slice(0, limit);
  }

  const filtered = sampleArtworks.filter(art => 
    art.title.toLowerCase().includes(query.toLowerCase()) ||
    art.artist.toLowerCase().includes(query.toLowerCase()) ||
    art.department.toLowerCase().includes(query.toLowerCase())
  );

  return filtered.length > 0 ? filtered : sampleArtworks.slice(0, limit);
}