import { createGlobalStyle} from "styled-components"
import moon from "../images/icon-moon.svg"
import sun from "../images/icon-sun.svg"
import moonMobile from "../images/bg-mobile-dark.jpg"
import sunMobile from "../images/bg-mobile-light.jpg"
import moonDesktop from "../images/bg-desktop-light.jpg"
import sunDesktop from "../images/bg-desktop-dark.jpg"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
    body {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
    }
    @media only screen and (max-width: 768px) {
    aside, main, section {
    min-width: 90%;
    color: red;
    }
}

.container-center {
    display: flex;
    flex-direction:column;
    align-items: center;
}
    .flex {
        display: flex;
    }
    .column {
        flex-direction: column:
    }
    .center-vertical {
        justify-content: center;
    }
    .center-horizontal {
        align-items: center;
    }
    .space-e {
        justify-content: space-evenly;
    }
    .space-a {
        justify-content: space-around
    }
    .space-b {
        justify-content: space-between;
    }
    .padding-40 {
        padding: 40%;
    }
    button {
        background-color: transparent;
        border: none;
        font-size: 16px;
        cursor: pointer;
    }
    header {
        min-height: 30%;
        padding-top: 3rem;
    }
    aside, main, section {
        position: relative;
        top: -7rem;
        width: 50vw;
        margin: 2rem 0rem 2rem 0rem;
        border-radius: 0.2rem;
    }
    section, main {
        margin: 0rem;   
    }
    .dark-theme {
        background-color: hsl(235, 21%, 11%);
        height: 100vh;
        color: hsl(234, 39%, 85%);

        header, main, section, aside {
            background-color: hsl(235, 24%, 19%);
            
        }
        .toggleBtn {
            background: url(${sun});
            background-repeat: no-repeat;
            height: 30px;
            width: 30px;
        }
        header {
            background: url(${moonMobile});
            background-repeat: no-repeat;
            background-size: 100%;  
        }
        button {
            color: hsl(234, 39%, 85%);
        }
        input {
            color: white;
        }
    }
    .light-theme {
        background-color: hsl(236, 33%, 92%);
        height: 100vh;
    }
    .light-theme { 
        header, main, section, aside {
            background-color: hsl(0, 0%, 98%);
        }
        .toggleBtn {
            background: url(${moon});
            background-repeat: no-repeat;
            height: 30px;
            width: 30px;
        }
        header {
            background: url(${sunMobile});
            background-repeat: no-repeat;
            background-size: 100%;
        }

    }
  `