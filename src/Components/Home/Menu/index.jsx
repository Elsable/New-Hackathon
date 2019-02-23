import React from 'react'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export class MenuP extends React.Component {
    state = {
      current: 'mail',
    }
  
    handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }
  
    render() {
      return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item key="Propuestas">
            Propuestas
          </Menu.Item>
          <Menu.Item key="Ciudadanos" >
            Ciudadanos
          </Menu.Item>
          <Menu.Item key="Estadisticas">
            Estadisticas
          </Menu.Item>
          <Menu.Item key="Noticias" >
            Noticias
          </Menu.Item>
          <Menu.Item key="Chat">
            Chat
          </Menu.Item>
          <Menu.Item key="Comunidad" >
            Comunidad
          </Menu.Item>
          <Menu.Item key="somos">
               Quienes somos
          </Menu.Item>
          <Menu.Item key="Eventos" >
            Eventos
          </Menu.Item>
          <Menu.Item key="Identidad">
            Identidad
          </Menu.Item>
          <Menu.Item key="Trabajo" >
            Trabajo
          </Menu.Item>
          <Menu.Item key="Comunidad">
            Comunidad
          </Menu.Item>
          <Menu.Item key="Sugerencias" >
            Sugerencias

          </Menu.Item>
          <Menu.Item key="Denuncia">
            Denuncia ciudadana

          </Menu.Item>

          <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
          </Menu.Item>
        </Menu>
      );
    }
  }