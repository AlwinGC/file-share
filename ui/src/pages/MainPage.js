import React, {useState} from "react";
import './MainPage.css';
import { Button } from "../components/Button";


function MainPage() {

    const [filesHeading, setFileHeading] = useState("FILES SHARED");

    return(
        <>
        <div className="main-container">
            <div className="main-options">
            <Button buttonStyle="btn--main-section" buttonSize="btn--main" >
                UPLOAD FILES
            </Button>
            <Button buttonStyle="btn--main-section" buttonSize="btn--main" onClick={ () => setFileHeading("FILES SHARED")}>
                FILES SHARED
            </Button>
            <Button buttonStyle="btn--main-section" buttonSize="btn--main" onClick={ () => setFileHeading("FILES RECIEVED")}>
                FILES RECIEVED
            </Button>
            </div>
            <div className="main-view">
                <h5 className="main-heading">{filesHeading}</h5>
            </div>
        </div>
        </>
    );
}

export default MainPage;