export default function StatsCard({ title, value, icon: Icon, class_Color , timeClass }) {
    return (
        <section className="col-12 col-lg-2 d-flex flex-xl-row flex-lg-column justify-content-between align-items-center bg-white shadow-sm border p-3 rounded-4">
            <div>
                <p className="text-muted">{title}</p>
                <h2 className={timeClass}>{value}</h2>
            </div>
            <div className={`${class_Color} p-3 rounded-4`}>
                <Icon />
            </div>
        </section>
    );
}