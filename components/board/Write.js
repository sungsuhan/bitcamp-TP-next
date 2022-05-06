import React, {useState} from 'react'
import tableStyles from '../../styles/Table.module.css'
import axios from "axios"

export default function Board({onChange, onSubmit}){
   
    return (
        <form>
        <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={2}><h2>게시판 글쓰기</h2></th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td><label>제 목</label></td>
                <td><input type="text" onChange={onChange}
                        id="title" name="title" placeholder="제목 입력"/></td>
            </tr>
            <tr>
                <td>
                    <label>작성자</label>
                </td>
                <td >
                    <input type="text" onChange={onChange}
                        id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </td>
            </tr>
            <tr >
                <td >
                    <label htmlFor="subject">내용</label>
                </td>
                <td >
                    <input type="textarea" onChange={onChange} id="subject" name="subject"  style={{height:200 + "px"}}></input>
                </td>
            </tr>
            <tr >
                <td colSpan={2}><input type="submit" onSubmit={onSubmit} value="Submit" /></td >
            </tr>
                </tbody>
            </table>
            </form>)
}