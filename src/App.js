import { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import handphoneImage from "./images/home.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderAllOutlined } from "@material-ui/icons";
import "./App.css";

const styles = makeStyles((theme) => ({

}));
const themes = {
  light: {
    background: "#f0e6f7",
    color: "#330852",
    backgroundSize: "100%",
  },
  dark: {
    background: "#845EC2",
    color: "#F8F8FF",
    backgroundSize: "100%",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();

  const [valueTheme, setValueTheme] = useState(themes.light);
  const theme = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  return (
    <body>
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background, backgroundSize: "100%"  }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="FFF300" align ="center" direction ="left" scrollamount="10">  HALLO {valueInput.name} SELAMAT DATANG DI L&W ELECTRONIC, PUSAT STORE HP TERBESAR, DAN TERMURAH SEJAGAT RAYA </marquee>
      <button type="submit" style={{ float:"right", marginTop: "1%" }} class="searchButton">
      <FontAwesomeIcon icon={faSearch} />
     </button>
      <input className="search"
              onChange={(event) => handleIdPembelian(event, "name")}
              name="idPembelian"
              value={valueInput.name}
              style={{ color: "#6e0234", float: "right", width: "20%", marginTop: "1%"}}
              placeholder="Just For Fun, Masukkan nama anda"
            />
            <button
                className="button"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                  )
                }
              >
              <FontAwesomeIcon icon={faHome} />
              </button>
            
          <center>
          <div className="judul">
            <h3>L&W ELECTRONIC</h3>
            <div className="gambar">
              <center>
              <Link to="/home">
                <img src={handphoneImage} style={{ height: "500px"  }} />
              </Link>
              </center>
            </div>
          </div>
          </center>
          <marquee style={{ fontWeight: "bold" }} bgcolor="FFF300" align ="center" direction ="left" scrollamount="10"> Credits by Lina Aulia & Winda Naibaho </marquee>
          </div>
          <h3>
          </h3>
    </ThemeContext.Provider>
    </body>
  );
}
