import { MesocycleType } from "@/lib/mesocycles"
import { Text, Title } from "@/components/generic/Typography"

export const MesocycleDetails = ({
  mesocycle: { duration, concept, details },
}: {
  mesocycle: MesocycleType
}) => (
  <div className="mx-4">
    <Title heading="3" className="mt-8">
      Duration
    </Title>

    <Text className="pl-4">{duration}</Text>

    <Title heading="3" className="mt-6">
      Concept
    </Title>

    <Text className="pl-4">{concept}</Text>

    <Title heading="3" className="mt-6">
      Details
    </Title>

    <div className="pl-4">
      {details.map(({ title, details, inset }, i) => (
        <div key={i} className={inset ? "ml-4" : ""}>
          <Text className="mt-4 underline">{title}</Text>

          {details.map((d, i) => (
            <Text key={i} className="pl-4">{`- ${d}`}</Text>
          ))}
        </div>
      ))}
    </div>
  </div>
)
