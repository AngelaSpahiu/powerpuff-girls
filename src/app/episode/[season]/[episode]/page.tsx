"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Episode } from "@/app/types";
import Loader from "@/app/components/Loader";
import { showDetailsUrl } from "@/app/constants";

export default function ShowDetailsPage() {
  const [episode, setEpisode] = useState<Episode | null>(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (!params.season || !params.episode) return;

    fetch(showDetailsUrl(params.season, params.episode))
      .then((response) => response.json())
      .then((data) => setEpisode(data))
      .catch(() => router.push("/"));
  }, [params.season, params.episode]);

  return (
    <div className="md:px-16 px-8 py-16 min-h-screen container">
      {!episode ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4">
            Episode {episode.number}: {episode.name}
          </h1>
          <p className="text-1xl">
            <strong>Season:</strong> {episode.season}
          </p>
          <div className="">
            {episode.image && (
              <img
                src={episode.image.medium}
                alt={episode.name}
                className="w-full mb-8 mt-6 object-cover max-w-40"
              />
            )}
            <div className="mb-8" />
            {!!episode.summary && (
              <p>
                <strong>Summary:</strong> {episode.summary}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}