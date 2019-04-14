import React from 'react';
import './SksFooter.css';

export const sksfooter = () => {
  const year = new Date().getFullYear();

  return (
      <div className={'sks-footer'}>
        Copyright &copy; {year} Scottish Karnataka Sangha
      </div>
  );
};