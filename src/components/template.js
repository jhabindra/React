import React, { Component } from 'react';
import './template.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList} from 'material-ui/GridList';


export default class Template extends Component {

    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    handleToggle = () => {
        this.setState
            ({
                open: !this.state.open

            });
            if(this.state.open){
                console.log("Body 100%");

            }
            else{
                console.log("Body ");

            }
            console.log(this.state.open);


    }

    handleClose = () => this.setState({ open: false });



    render() {
        return (
            <div className="App">
                <div className="topBar">
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={this.handleToggle}
                    />
                </div>

                <div >
                    <Drawer open={this.state.open} containerStyle={{ top: 65 }}>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>

                <div className="body">
                    <div >
                        <GridList
                            cellHeight={180}

                        >
                        <h4>Hello</h4>

                        </GridList>
                    </div>
</div>

                </div>
                );
    }
}
