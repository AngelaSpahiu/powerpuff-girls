"use client";

import React, { useEffect, useState } from "react";
import { Show } from "../types";
import EpisodeList from "./EpisodeList";
import GenreTags from "./GenreTags";
import DOMPurify from "dompurify";
import { powerPuffsShowUrl } from "../constants";

const TvEpisode: React.FC = () => {
  const [showDetails, setShowDetails] = useState<Show | null>(null);

  useEffect(() => {
    fetch(powerPuffsShowUrl)
      .then((response) => response.json())
      .then((data) => setShowDetails(data));
  }, []);

  if(!showDetails) return null
  const sanitizedSummary = showDetails.summary ? DOMPurify.sanitize(showDetails.summary) : "";

  return (
    
    <div className="md:px-16 px-8 py-16 min-h-screen container">
      <h1 className="text-3xl font-bold text-left mb-8 text-left">{showDetails.name}</h1>
      <div className="flex  gap-4 mb-11 md:flex-row flex-col">
        <img className="max-h-72 mr-auto object-contain" src={showDetails.image.medium} alt={showDetails.name}></img>
        <div className="mt-5">
        <GenreTags genres={showDetails.genres}/>
        <p dangerouslySetInnerHTML={{ __html: sanitizedSummary }}></p>
        </div>
      </div>
      <EpisodeList showImage={showDetails.image.medium} />
    </div>
  );
};

export default TvEpisode;
