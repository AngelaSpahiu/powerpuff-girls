const powerPuffsShowId = 26437
export const powerPuffsShowUrl = `https://api.tvmaze.com/shows/${powerPuffsShowId}`;
export const episodeListUrl = `https://api.tvmaze.com/shows/${powerPuffsShowId}/episodes`;

export const showDetailsUrl = (season:string, episode:string)=>{
    return `https://api.tvmaze.com/shows/${powerPuffsShowId}/episodebynumber?season=${season}&number=${episode}`
}
