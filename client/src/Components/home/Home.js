import React, {useState} from 'react'; 
// import './Home.css';



function HomePage(){
    const [text, setText] = useState(null);

    
    const clickHandler = (event) => {
        // When clicked, set text to value of input box
        event.preventDefault();
        // console.log("Clicked");
        let s = document.getElementById("search");
        setText(s.value);
    };

    React.useEffect(() => {
        fetch('/api')
            .then((res) => res.json())
            .then((text) => setText(text.message));
    }, [text]);

    // This as an attribute on the <input> changes text as typing occurs
    // onChange={event => setText(event.target.value)} 
    return (
        <div>
            <form>
              <input className = 'textFiled' type="text" placeholder="Name or ISBN" id="search"/>
              <button onClick = {clickHandler} className = 'searchButton'>Search</button>
            </form>   
            <p>
                {!text ? "No text defined..." : text}
            </p> 
        </div>
    )
}

export default HomePage;
