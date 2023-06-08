import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";



const RegisterForm = () => {
  // const nmbrAleatoire = (min, max) => {
  //   const unitArray = new Uint32Array(1);
  //   crypto.getRandomValues(unitArray);
  //   let randomNumber = unitArray[0];
  //   return randomNumber;
  // };
  // nmbrAleatoire();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPassword(nmbrAleatoire());

    const member = {
      name,
      email,
      password,
      password_confirmation,
    };

    console.log(member);

    Axios.post("http://127.0.0.1:8000/api/auth/register", member)
      .then((result) => {
        console.log("Membre inséré avec succès");
        navigate("/LoginForm");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="header-register">
        <div className="backdrop">
          

          <div className="container main-section">
            <h3>Formulaire d'enregistrement</h3>
            <div className="containForm">
              

              <form class="row g-3" onSubmit={handleSubmit}>
                <div class="col-md-6">
                  <label htmlFor="name" class="form-label">
                    Nom
                  </label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div class="col-md-6">
                  <label htmlFor="email" class="form-label">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    id="email"
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

                <div className="mt-3">
                  <label htmlFor="password" className="form-label">
                    Mot de passe confirmation
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password_confirmation"
                    value={password_confirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                  />
                </div>
                

                
                

                <div className="col-12">
                  <button class="btn btn-primary w-100">Enregistrer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
