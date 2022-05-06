import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {writeRequest} from '@/modules/board/write';
import {Write} from '@/components/board/Write';

const WritePage = () => {
    const [board, setBoard] = useState({
        title: '',
        name: '',
        subject: ''
    })
    const dispatch = useDispatch()
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setBoard({
            ...board,
            [name]: value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        dispatch(writeRequest(board))
    }
    return null;
};
export default WritePage;