import React from "react";

const Form = function (props) {
    const items = props[props.name].map((element, i) => {
        return (
            <div className="mx-3" key={i}>
                <label className="form-label text-start">
                    {element.name}
                    <input type={element.type} className="form-control px-5 mx-auto text-left" style={{textAlign:"left"}}/>
                </label>
            </div>
        );
    });

    return (
        <form className="container">
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
