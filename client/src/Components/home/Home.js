
import React, {useState} from 'react'; 
import './Home.css';



function HomePage(){
    const [text, setText] = useState(null);
   
    const clickHandler = (event) => {
        // When clicked, set text to value of input box
        event.preventDefault();
        // console.log("Clicked");
        let s = document.getElementById("search");
        let b = document.getElementById("search1");
        let c = document.getElementById("search2");
        let allText = "Book Name: " + s.value + ", " + " ISBN: " + b.value + ", " + " Author: " + c.value;

        setText(allText);
        // setText(b.value);
        // setText(c.value);
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
              <input className = 'textFiled' type="text" placeholder="Book Name" id="search"/>
              <input className = 'textFiled' type="text" placeholder="ISBN" id="search1"/>
              <input className = 'textFiled' type="text" placeholder="Author" id="search2"/>
              <button onClick = {clickHandler} className = 'searchButton'>Search</button>
            </form>   
            <br/>
            <div>
              {!text ? "No text defined..." : text}
            </div>
                
          
        </div>
    )
}

export default HomePage;
