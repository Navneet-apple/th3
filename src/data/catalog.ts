export type Anime = {
  id: string;
  title: string;
  year: number;
  genres: string[];
  synopsis: string;
  status: string;
  episodes: number;
};

// Original placeholder data for the clean-room starter.
export const catalog: Anime[] = [
  {
    id: "skyline-echo",
    title: "Skyline Echo",
    year: 2025,
    genres: ["Adventure", "Fantasy"],
    synopsis: "A courier discovers that the city lights are carrying messages from a forgotten world.",
    status: "Complete",
    episodes: 12,
  },
  {
    id: "paper-moons",
    title: "Paper Moons",
    year: 2024,
    genres: ["Drama", "Slice of Life"],
    synopsis: "Two classmates start a late-night radio show and learn to listen to their own plans.",
    status: "Airing",
    episodes: 9,
  },
  {
    id: "orbit-cafe",
    title: "Orbit Café",
    year: 2023,
    genres: ["Comedy", "Sci-Fi"],
    synopsis: "A tiny café on a space station becomes a meeting place for travelers from distant worlds.",
    status: "Complete",
    episodes: 10,
  },
];

export const schedule = [
  { day: "Monday", title: "Paper Moons", episode: "Episode 10" },
  { day: "Wednesday", title: "Skyline Echo", episode: "Special" },
  { day: "Saturday", title: "Orbit Café", episode: "Episode 1" },
];
