import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 150px;
  background-color: ${props => props.theme.colors.navBar};
  color: ${props => props.theme.colors.textOnDark};
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
  }

  z-index: 1;
  overflow: auto; /* Enable scroll if needed */
  background-color: ${props => props.theme.colors.navBar};
  color: ${props => props.theme.colors.navBarText};
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);

  //animation-fill-mode: forwards;

  &.OpenDrawer {
    -webkit-animation: SlideIn 0.4s;
    animation: SlideIn 0.4s;
  }


  &.ClosedDrawer {
    -webkit-animation: SlideOut 0.4s;
    animation: SlideOut 0.4s;
    //left: -300px;
    //background-color: red;
  }

  @-webkit-keyframes SlideIn {
    from {left:-300px; opacity:0}
    to {left:0; opacity:1}
  }

  @keyframes SlideIn {
    from {left:-300px; opacity:0}
    to {left:0; opacity:1}
  }

  @-webkit-keyframes SlideOut {
    from {left: 0; opacity:1}
    to {left:-300px; opacity:0}
  }

  @keyframes SlideOut {
    from {left: 0; opacity:1}
    to {left:-300px; opacity:0}
  }

  .SideNav-header {
    padding: 16px 16px;
    display: flex;
    align-items: stretch;
    //justify-content: start;
    height: 53px;
  }

  .SideNav-header a{
    color: ${props => props.theme.colors.navBarText};;
    text-decoration: none;
  }

  .SideNav-Header-item {
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    font-size: 17px;
    //height: fit-content;
    //background-color: #4ba3c7;
  }

  .SideNav-icon {
    position: absolute;
    left: 0;
    top: 0;
  }
`

export const SideBarItem = styled(NavLink)`
    width:100%;
    padding: 14px 16px;
    display:inline-block;
    vertical-align:middle;
    overflow:hidden;
    text-decoration:none;
    color:inherit;
    background-color:inherit;
    cursor:pointer;
    white-space:nowrap;
  
    &.active {
      background-color: ${props => props.theme.colors.active} !important;
    }

    &:hover {
      color: ${props => props.theme.colors.textOnDark} !important;
        //background-color: ${props => props.theme.colors.navBarHover} !important;
      background-color: red;
    }
`

export const SideBarFooter = styled(SideBarItem)`
  float: right;
`

export default SideBar