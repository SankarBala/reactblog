import React from 'react';
import WelcomeImg from './../../assets/images/welcome.jpg';
import FeatureImage from './../../assets/images/featureImage.jpg';

export default function Welcome() {
    return (
        <React.Fragment>
            <div className="container p-5">
                <div className="row">
                    <div className="col-12 col-md-3 py-5 px-4">
                        <br/>
                        <h1 className="py-3">Welcome to my world</h1>
                        <p>Proin eleifend lobortis purus, nec mollis risus
                            hendrerit vel. Aenean consequat aliquam sit amet alesa dui ferme ntumit amet. </p>
                        <br />
                        <br />
                        <p>Be the first to know.</p>
                    </div>
                    <div className="col-12 col-md-3 p-4">
                        <img className="" src={WelcomeImg} />
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <div className="py-4 px-3 bg-light d-flex">
                            <div className="mx-1"><img className="" width="100%" height="" src={FeatureImage} /></div>
                            <div className="mx-1"><img className="" width="100%" height="" src={FeatureImage} /></div>
                            <div className="mx-1"><img className="" width="100%" height="" src={FeatureImage} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
