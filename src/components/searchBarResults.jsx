const SearchResults = ({ accessToken }) => {
  const [tracks, setTracks] = useState([]);

  const searchTracks = async (query) => {
    if (!accessToken) return;

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch tracks");
      }

      const data = await response.json();
      setTracks(data.tracks.items);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={searchTracks} />
      <div className="mt-4">
        {tracks.map((track) => (
          <div key={track.id} className="flex items-center gap-4 p-2 border-b">
            <img src={track.album.images[0]?.url} alt={track.name} className="w-16 h-16" />
            <div>
              <p className="font-bold">{track.name}</p>
              <p className="text-sm">{track.artists.map((a) => a.name).join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;