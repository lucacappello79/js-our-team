let teamMembers = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO	",
      foto: "wayne-barnett-founder-ceo.jpg"
    },

    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "angela-caroll-chief-editor.jpg"
    },

    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "walter-gordon-office-manager.jpg"
    },

    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: "angela-lopez-social-media-manager.jpg"
    },

    {
      nome: "Scott Estrada",
      ruolo: "Developer",
      foto: "scott-estrada-developer.jpg"
    },

    {
      nome: "Barbara Ramos",
      ruolo: "Graphic Designer",
      foto: "barbara-ramos-graphic-designer.jpg"
    },

  ];

  for (let i = 0; i < teamMembers.length; i++) {

    console.log("Nome: " + teamMembers[i].nome);
    console.log("Ruolo: " + teamMembers[i].ruolo);
    console.log("Foto: " + teamMembers[i].foto);

  }

const UlNomiEl = document.getElementById("lista-nomi");

for (let i = 0; i < teamMembers.length; i++) {

  const memberName = teamMembers[i].nome;

  const liEl = document.createElement('li');

  liEl.textContent = memberName;

  UlNomiEl.append(liEl);

}


const UlRoleEl = document.getElementById("lista-ruoli");

for (let i = 0; i < teamMembers.length; i++) {

  const memberRole = teamMembers[i].ruolo;

  const liEl = document.createElement('li');

  liEl.textContent = memberRole;

  UlRoleEl.append(liEl);
}


const UlFotoEl = document.getElementById("lista-foto");

for (let i = 0; i < teamMembers.length; i++) {

  const memberFoto = teamMembers[i].foto;

  const liEl = document.createElement('li');

  liEl.textContent = memberFoto;

  UlFotoEl.append(liEl);
}
