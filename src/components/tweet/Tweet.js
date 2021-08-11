import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import  DeleteTwoTone  from '@material-ui/icons/DeleteTwoTone';
import moment from 'moment';
import './Tweet.scss';

const Tweet = ({ tweets: { name, tweet, time }, index, deleteTweet }) => {


    return (
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>{name}</h5>
                    <DeleteTwoTone onClick={() => deleteTweet(index) } />
                </div>

                <p>{tweet}</p>

                <div className="tweet__date-add-tweet">
                    {moment(time).format('DD/MM/YYYY HH:mm')}
                </div>

            </CardContent>
        </Card>
    )
}

export default Tweet;
