import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ModalContainer } from '../modalContainer/ModalContainer';
import moment from 'moment';
import './SendTweet.scss';
import { FormSendTweet } from '../formSendTweet/FormSendTweet';
import { TWEETS_STORAGE } from '../../utils/Constants';


export const SendTweet = ({ setToatsProps, allTweets }) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }

    const sendTweet = (e, formValue) => {
        e.preventDefault();
        const { name, tweet } = formValue;
        let allTweetsArray = [];
        if (allTweets) {
            allTweetsArray = allTweets;
        }
        if (!name || !tweet) {
            setToatsProps({
                open: true,
                text: 'WARNING: Todos los campos son obligatorios'
            });
        } else {

            formValue.time = moment();
            allTweetsArray.push(formValue);
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));


            setToatsProps({
                open: true,
                text: 'Tweet enviado correctamente.'
            });
            closeModal();

        }

        allTweetsArray = [];
    }
    return (
        <div className="send-tweet">
            <Fab
                className="send-tweet__open-modal"
                color="primary"
                aria-label="add"
                onClick={openModal}
            >
                <AddIcon />

            </Fab>

            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweet sendTweet={sendTweet} />
            </ModalContainer>

        </div>
    )
}
