import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ICard } from '../../shared/model/card.model';

export interface IColumn {
    cardList: ICard[];
    columnPosition: number;
    isRight:boolean;
}

const useStyles = makeStyles ({

});

BracketColumn.propTypes = {


}

export default function BracketColumn() {
    const classes = useStyles();
    return (
        <div>

        </div>
    );

};