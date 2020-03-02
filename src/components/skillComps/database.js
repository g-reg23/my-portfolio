import React, { useState } from 'react';
import {useSpring, animated as a} from 'react-spring';
import MongoSvg from '../svg/mongoSvg';
import MysqlSvg from '../svg/mysqlSvg';

const Database = () => {
  const [dataIndex, setDB] = useState(0);
  const database = ['Click an icon to read about that skill. To change skill type, click a different header above.',
  'MySql is a relational database management system that uses the SQL query language (Structured Query Language). I am experienced in building and querying normalized, relational MySQL databases with raw SQL and SQLAlchemy ORM. I look forward to working more with SQL databases whether it be MySQL or PostgreSQL.',
  'MongoDB is a NoSQL database system which stores data in a JSON-like form. MongoDB and Mongoose ODM were the perfect choice for building YessNo.tk, my yes/no voting app. Dealing with JSON objects makes it a perfect fit for working with node and Express on the back-end, and react and javascript on the front-end. MongoDB gave me the ability to continuously develop more complex models for votes and voters throughout development based on its flexibility and ability to work well with objects.']
  return (
    <div>
      <p className='skillTypeTitle'>Database Skills</p>
      <a.div className='skillsListItem' style={{margin:'0 15%'}}>
        <button className='svgButton' onClick={() => setDB(2)}><MongoSvg /></button>
        <button className='svgButton' onClick={() => setDB(1)}><MysqlSvg /></button>
      </a.div>
      <p className='skillDesc'>{database[dataIndex]}</p>
    </div>

  );
};

export default Database;
