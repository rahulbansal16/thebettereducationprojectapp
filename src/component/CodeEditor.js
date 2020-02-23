import React from 'react';
import {Button, Icon, Checkbox, Popup, Container} from 'semantic-ui-react';
import LoginLogoutModal from './LoginLogoutModal';
import axios from 'axios';
import {isLoggedIn} from '../utility/Utility';
let codemirror = require('codemirror');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/dracula.css');
require('codemirror/mode/python/python');

class CodeEditor extends  React.Component {


    constructor(props){
        super(props);
        this.state = {
            openLogin: false
        }
        this.defaultCode = '#Enter your code here';
        this.code="";
        this.currentRef = React.createRef();
        this.options = {
            lineNumbers: true,
            mode:'python',
            theme:'dracula'
        }
    }

    componentDidMount() {
        this.editor = codemirror(this.currentRef.current);
        this.editor.on('change', () => this.onCodeChange(this.editor.getValue()));
        this.updateCode(this.defaultCode);
        this.editor.setOption('lineNumbers',this.options.lineNumbers);
        this.editor.setOption('mode',this.options.mode);
        this.editor.setOption('theme',this.options.theme);
    }

    onCodeChange = (currentCode)=>{
        this.code = currentCode;
    }
    
    updateCode = (newCode)=>{
        this.editor.setValue(newCode);
        this.code = newCode;
    }

    // isLoggedIn(){
    //     var user = localStorage.getItem("user");
    //     if (user === null){
    //       return false;
    //     }
    //     return true;
    // }
    

    saveCode = () => {
//  If the user has not signed up, Ask him to signup    
        if (!isLoggedIn()){
            this.setState({openLogin:true});
        }
        else {
            axios.post('https://t865tul3o8.execute-api.ap-south-1.amazonaws.com/prod/code',{
                email:'',
                content:'',
                language:'python',
                url:''
            });
        }
    }

    handleClose = () => {
        this.setState({openLogin:false});
    }

    render(){
        return(
            <Container style={{marginTop:'10px'}}>
            <div style={{display:'flex', justifyContent:'flex-end',marginBottom:'5px', marginRight:'-3px'}}>
                <Popup  content='Share'trigger={<Button primary><Icon name="share"/></Button>} />
                <Popup content='Reset'trigger={<Button onClick = {() => this.updateCode(this.defaultCode)} secondary><Icon name="redo"/></Button>}/>
            </div>
            <div style={{ heigh:'70vh'}}ref={this.currentRef}/>
            {/* <CodeMirror value={this.state.code} onChange={this.updateCode} options={this.options}/> */}
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', marginTop:'5px', marginRight:'-3px'}}>
            < LoginLogoutModal isOpen={this.state.openLogin} handleClose = {this.handleClose}></LoginLogoutModal>
            <Checkbox label = 'Custom Input'/>
                    {/* <Label>Custom Input</Label> */}
                    <Button primary>Run</Button>
                    <Button secondary onClick={() => this.saveCode()}><Icon name="save"/>Save</Button>    
            </div>
            </Container>
        );
    }

}

export default CodeEditor;