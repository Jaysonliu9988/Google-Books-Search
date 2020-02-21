import React from "react";
import "./style.css";

const Form = props => {
    return (
        <form>
            <div class="row position">
                <div class="col-8">
                    <div className="form-group">
                        <input className="form-control"
                            value={props.search}
                            type="text"
                            name="searchBook"
                            placeholder="Enter Book's Name"
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>

                <div class="col-2">
                    <button type="submit" className="submitBtn btn btn-info " onClick={props.handleFormSubmit}>
                        Search
                    </button>
                </div>

            </div>
        </form>
    )
}



export default Form