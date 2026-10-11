export async function fetchArtworks() {
    try {
        // Sample data simulating an external API response
        return [
            {
                id: "1",
                title: "Starry Reflections",
                artist: "Vincent van Gogh",
                category: "Paintings",
                image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600",
                description: "A stunning exploration of color and nighttime rhythm."
            },
            {
                id: "2",
                title: "Neon Cyberpunk City",
                artist: "Elena Rostova",
                category: "Digital",
                image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",
                description: "Futuristic metropolitan landscape render."
            },
            {
                id: "3",
                title: "Serene Nature",
                artist: "Marcus Vance",
                category: "Photography",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600",
                description: "Capturing tranquil moments in natural surroundings."
            },
            {
                id: "4",
                title: "Abstract Symphony",
                artist: "Clara Smith",
                category: "Digital",
                image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600",
                description: "Fluid motion created digitally using modern design suites."
            }
        ];
    } catch (error) {
        console.error("Error fetching art data:", error);
        return [];
    }
}