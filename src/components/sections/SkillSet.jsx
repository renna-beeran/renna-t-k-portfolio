export const SkillSet = ({heading, skillList}) => {
    return (
      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">{heading}</h3>
        <div className="flex flex-wrap gap-2">
          {skillList.map((tech, key) => (
            <span
              key={key}
              className="bg-[#ac9c8d]/10 text-[#72383d] py-1 px-3 rounded-full text-sm 
             hover:bg-[#f1e1dd] hover:shadow-[0_2px_8px_rgba(114,56,61,0.2)] transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
}