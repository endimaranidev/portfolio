import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Entre em Contato</h1>
        </div>
        <div className="contact-section">
            <div className="contact-section__left">
                <h1>Contate-me</h1>
                <p>Estou em busca de oportunidades para mergulhar em novos desafios e projetos na área de desenvolvimento.</p>
                <div className="contact-section__left__details">
                    <div className="contact-section__left_details__content">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>endimarani.dev@gmail.com</p>
                    </div>
                    <div className="contact-section__left_details__content">
                        <FontAwesomeIcon icon={faLocationDot} /> <p>Aracaju/SE</p>
                    </div>
                </div>
            </div>

            <form className="contact-section__right">
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Insira seu nome' name='name'/>

                <label htmlFor="">E-mail</label>
                <input type="email" placeholder='Informe seu e-mail' name='email' />

                <label htmlFor="">Digite sua mensagem</label>
                <textarea name="message" rows={8} placeholder='Digite sua mensagem'></textarea>

                <button type='submit' className='contact-section__right__submit'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Contact