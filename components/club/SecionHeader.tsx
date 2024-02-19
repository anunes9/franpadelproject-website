export const SectionHeader = ({
  title,
  page,
}: {
  title: string
  page: string
}) => (
  <div className="flex flex-col w-full mb-12">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
      {title}
    </h1>

    <h2 className="text-xs text-projectGreen tracking-widest font-medium title-font mb-1">
      {page}
    </h2>
  </div>
)
