/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/


const team = [
    {
        fullName: 'Wayne Barnett',
        workField: 'Founder & CEO',
        ProfilePicture: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        fullName: 'Angela Caroll',
        workField: 'Chief Editor',
        ProfilePicture: 'angela-caroll-chief-editor.jpg',
    },

    {
        fullName: 'Walter Gordon ',
        workField: 'Office Manager',
        ProfilePicture: 'walter-gordon-office-manager.jpg',
    },

    {
        fullName: 'Angela Lopez',
        workField: 'Social Media Manager',
        ProfilePicture: 'angela-lopez-social-media-manager.jpg',
    },

    {
        fullName: 'Scott Estrada',
        workField: 'Developer',
        ProfilePicture: 'scott-estrada-developer.jpg',
    },

    {
        fullName: 'Barbara Ramos',
        workField: 'Graphic Designer',
        ProfilePicture: 'barbara-ramos-graphic-designer.jpg',
    },
];

for (i =0; i < team.length; i++) {
    const teamMember = team[i];
    console.log(teamMember);
}

