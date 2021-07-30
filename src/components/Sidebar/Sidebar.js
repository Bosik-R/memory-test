import React from 'react';
import DisplayStats from '../DisplayStats/DisplayStats';
import * as S from './Siedebar.Elements';

const Sidebar = ({ level, score}) => {
  return (
    <S.SidebarContainer>      
      <DisplayStats title='level' value={level}/>
      <DisplayStats title='score' value={score}/>
      <S.StartBtn>START</S.StartBtn>
    </S.SidebarContainer>
  )
}

export default Sidebar;
