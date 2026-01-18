import './CartPage.css';

const ContactPage = () => {
    return (
        <div className="contact-container container">
            <h1 className="contact-title">Contacto y Showroom</h1>
            <div className="contact-grid">
                <div className="contact-info">
                    <div className="info-block">
                        <h3>Casa Taller</h3>
                        <p>Av. San Juan 2847</p>
                        <p>Barrio de San Cristóbal, CABA</p>
                        <p>Argentina</p>
                    </div>
                    <div className="info-block">
                        <h3>Horarios</h3>
                        <p>Lunes a Viernes: 10:00 - 19:00</p>
                        <p>Sábado: 10:00 - 14:00</p>
                    </div>
                    <div className="info-block">
                        <h3>Contacto Digital</h3>
                        <p>Email: info@hermanosjota.com.ar</p>
                        <p>WhatsApp: +54 11 4567-8900</p>
                        <p>Instagram: @hermanosjota_ba</p>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <h3>Envíanos un mensaje</h3>
                    <div className="form-group">
                        <label>Nombre Completo</label>
                        <input type="text" placeholder="Tu nombre completo" required />                   
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder='tucorreo@gmail.com' />
                    </div>
                    <div className="form-group">
                        <label>Mensaje</label>
                        <textarea rows="5" placeholder="¿En qué podemos ayudarte?"></textarea>
                    </div>
                    <button type="submit" className="btn-send">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;