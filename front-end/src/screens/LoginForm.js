import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import WelcomePage from "./WelcomePage";


// const ConnexionForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const member = {email, password}

//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     Axios.post("http://127.0.0.1:8000/api/auth/login", member).then(() => {
//       console.log("Requette reussie avec succès", member);
//       // Redirect to the WelcomePage
//       history.push("/welcomePage");
//     }).catch((err) => {
//       console.log(err.message);
//     });
//   };


const ConnexionForm = () => {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const member = {email, password}
    
    const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const member = { email, password };

    Axios.post("http://127.0.0.1:8000/api/auth/login", member)
      .then(() => {
        console.log("Requette réussie avec succès", member);
        // Redirect to the WelcomePage
        history.push("/welcomePage");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


























  return (
    <>
      <div className="header-connexion">
        <div className="backdrop">

          <div className="main-section">
            <h3>Veuillez vous connecter</h3>
            <div className="containForm">
              
              <form onSubmit={handleSubmit}>
                <div className="mt-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="password" className="form-label">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button class="btn btn-primary mt-3 w-100">Valider</button>
                
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnexionForm;
