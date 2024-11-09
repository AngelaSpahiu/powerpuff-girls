export interface Show {
  id: number;
  url: string;
  name: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  ended: string | null;
  rating: { average: number | null };
  network: { name: string | null };
  image: { medium: string; original: string };
  summary: string;
}

export interface Episode  {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
  _links: {
    self: {
      href: string;
    };
    show: {
      href: string;
      name: string;
    };
  };
};

