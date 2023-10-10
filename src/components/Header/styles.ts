import styled from 'styled-components';

export const Header = styled.div`
  background-color:rgba(21, 24, 28, .3);
  width:100%;
  height:52px;
  position:fixed;
  z-index:2;
  backdrop-filter: blur(5px);
  top:0;
  display:flex;
  align-items:center;
  justify-content:center;
`;


export const Img = styled.img`
  height:42px;
  width:42px;
  padding:2px;
  border-radius:5px;
  cursor:pointer;
  transition:.2s;

  &:hover{
    background-color:rgba(255,255,255,.1);
  }
`;

export const HeaderContent = styled.div`
  width:99%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;
/*
--gray-0: #f8f9fa;
--gray-1: #f1f3f5;
--gray-2: #e9ecef;
--gray-3: #dee2e6;
--gray-4: #ced4da;
--gray-5: #adb5bd;
--gray-6: #868e96;
--gray-7: #495057;
--gray-8: #343a40;
--gray-9: #212529;
--gray-10: #16191d;
--gray-11: #0d0f12;
--gray-12: #030507;
*/