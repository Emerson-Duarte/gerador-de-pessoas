import React from "react";
import "./App.css";
import Button from "./components/button/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      names: [
      "Emerson",
      "Willian",
      "Hanna",
      "David",
      "Camila",
      "Abner",
      "Daniel",
      "Diego",
      "Fernando",
      "Antonio",
      "Paola",
      "Livia"],
      surname: "",
      surnames: [
        "Farias",
        "Pereira",
        "Silva",
        "Pacheco",
        "Franco",
        "Banderas",
        "Lima",
        "Souza",
        "Nunes",
        "Skibinski",
        "Moraes",
        "Rites"
      ],
      age: "",
      ages: [
        "25 anos",
        "35 anos",
        "70 anos",
        "89 anos",
        "40 anos",
        "22 anos",
        "33 anos",
        "48 anos",
        "27 anos",
        "39 anos",
        "45 anos",
        "52 anos"
      ],
      profession: "",
      professions: [
        "Médico(a)",
        "Motorista",
        "Professor(a)",
        "Atendente",
        "Analista",
        "Vendedor(a)",
        "Empreendedor(a)",
        "Comerciante",
        "Enfermeiro(a)",
        "Bombeiro(a)",
        "Policial",
        "Veterinário(a)"
      ],
      joinValues: []
    };

    this.getRandomName = this.getRandomName.bind(this);
    this.getRandomSurname = this.getRandomSurname.bind(this);
    this.getRandomAge = this.getRandomAge.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.getRandomName(),
      surname: this.getRandomSurname(),
      profession: this.getRandomProfession(),
      age: this.getRandomAge()
    });
  }

  submit() {
    const object = this.state.joinValues;
    const randomName = this.getRandomName();
    const randomSurname = this.getRandomSurname();
    const randomProfession = this.getRandomProfession();
    const randomAge = this.getRandomAge();

    object.push({
      name: randomName,
      surname: randomSurname,
      profession: randomProfession,
      age: randomAge
    });

    this.setState({
      name: randomName,
      surname: randomSurname,
      profession: randomProfession,
      age: randomAge,
      joinValues: object
    });
  }

  getRandomName() {
    const name = this.state.names[
      Math.floor(Math.random() * this.state.names.length)
    ];
    return name;
  }

  getRandomSurname() {
    const surname = this.state.surnames[
      Math.floor(Math.random() * this.state.surnames.length)
    ];
    return surname;
  }

  getRandomProfession() {
    const profession = this.state.professions[
      Math.floor(Math.random() * this.state.professions.length)
    ];
    return profession;
  }

  getRandomAge() {
    const age = this.state.ages[
      Math.floor(Math.random() * this.state.ages.length)
    ];
    return age;
  }

  render() {
    const { name, surname, profession, age } = this.state;

    return (
      <div className="container">
        <div className="card">
          <h2>Gerador de Pessoas</h2>
          <div className="labels">
          <strong>Nome</strong>
          <input type="text" value={name} />
          </div>
          <div className="labels">
          <strong>Sobrenome</strong>
          <input type="text" value={surname} />
          </div>
          <div className="labels">
          <strong>Cargo</strong>
          <input type="text" value={profession} />
          </div>
          <div className="labels">
          <strong>Idade</strong>
          <input type="text" value={age} />
          </div>
          <Button onClick={this.submit}>GERAR</Button>
          <h3>Pessoas Geradas</h3>

          <div className="list-names">
            {this.state.joinValues.map((item) => (
              <p>{`${item.name} ${item.surname}, ${item.profession}, ${item.age} `}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
