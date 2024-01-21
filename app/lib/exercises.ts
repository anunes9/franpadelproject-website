export type ExerciseType = {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
}

export const Exercises: ExerciseType[] = [
  {
    id: "1a",
    title: "Exercise 1 A",
    description: "Some description of exercise",
    tags: ["backhand", "mesocycle-1"],
    image: "/static/exercises/1A.svg",
  },
  {
    id: "1b",
    title: "Exercise 1 B",
    description: "Some description of exercise",
    tags: ["forehand", "mesocycle-1"],
    image: "/static/exercises/1b.svg",
  },
  {
    id: "2a",
    title: "Exercise 2 A",
    description: "Some description of exercise",
    tags: ["forehand", "live ball"],
    image: "/static/exercises/2a.svg",
  },
  {
    id: "2b",
    title: "Exercise 2 B",
    description: "Some description of exercise",
    tags: ["backhand", "live ball"],
    image: "/static/exercises/2b.svg",
  },
  {
    id: "10a",
    title: "Exercise 10 A",
    description: "Some description of exercise",
    tags: ["live ball"],
    image: "/static/exercises/10a.svg",
  },
  {
    id: "10b",
    title: "Exercise 10 B",
    description: "Some description of exercise",
    tags: ["live ball"],
    image: "/static/exercises/10b.svg",
  },
  {
    id: "10c",
    title: "Exercise 10 C",
    description: "Some description of exercise",
    tags: ["live ball"],
    image: "/static/exercises/10c.svg",
  },
  {
    id: "11",
    title: "Exercise 11",
    description: "Some description of exercise",
    tags: ["precision"],
    image: "/static/exercises/11.svg",
  },
  {
    id: "13a",
    title: "Exercise 13 A",
    description: "Some description of exercise",
    tags: ["backhand", "glass"],
    image: "/static/exercises/13a.svg",
  },
  {
    id: "13b",
    title: "Exercise 13 B",
    description: "Some description of exercise",
    tags: ["forehand", "glass"],
    image: "/static/exercises/13b.svg",
  },
  {
    id: "14a",
    title: "Exercise 14 A",
    description: "Some description of exercise",
    tags: ["backhand", "glass", "live ball"],
    image: "/static/exercises/14a.svg",
  },
  {
    id: "14b",
    title: "Exercise 14 B",
    description: "Some description of exercise",
    tags: ["forehand", "glass", "live ball"],
    image: "/static/exercises/14b.svg",
  },
]
