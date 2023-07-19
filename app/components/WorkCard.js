export default function WorkCard({ project }) {
  return (
    <div
      className=" bg-gray-100 text-left text-sm p-4 flex flex-col row-span-1 drop-shadow-xl"
      style={{ borderRadius: "3px" }}
    >
      <div className="text-pteal font-semibold mb-2">{project.name}</div>
      <div className="text-gray-700 mb-2">{project.desc}</div>
      {project.github_link ? (
        <div className="mb-2">
          <a
            className="text-sky-500 hover:text-sky-700 ease-in duration-200"
            href={project.github_link}
          >
            Github link
          </a>
        </div>
      ) : (
        <div className="mb-2 text-rose-500">Private project</div>
      )}
      <div className="flex flex-row flex-wrap mb-1 bottom-0">
        {project.tech.map((tech) => (
          <div
            key={tech}
            className="p-1 mr-2 mt-2 bg-blue-200 text-neutral-600 rounded-sm"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
