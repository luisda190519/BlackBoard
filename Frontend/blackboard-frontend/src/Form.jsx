import React from "react";

const Form = function (props) {
    console.log(props);
    const items = props[props.name].map((element, i) => {
        return (
            <div className="mx-3" key={i}>
                <label className="form-label text-start">
                    {element.label}
                    <input
                        type={element.type}
                        className="form-control px-5 mx-auto text-left"
                        style={{ textAlign: "left" }}
                    />
                </label>
            </div>
        );
    });

    const handleSubmit = async function (e, action) {
        e.preventDefault()
        try {
            let res = await fetch("http://localhost:3000/" + action + "/" + props.role, {
                method: "POST",
                body: JSON.stringify(),
            });

            let resJson = await res.json();
            console.log(resJson);
        } catch (error) {}
    };

    return (
        <form className="container" onSubmit={e => { handleSubmit(e, props.name)}}>
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className="row w-50">
                    <div className="col px-5 py-5 ">
                        <div className="card shadow">
                            <div className="card-body mb-3">
                                <div className="text-center">{items}</div>
                            </div>
                            <div className="row justify-content-center">
                                <button className="btn btn-success w-50 mb-3">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
