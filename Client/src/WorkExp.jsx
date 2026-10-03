import style from "./WorkExp.module.css";

export default function WorkExp() {
  return (
    <section className={style.workExp}>
      <ul className={style.timeline}>
        <li className={style.item}>
          <div className={style.header}>
            <b className={style.role}>Trainee Test Engineer</b>
            <span className={style.type}>Full-time · Onsite</span>
          </div>

          <div className={style.meta}>
            Side.inc (PTW) · Bengaluru, India · Jul 2026 – Sep 2026
          </div>

          <ul className={style.details}>
            <li>
              Performed functional, regression, smoke, and exploratory testing
              across multi-platform game builds.
            </li>
            <li>
              Reproduced, documented, and verified defects with clear steps,
              severity, and priority.
            </li>
            <li>
              Collaborated with QA leads and developers in an Agile environment
              to validate fixes and support releases.
            </li>
          </ul>
        </li>

        <li className={style.item}>
          <div className={style.header}>
            <b className={style.role}>Full Stack Developer Intern</b>
            <span className={style.type}>Remote</span>
          </div>

          <div className={style.meta}>
            SuperMentr · Bengaluru, India · Feb 2026 – May 2026
          </div>

          <ul className={style.details}>
            <li>
              Built a Socket.IO real-time messaging system, reducing message
              latency by approximately 40% over polling.
            </li>
            <li>
              Implemented MongoDB timestamp indexing for reliable message
              ordering across 4+ concurrent sessions.
            </li>
            <li>
              Integrated backend APIs with React while collaborating with a
              cross-functional team of 4.
            </li>
          </ul>
        </li>

        <li className={style.item}>
          <div className={style.header}>
            <b className={style.role}>R&D Software Intern</b>
            <span className={style.type}>Hybrid</span>
          </div>

          <div className={style.meta}>
            YMCT · Bengaluru, India · Dec 2024 – Jun 2025
          </div>

          <ul className={style.details}>
            <li>
              Designed and benchmarked 5+ signal-processing algorithms using
              Python, NumPy, and SciPy.
            </li>
            <li>
              Optimized algorithm parameters across 20+ evaluation cycles,
              improving accuracy and performance by 10%.
            </li>
            <li>
              Documented experiments and benchmark results for reproducibility
              under an NDA-protected research pipeline.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}