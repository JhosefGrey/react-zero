import React, { Component } from 'react'

class Formulario extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="form__item">
                        <label>Nombre completo</label>
                        <input type="text" />
                    </div>
                    <div className="form__item">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="form__item">
                        <label>Contraseña</label>
                        <input type="password" />
                    </div>
                    <div className="form__item">
                        <input type="submit" value="Enviar" className="button full"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Formulario;