export type ExerciseType = {
  id: string
  title: string
  description: string[]
  tags: string[]
  image: string
}

export const Exercises: ExerciseType[] = [
  {
    id: "1A",
    title: "Exercise 1 A",
    description: ["3 Backhand without glass", "Shot Direction", "Depth", "Speed 3"],
    tags: ["backhand", "mesocycle-1"],
    image: "/exercises/1A.svg",
  },
  {
    id: "1B",
    title: "Exercise 1 B",
    description: ["3 Forehand Without Glass", "Shot Direction", "Depth", "Speed 3"],
    tags: ["forehand", "mesocycle-1"],
    image: "/exercises/1B.svg",
  },
  {
    id: "2A",
    title: "Exercise 2 A",
    description: ["3 Backhand Without Glass (Live Ball)", "Quantity", "Direction Control", "Depth", "Intensity 2", "Lateral Movement"],
    tags: ["backhand", "live ball"],
    image: "/exercises/2A.svg",
  },
  {
    id: "2B",
    title: "Exercise 2 B",
    description: ["3 Forehand Without Glass (Live Ball)", "Quantity", "Direction Control", "Depth", "Intensity 2", "Lateral Movement"],
    tags: ["forehand", "live ball"],
    image: "/exercises/2B.svg",
  },
  {
    id: "3A",
    title: "Exercise 3 A",
    description: ["3 Backhand Without Glass (Live Ball)", "Volume", "Direction Control", "Depth", "Intensity 2", "Lateral Movement"],
    tags: ["backhand", "live ball"],
    image: "/exercises/3A.svg",
  },
  {
    id: "3B",
    title: "Exercise 3 B",
    description: ["3 Forehand Without Glass (Live Ball)", "Volume", "Direction Control", "Depth", "Intensity 2", "Lateral Movement"],
    tags: ["forehand", "live ball"],
    image: "/exercises/3B.svg",
  },
  {
    id: "4A",
    title: "Exercise 4 A",
    description: ["Backhand + Forehand (Live Ball)", "Direction (Parallel / Cross Court)", "Depth", "Impact Point", "Intensity 2 / 3", "Lateral + Backwards Movement"],
    tags: ["backhand", "forehand", "live ball"],
    image: "/exercises/4A.svg",
  },
  {
    id: "4B",
    title: "Exercise 4 B",
    description: ["Backhand + Forehand (Live Ball)", "Direction (Parallel / Cross Court)", "Depth", "Impact Point", "Intensity 2 / 3", "Lateral + Backwards Movement"],
    tags: ["backhand", "forehand", "live ball"],
    image: "/exercises/4B.svg",
  },
  {
    id: "10A",
    title: "Exercise 10 A",
    description: ["Some description of exercise"],
    tags: ["live ball"],
    image: "/exercises/10A.svg",
  },
  {
    id: "10B",
    title: "Exercise 10 B",
    description: ["Some description of exercise"],
    tags: ["live ball"],
    image: "/exercises/10B.svg",
  },
  {
    id: "10C",
    title: "Exercise 10 C",
    description: ["Some description of exercise"],
    tags: ["live ball"],
    image: "/exercises/10C.svg",
  },
  {
    id: "11",
    title: "Exercise 11",
    description: ["Some description of exercise"],
    tags: ["precision"],
    image: "/exercises/11.svg",
  },
  {
    id: "13A",
    title: "Exercise 13 A",
    description: ["Some description of exercise"],
    tags: ["backhand", "glass"],
    image: "/exercises/13A.svg",
  },
  {
    id: "13B",
    title: "Exercise 13 B",
    description: ["Some description of exercise"],
    tags: ["forehand", "glass"],
    image: "/exercises/13B.svg",
  },
  {
    id: "14A",
    title: "Exercise 14 A",
    description: ["Some description of exercise"],
    tags: ["backhand", "glass", "live ball"],
    image: "/exercises/14A.svg",
  },
  {
    id: "14B",
    title: "Exercise 14 B",
    description: ["Some description of exercise"],
    tags: ["forehand", "glass", "live ball"],
    image: "/exercises/14B.svg",
  },
]
