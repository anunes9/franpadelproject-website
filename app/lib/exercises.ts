export type ExerciseType = {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
}

export const Exercises: ExerciseType[] = [
  {
    id: "1A",
    title: "Exercise 1 A",
    description: "Some description of exercise",
    tags: ["backhand", "mesocycle-1"],
    image: "/exercises/1A.svg",
  },
  {
    id: "1B",
    title: "Exercise 1 B",
    description: "Some description of exercise",
    tags: ["forehand", "mesocycle-1"],
    image: "/exercises/1B.svg",
  },
  {
    id: "2A",
    title: "Exercise 2 A",
    description: "Some description of exercise",
    tags: ["forehand", "live ball"],
    image: "/exercises/2A.svg",
  },
  {
    id: "2B",
    title: "Exercise 2 B",
    description: "Some description of exercise",
    tags: ["backhand", "live ball"],
    image: "/exercises/2B.svg",
  },
  {
    id: "10A",
    title: "Exercise 10 A",
    description: "Some description of exercise",
    tags: ["live ball"],
    image: "/exercises/10A.svg",
  },
  {
    id: "10B",
    title: "Exercise 10 B",
    description: "Some description of exercise",
    tags: ["live ball"],
    image: "/exercises/10B.svg",
  },
  {
    id: "10C",
    title: "Exercise 10 C",
    description: "Some description of exercise",
    tags: ["live ball"],
    image: "/exercises/10C.svg",
  },
  {
    id: "11",
    title: "Exercise 11",
    description: "Some description of exercise",
    tags: ["precision"],
    image: "/exercises/11.svg",
  },
  {
    id: "13A",
    title: "Exercise 13 A",
    description: "Some description of exercise",
    tags: ["backhand", "glass"],
    image: "/exercises/13A.svg",
  },
  {
    id: "13B",
    title: "Exercise 13 B",
    description: "Some description of exercise",
    tags: ["forehand", "glass"],
    image: "/exercises/13B.svg",
  },
  {
    id: "14A",
    title: "Exercise 14 A",
    description: "Some description of exercise",
    tags: ["backhand", "glass", "live ball"],
    image: "/exercises/14A.svg",
  },
  {
    id: "14B",
    title: "Exercise 14 B",
    description: "Some description of exercise",
    tags: ["forehand", "glass", "live ball"],
    image: "/exercises/14B.svg",
  },
]
