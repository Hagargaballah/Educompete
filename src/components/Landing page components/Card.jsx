export default function Card(props) {
    return (
        <section className="col-12 col-lg-3 mt-3 mt-lg-0 shadow-sm border p-4 rounded-4">
            <div
                className="d-flex justify-content-center align-items-center rounded"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: props.bgColor,
                    color : props.textColor ,
                }}
            >
                <i className={`fs-4 ${props.icon}`}></i>
            </div>
            <h5 className="fs-5 mt-4">{props.title}</h5>
            <p className="text-muted small mt-4">{props.sub_title}</p>
        </section>
    )
}