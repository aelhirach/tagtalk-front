import React from "react";
import { withRouter } from "react-router-dom";
import { images } from "../../config/images";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import { HeaderStyle, Wrapper, Logo, Nav, MenuList, MenuItem, ItemLink } from "./Header.styles";

const NavData = [
  {
    link: "/",
    name: "Groups"
  },
  {
    link: "/about",
    name: "How to learn"
  },
  {
    link: "/",
    name: "FAQ"
  },
  {
    link: "/",
    name: "CONTACT"
  },
]

const Header = (props) => {
  return (
    <HeaderStyle>
      <div className="container">
        <Wrapper>
          <Logo>
            <Link href="/">
              <img style={{ height: 50 , width: 50 }}
                   src={images.logo} alt="logo" />
            </Link>
          </Logo>
          <Nav>
            <MenuList>
              {NavData.map((item, i) => {
                return (
                  <MenuItem key={i}>
                    <ItemLink onClick={() => props.history.push(item.link)}>
                      {item.name}
                    </ItemLink>
                  </MenuItem>
                )
              })}
            </MenuList>
            <Button>
              Connect
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button>
              Sign in
            </Button>
          </Nav>
        </Wrapper>
      </div>
    </HeaderStyle >
  );
};

export default withRouter(Header);