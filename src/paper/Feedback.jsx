import React, { useState } from 'react';

import Popup from 'reactjs-popup';
// import classNames from 'classnames';


const FeedBack = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => {
        setOpen(false);
    }

    const [name, setname] = useState({
        fname: "",
        lname: "",
        Eid: "",
        msg: ""
    });
    const onSubmits = (event) => {
        if (name.fname && name.lname && name.msg && name.Eid) {
            alert(`hi ${name.fname} ${name.lname} your message has been delivered`);
            event.preventDefault();
            setname({
                fname: "",
                lname: "",
                Eid: "",
                msg: ""
            });
            setOpen(false);
        }
        else {
            alert("please fill all the form");
        }
    };
    const changing = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setname((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });

    };



    return (
        <div>
            <div className="toggles">
                <h5> Have a Feedback?</h5>
                <div className="buttons" >
                    <button style={{ background: "#8abe39" }} onClick={() => setOpen(o => !o)}><h7> We are Listening</h7></button>
                </div>
            </div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal} className="popup" >

                <div className="contact container" >
                    <div className="items">
                        <h5 className="mb-1" style={{fontWeight:"600" }}>Thank you so much for taking the time</h5>
                        <p className="mb-3" style={{fontWeight:"600" }}>Please provide the details below</p>

                        <div className="mb-3">
                            <label  id="formGroupExampleInput" className="form-label">First Name</label>
                            <input type="text" className="form-control"  placeholder="First name" aria-label="First name" onChange={changing}
                                name="fname"
                                value={name.fname} required />
                        </div>
                        <div className="mb-3">
                        <label  id="formGroupExampleInput" className="form-label">Last Name</label>
                            <input type="text" className="form-control"  placeholder="Last name" aria-label="Last name" onChange={changing}
                                name="lname"
                                value={name.lname} required />
                        </div>

                        <div className="mb-3">
                            <label id="formGroupExampleInput" className="form-label">E-mail ID</label>
                            <input type="email" className="form-control"  placeholder="E-Mail ID" onChange={changing}
                                name="Eid"
                                value={name.Eid} required />
                        </div>
                        <div className="mb-4">
                            <label id="formGroupExampleInput" className="form-label">Your Message</label>
                            <textarea className="form-control" id="formGroupExampleInput3" placeholder="Your Feedback" onChange={changing}
                                name="msg"
                                value={name.msg}
                                // style={{ height: "auto" }}
                            />
                        </div>
                        <div className="mb-3" style={{ width: "100px", margin: "auto" }}>
                            {/* <label for="formGroupExampleInput" className="form-label">E-mail ID</label> */}
                            <input type="submit" className="form-control" id="formGroupExampleInput" onClick={onSubmits} style={{background:"tomato",fontWeight:"600",width:"120px"}}/>
                        </div>
                    </div>
                </div>
                <button className="close popclose" onClick={closeModal}><i className="fal fa-times fa-lg" style={{ color: "tomato" }}></i></button>
            </Popup>
        </div>
    );
};
export default FeedBack;


