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

  /*for (let i = 0; i < teamMembers.length; i++) {

    console.log("Nome: " + teamMembers[i].nome);
    console.log("Ruolo: " + teamMembers[i].ruolo);
    console.log("Foto: " + teamMembers[i].foto);

  }
  */

  for (let i = 0; i < teamMembers.length; i++) {

    let singleMember = teamMembers[i];

    for (let chiaveMembro in singleMember) {

      console.log(chiaveMembro);
      console.log(singleMember[chiaveMembro]);
    }


  }


const UlNomiEl = document.getElementById("lista-nomi");
const UlRoleEl = document.getElementById("lista-ruoli");
const UlFotoEl = document.getElementById("lista-foto");



/* ------------2ND VERSION WITH PICTURES AND UL

for (let i = 0; i < teamMembers.length; i++) {

  const memberName = teamMembers[i].nome;
  const memberRole = teamMembers[i].ruolo;
  const memberFoto = teamMembers[i].foto;


  const nameLiEl = document.createElement('li');

  nameLiEl.textContent = memberName;

  UlNomiEl.append(nameLiEl);


  const roleLiEl = document.createElement('li');

  roleLiEl.textContent = memberRole;

  UlRoleEl.append(roleLiEl);


  const picLiEl = document.createElement('li');
  const picImgEl = document.createElement('img');

  picImgEl.src = "img/" + memberFoto;
  picLiEl.append(picImgEl);

  UlFotoEl.append(picLiEl);
}
END OF 2ND VERSION ---- */



/* 1ST VERSION WITH LIST ONLY

const UlNomiEl = document.getElementById("lista-nomi");
const UlRoleEl = document.getElementById("lista-ruoli");
const UlFotoEl = document.getElementById("lista-foto");



for (let i = 0; i < teamMembers.length; i++) {

  const memberName = teamMembers[i].nome;

  const liEl = document.createElement('li');

  liEl.textContent = memberName;

  UlNomiEl.append(liEl);

}



for (let i = 0; i < teamMembers.length; i++) {

  const memberRole = teamMembers[i].ruolo;

  const liEl = document.createElement('li');

  liEl.textContent = memberRole;

  UlRoleEl.append(liEl);
}



for (let i = 0; i < teamMembers.length; i++) {

  const memberFoto = teamMembers[i].foto;

  const liEl = document.createElement('li');

  liEl.textContent = memberFoto;

  UlFotoEl.append(liEl);
}
----------------END OF 1ST VERSION */


// BETA VERSION! TEST TEST TEST

const cardContainerEl = document.getElementById("card-container");

for (let i = 0; i < teamMembers.length; i++) {


  const memberName = teamMembers[i].nome;
  const memberRole = teamMembers[i].ruolo;
  const memberFoto = teamMembers[i].foto;

  // card 
  const cardEl = document.createElement("div");
  cardEl.classList.add("card", "col");
  //cardEl.style.width = "18rem";

  // image
  const imgEl = document.createElement("img");
  imgEl.src = "img/" + memberFoto;
  imgEl.classList.add("card-img-top");

  // body
  const cardBodyEl = document.createElement("div");
  cardBodyEl.classList.add("card-body");

  // title
  const cardTitleEl = document.createElement("h5");
  cardTitleEl.classList.add("card-title", "text-center");
  cardTitleEl.textContent = memberName;

  // text
  const cardTextEl = document.createElement("p");
  cardTextEl.classList.add("card-text", "text-center");
  cardTextEl.textContent = memberRole;

  // append
  cardBodyEl.append(cardTitleEl, cardTextEl);
  cardEl.append(imgEl, cardBodyEl);
  cardContainerEl.append(cardEl);
}