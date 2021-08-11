import React from 'react';
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import './FormSendTweet.scss';
import { useState } from 'react';

export const FormSendTweet = ({ sendTweet }) => {


    const [formValue, setFormValue] = useState({
        name: "",
        tweet: ""
    });


    const sendForm = e => {
        setFormValue({
            ...formValue, [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="form-send-tweet">

            <h2 className="form-send-tweet__title">Enviar Tweet</h2>
            <form className="form-send-tweet__form"
                onSubmit={e => sendTweet(e, formValue)}
                onChange={sendForm}
            >

                <FormControl>
                    <FormGroup>
                        <TextField
                            className="form-send-tweet__form-name"
                            type="text"
                            name="name"
                            placeholder="Nombre de usuario"
                            margin="normal"
                        />
                    </FormGroup>

                    <FormGroup>
                        <TextField
                            className="form-send-tweet__form-textarea"
                            name="tweet"
                            multiline
                            rows="6"
                            placeholder="Escribe tu tweet..."
                            margin="normal"
                        />
                    </FormGroup>


                    <FormGroup>
                        <Button type="submit">Enviar Tweet</Button>
                    </FormGroup>
                </FormControl>

            </form>

        </div>
    )
}
