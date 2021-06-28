import { useState, useEffect } from "react";

function About(props) {
    //create a state to hold about data
    const [about, setAbout] = useState(null);

    //create a function to make api call
    const getAboutData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "about");

        //turn response into javascript
        const data = await response.json();

        //set the about state to the data
        setAbout(data);
    };

    //make an initial call for the data inside useEffect, so it only happens one on component load
    useEffect(() => getAboutData());

    //define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>
                {about.name}
            </h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );
    //if data arrives return result of loaded, if not return an h1 that says loading
    return about ? loaded(): <h1>Loading...</h1>;
}
export default About;