import Exercise1A from "../assets/exercises/1A.svg"
import Exercise1b from "../assets/exercises/1b.svg"
import Exercise2a from "../assets/exercises/2a.svg"
import Exercise2b from "../assets/exercises/2b.svg"
import Exercise10a from "../assets/exercises/10a.svg"
import Exercise10b from "../assets/exercises/10b.svg"
import Exercise10c from "../assets/exercises/10c.svg"
import Exercise11 from "../assets/exercises/11.svg"
import Exercise13a from "../assets/exercises/13a.svg"
import Exercise13b from "../assets/exercises/13b.svg"
import Exercise14a from "../assets/exercises/14a.svg"
import Exercise14b from "../assets/exercises/14b.svg"

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
    image: Exercise1A,
  },
  {
    id: "1b",
    title: "Exercise 1 B",
    description: "Some description of exercise",
    tags: ["forehand", "mesocycle-1"],
    image: Exercise1b,
  },
  {
    id: "2a",
    title: "Exercise 2 A",
    description: "Some description of exercise",
    tags: ["forehand", "live ball"],
    image: Exercise2a,
  },
  {
    id: "2b",
    title: "Exercise 2 B",
    description: "Some description of exercise",
    tags: ["backhand", "live ball"],
    image: Exercise2b,
  },
  {
    id: "10a",
    title: "Exercise 10 A",
    description: "Some description of exercise",
    tags: ["live ball"],
    image: Exercise10a,
  },
  {
    id: "10b",
    title: "Exercise 10 B",
    description: "Some description of exercise",
    tags: ["live ball"],
    image: Exercise10b,
  },
  {
    id: "10c",
    title: "Exercise 10 C",
    description: "Some description of exercise",
    tags: ["live ball"],
    image: Exercise10c,
  },
  {
    id: "11",
    title: "Exercise 11",
    description: "Some description of exercise",
    tags: ["precision"],
    image: Exercise11,
  },
  {
    id: "13a",
    title: "Exercise 13 A",
    description: "Some description of exercise",
    tags: ["backhand", "glass"],
    image: Exercise13a,
  },
  {
    id: "13b",
    title: "Exercise 13 B",
    description: "Some description of exercise",
    tags: ["forehand", "glass"],
    image: Exercise13b,
  },
  {
    id: "14a",
    title: "Exercise 14 A",
    description: "Some description of exercise",
    tags: ["backhand", "glass", "live ball"],
    image: Exercise14a,
  },
  {
    id: "14b",
    title: "Exercise 14 B",
    description: "Some description of exercise",
    tags: ["forehand", "glass", "live ball"],
    image: Exercise14b,
  },
]
