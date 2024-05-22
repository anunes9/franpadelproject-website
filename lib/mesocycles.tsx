import { IconHexagonNumber1, IconHexagonNumber2 } from "@tabler/icons-react"
import { ReactNode } from "react"

export type MesocycleType = {
  id: string
  icon: ReactNode
  name: string
  title: string
  concept: string
  description: string
  duration: string
  filter: string
  level: string
  details: {
    title: string
    description?: string
    details: string[]
    section?: {
      title: string
      description?: string
      details: string[]
    }
  }[]
}

export const Mesocycles: MesocycleType[] = [
  {
    id: "1",
    icon: <IconHexagonNumber1 width={48} height={48} />,
    name: "Mesociclo 1",
    concept: "5-in-a-row Concept",
    title: "Master the 5-in-a-row Concept",
    description:
      "This course covers professional playing stances, essential preparatory movements, and effective mobility techniques. It includes drills for shot accuracy, stability management through the Traffic Light Concept, and advanced techniques for enhanced gameplay. Perfect for both beginners and experienced players aiming to refine their skills and elevate their game.",
    duration: "4 - 6 weeks",
    level: "Beginner",
    filter: "mesocycle-1",
    details: [
      {
        title: "Posture",
        description:
          "Learn various professional playing stances and the Arigato Concept for optimal body alignment.",
        details: [
          "Posture Bela, Paquito and Chingotto",
          "Arigato Concept and Scapular Waist",
          "Pros and cons of each style",
        ],
      },
      {
        title: "Preparation",
        description:
          "Master the preparing movements before executing a stroke.",
        details: [
          "Pivot or reaction step (shoulder rotation, waist and hip release)",
          "Adjustment steps",
          "Forehand and backhand shots",
          "Forehand and backhand volleys",
        ],
      },
      {
        title: "Mobility",
        description:
          "Unlock the ability to execute frontal, lateral, regressive, and diagonal movements effectively.",
        details: [
          "Types of movement (forward, lateral, backward and diagonal displacement)",
        ],
        section: {
          title: "Technical Corrections",
          description:
            "Improve shot accuracy with drills, understand stride dynamics, and optimize hand positioning.",
          details: [
            "Superman, spider, boxer postures",
            "Long stride vs. short stride",
            "Shoulder tilt",
            "Lateral distance from hand to center of body",
          ],
        },
      },
      {
        title: "Stability",
        description:
          "Apply the Traffic Light Concept to manage movement stability and control.",
        details: [
          "Traffic Light concept associated with the stop before the shot",
          "Green, Yellow and Red zones",
        ],
        section: {
          title: "Advanced Techniques",
          description:
            "Enhance your game with the Paparazzi Concept, proper body axis rotation, and explosive movements.",
          details: [
            "Paparazzi Concept",
            "Rotation on the body axis",
            "Electrical discharges",
          ],
        },
      },
      {
        title: "Execution",
        description:
          "Perfect your shot completion, understand anatomical rotation, and ensure proper racket positioning at impact.",
        details: [
          "Termination of technical gesture",
          "Anatomy of right and left side rotations",
          "Magnetism theory",
          "Racket position at the point of impact",
        ],
      },
    ],
  },
  {
    id: "2",
    icon: <IconHexagonNumber2 width={48} height={48} />,
    name: "Mesociclo 2",
    concept: "Transversal concepts in aerial and ground game",
    title: "Transversal concepts in aerial and ground game",
    description:
      "Dive deep into the transversal concepts essential for mastering both aerial and ground strokes in padel.",
    level: "Beginner",
    duration: "4 - 6 weeks",
    filter: "mesocycle-2",
    details: [
      {
        title: "Direction",
        description:
          "Master the art of controlling ball direction by perfecting your racquet face positioning, ensuring every shot lands precisely where you intend.",
        details: ["Adapt the face of racket when hitting the ball"],
      },
      {
        title: "Height",
        description:
          "Learn to adjust the height of your shots with finesse, utilizing the tip of your racket to achieve optimal trajectories and control over the ball.",
        details: ["Dictated by the tip of the racket"],
      },
      {
        title: "Depth",
        description:
          "Explore the nuanced range of finish in your strokes to define the depth of your shots.",
        details: ["Range of termination of the shot"],
      },
      {
        title: "Speed",
        description:
          "Dive into a categorization system ranging from 1 to 5 to effectively modulate shot speed, allowing you to adapt to different game situations.",
        details: ["Shot Speed 1 - 5"],
      },
      {
        title: "Acceleration",
        description:
          "Practice making your hand move over the ball quickly to get the most power and spin out of each swing.",
        details: ["Hand over ball concept"],
      },
      {
        title: "Force",
        description:
          "Learn how to use the amplitude of the stroke to make controlled yet forceful shots.",
        details: [
          "Formula: x + 1",
          "Concept of Control (distance from elbow to body)",
        ],
      },
    ],
  },
]
