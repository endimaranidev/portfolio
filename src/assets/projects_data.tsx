type Project = {
    proj_no: number;
    proj_name: string;
    proj_img: string;
    alt: string;
    info: string;
    link_repo: string;
    link_demo: string;
};

import cadastro_usuario from '../assets/images/cadastro-usuarios.png';
import amigo_secreto from '../assets/images/challengeAlura-amigosecreto.png';
import decodificador from '../assets/images/challengeAlura-decodificador.png';
import spotify_alura from '../assets/images/spotify-alura.png';

const projects: Project[] = [
    {
        proj_no: 1,
        proj_name: "Projeto",
        proj_img: cadastro_usuario,
        alt: "imagem de um sistema de cadastro de usuário",
        info: "Projeto realizado através de um curso de fullstack promovido pelo DevClub",
        link_repo:"https://github.com/endimaranidev/cadastro-usuarios",
        link_demo: "Indisponível"
    },
    {
        proj_no: 2,
        proj_name: "Projeto",
        proj_img: amigo_secreto,
        alt: "imagem de um sistema de sorteio de nomes para um amigo secreto",
        info: "Projeto desenvolvido através de um desafio proposto pela Oracle e Alura através do programa ONE - Oracle Next Education",
        link_repo:"https://github.com/endimaranidev/challenge-amigo-secreto",
        link_demo: "https://challenge-amigo-secreto-psi.vercel.app/"
    },
    {
        proj_no: 3,
        proj_name: "Projeto",
        proj_img: decodificador,
        alt: "imagem de um sistema de criptografia",
        info: "Projeto desenvolvido através de um desafio ofertado pela Oracle e Alura através do programa ONE - Oracle Next Education",
        link_repo:"https://github.com/endimaranidev/alura-challenge",
        link_demo: "https://challenge-decodificador-alura.vercel.app/"
    },
    {
        proj_no: 4,
        proj_name: "Projeto",
        proj_img: spotify_alura,
        alt: "imagem de uma réplica da página inicial do spotify",
        info: "Projeto realizado através da Imersão Front-End promovida de forma gratuita pela Alura",
        link_repo:"https://github.com/endimaranidev/spotify-react",
        link_demo: "https://spotify-react-alura.vercel.app/"
    }
];

export default projects;
