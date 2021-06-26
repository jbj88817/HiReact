import React from "react";
import {Layout} from "antd";
import './App.less';
import DrawerMenu from "./component/DrawerMenu";
import {Route, Switch} from "react-router-dom";
import Home from './page/Index'
import User from './page/user/Index'
import AddCategory from './page/category/add/Index'
import Category from './page/category/Index'
import ConfigList from './page/config/Index'
import ConfigAdd from './page/config/add/Index'

const {Content, Footer} = Layout;

function App() {
    return (
        <Layout className='App'>
            <DrawerMenu/>
            <Layout>
                <Content className='App-content'>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/category" component={Category}/>
                        <Route path="/category-add" component={AddCategory}/>
                        <Route path="/user" component={User}/>
                        <Route path="/config" component={ConfigList}/>
                        <Route path="/config-add" component={ConfigAdd}/>
                    </Switch>
                </Content>
                <Footer className='App-footer'>管理后台 ©2021 Created by
                    <a href='https://bojie.us'> Bojie Jiang</a>
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App;
