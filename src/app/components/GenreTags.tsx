import React from "react";

interface GenreTagsProps {
  genres: string[];
}

const GenreTags: React.FC<GenreTagsProps> = ({ genres }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {genres.map((genre) => (
        <span key={genre} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
          {genre}
        </span>
      ))}
    </div>
  );
};

export default GenreTags;
