import React from "react";
import Link from "../../../node_modules/next/link";
import { Episode } from "../types";

interface EpisodeCardProps {
  episode: Episode;
  showImage: string;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, showImage }: EpisodeCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
      <img src={episode.image?.medium || showImage} alt={episode.name} className="w-full max-w-32 object-cover" />

      <div className="p-4 h-full">
          <div>
        <h2 className="text-xl font-semibold mb-2">{episode.name}</h2>
         <div className="text-sm text-gray-700 mb-4">
           <div className="flex">Season: <p>{episode.season}</p></div>
           <div className="flex">Episode: <p>{episode.number}</p></div> 
           {!!episode.summary && <div className="flex">Summary: <p>{episode.summary}</p></div>}
            </div>
        </div>
        <Link href={`/episode/${episode.season}/${episode.number}`} className="text-center bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
            View Details
        </Link>
      </div>
    </div>
  );
};

export default EpisodeCard;
