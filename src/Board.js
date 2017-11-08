import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';

const Board = ({user}) => {
  return (
    <div className='text-center'>
      <header></header>
      <h1>{user.name}</h1>
    </div>
  );
}

export default Board;
