import React, { useEffect, useState } from "react";
import { episodeListUrl } from "../constants";
import { Episode } from "../types";
import EpisodeCard from "./EpisodeCard";
import Loader from "./Loader";

interface ShowDetailsProps {
  showImage: string;
}

const ShowDetails: React.FC<ShowDetailsProps> = ({
  showImage,
}: ShowDetailsProps) => {
  const [episodeList, setEpisodeList] = useState<Episode[] | null>(null);

  useEffect(() => {
    fetch(episodeListUrl)
      .then((response) => response.json())
      .then((data) => setEpisodeList(data));
  }, []);

  return (
    <div className="grid container mx-auto grid-cols-1 gap-8">
      <h2 className="text-2xl font-bold">Episodes</h2>
      {!episodeList ? (
        <Loader />
      ) : (
        episodeList.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            showImage={showImage}
          />
        ))
      )}
    </div>
  );
};



export default ShowDetails;
