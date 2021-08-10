// Import Libs
import $ from "jquery";
import "normalize.css";
// Import Style File
import "./Sass/App.scss";

// Import Components
import Navbar from "./Components/Global/Navbar/Navbar";
import Macbook from "./Components/Local/Macbook/Macbook";
import Iphone from "./Components/Local/Iphone/Iphone";

function App() {
    const shop = [
        {
            id: 1,
            name: "Iphone 12 Pro Max 256GB",
            img: "https://alhootplus.com/wp-content/uploads/2021/03/iphone-12-pro-blue-hero.png",
        },
        {
            id: 2,
            name: "Macbook Pro 16 Inch Core I9 16GB Ram",
            img: "https://res-4.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1605180340/jwxpwv65px1a6i5kfewp.png",
        },
        {
            id: 3,
            name: "Iphone 12 Pro Max 256GB",
            img: "https://alhootplus.com/wp-content/uploads/2021/03/iphone-12-pro-blue-hero.png",
        },
        {
            id: 4,
            name: "Macbook Pro 16 Inch Core I9 16GB Ram",
            img: "https://res-4.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1605180340/jwxpwv65px1a6i5kfewp.png",
        },
        {
            id: 5,
            name: "Iphone 12 Pro Max 256GB",
            img: "https://alhootplus.com/wp-content/uploads/2021/03/iphone-12-pro-blue-hero.png",
        },
        {
            id: 6,
            name: "Macbook Pro 16 Inch Core I9 16GB Ram",
            img: "https://res-4.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1605180340/jwxpwv65px1a6i5kfewp.png",
        },
        {
            id: 7,
            name: "Iphone 12 Pro Max 256GB",
            img: "https://alhootplus.com/wp-content/uploads/2021/03/iphone-12-pro-blue-hero.png",
        },
        {
            id: 8,
            name: "Macbook Pro 16 Inch Core I9 16GB Ram",
            img: "https://res-4.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1605180340/jwxpwv65px1a6i5kfewp.png",
        },
    ];
    window.onload = function () {
        let appEl = $(".App");
        appEl.css("height", appEl.first().height());
    };

    return (
        <div className="App">
            <Navbar shop={shop} />
            <Macbook />
            <Iphone />
        </div>
    );
}

export default App;
