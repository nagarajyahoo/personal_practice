import React from 'react';

export const contactUs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg">
                    <h3>Get In Touch</h3>
                    <p className="text-muted">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                        rerum, laborum ab eos id optio!
                    </p>
                    <form>
                        <div className="input-group input-group-lg mb-3">
                            <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="input-group input-group-lg mb-3">
                            <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                            </div>
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="input-group input-group-lg mb-3">
                            <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                            </div>
                            <textarea
                                className="form-control"
                                placeholder="Message"
                                rows="4"
                            ></textarea>
                        </div>
                        <input
                            type="Submit"
                            value="Submit"
                            className="btn btn-primary btn-lg btn-block"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};