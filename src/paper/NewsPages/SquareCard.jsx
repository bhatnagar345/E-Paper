import React, { useState } from 'react';

import Popup from 'reactjs-popup';
import classNames from 'classnames';


const ControlledPopup = (props) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => {


        setOpen(false);
    }

    var str = "";
    if (props.content != null && !props.id) {
        str = props.content.slice(0, 50);
    }
    else if (props.content != null && props.id) {
        str = props.content.slice(0, 90);
    }
    var tit = "";
    if (props.title != null && !props.id) {
        tit = props.title.slice(0, 40);
    }
    else if (props.title != null && props.id) {
        tit = props.title.slice(0, 75);
    }



    return (
        <div>


            <div className={classNames({ 'cardi': !props.id }, { 'cards': props.id })}>
                <img src={props.image} className={classNames("card_imgs", { 'imgs': props.id })} alt="" onClick={() => setOpen(o => !o)} style={{cursor:"pointer"}}/>
                <div className={classNames({ 'bodyy': !props.id }, { 'bodys': props.id })} onClick={() => setOpen(o => !o)} style={{cursor:"pointer"}}>
                    <h5 className="card_titlee">{tit}...</h5>
                    <p className={classNames({ "card-texts": !props.id }, { "card-texts": props.id })}>{str}...</p>
                    <p className="card-dates"> {props.publishedAt}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                <button className={classNames("btn-closed", { "btn-closes": props.id })} onClick={() => { props.delCard(props.indu) }}><i className="fal fa-times fa-lg" style={{ color: "tomato" }}></i></button>
            </div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}  className="popup">

                <div className="popup">
                    <h3>{props.title}</h3>
                    <p className="card-dates"> {props.publishedAt}</p>
                    <a href={props.url}  >{props.url}</a>
                    <div className="imge">
                    <div style={{width:"80%",height:"100%"}}>
                    <img src={props.image} alt="util" />
                    </div>
                    </div>
                    <p>{props.content}</p>
                    <button className="close" onClick={closeModal}><i className="fal fa-times fa-2x" style={{ color: "tomato" }}></i></button>
                </div>

            </Popup>
        </div>
    );
};
export default ControlledPopup;


