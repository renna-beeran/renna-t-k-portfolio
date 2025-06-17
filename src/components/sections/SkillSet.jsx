export const SkillSet = ({heading, skillList}) => {
    return (
      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-[var(--color-card)] border border-[var(--color-border)]">
        <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">{heading}</h3>
        <div className="flex flex-wrap gap-2">
          {skillList.map((tech, key) => (
            <span
              key={key}
              className="bg-[var(--color-muted)] text-[var(--color-accent)] py-1 px-3 rounded-full text-sm hover:bg-[var(--color-accent2)] hover:shadow-[0_2px_8px_rgba(114,56,61,0.2)] transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
}