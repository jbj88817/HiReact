import React from "react";
import {Layout} from "antd";
import './App.less';
import DrawerMenu from "./component/DrawerMenu";

const {Content, Footer} = Layout;

function App() {
    return (
        <Layout className='App'>
            <DrawerMenu/>
            <Layout>
                <Content className='App-content'>
                    Hello
                </Content>
                <Footer className='App-footer'>管理后台 ©2021 Created by
                    <a href='https://bojie.us'> Bojie Jiang</a>
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App;
