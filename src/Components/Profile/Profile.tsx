import './Profile.css'
import resume from '../../assets/Currículo.pdf'
import profile_img from '../../assets/Foto.jpg'

const Profile = () => {
  return (
    <section className='about-me'>
        <img src={profile_img} alt="" />
        <h1> <span>Olá, sou Endí Marani</span>, seja bem vindo(a) ao meu portfólio!</h1>
        <p>Sou estudante de Análise e Desenvolvimento de Sistemas pela Universidade Tiradentes - UNIT/SE e técnico em Desenvolvimento de Sistemas pelo SENAC/RN com foco no desenvolvimento em tecnologias Front-End.</p>
        <a href={resume} download="Curriculo_Endi_Marani.pdf">Currículo</a>
    </section>
  )
}

export default Profile