import {Button} from "antd";
import './App.less';

function App() {
    return (
        <div className="App">
            <Button type="primary">123</Button>
            <Button type="primary" loading>
                Loading
            </Button>
        </div>
    );
}

export default App;
