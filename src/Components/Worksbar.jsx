import React from 'react';
import { Link } from 'react-router-dom';
import works from '../data/works';

const Worksbar = () => (
  works.map((work) => (
    <nav> 
      <Link key={work.slug} to={`/works/${work.slug}`}>{work.title}</Link>
    </nav>
  ))
);

export default Worksbar;
