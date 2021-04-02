import styled from "styled-components";
import { rem, dblack, groldMedium, SiteTransition, primary, secondary } from "../../config/variables";
import Link from '@material-ui/core/Link';

export const HeaderStyle = styled.header`
  width: 100%;
  padding: ${rem(25)} 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  max-width: ${rem(256)};
  width: 100%;
  a{
    display: block;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  margin-right: ${rem(31)};
`;

export const MenuItem = styled.li`
  margin: 0 ${rem(21)};
  list-style: none;
`;

export const ItemLink = styled(Link)`
  font-size: ${rem(16)};
  line-height: 1.5;
  color: ${dblack};
  transition: ${SiteTransition};
  font-family: ${groldMedium};
  cursor: pointer;
  position: relative;
  display: block;

`;