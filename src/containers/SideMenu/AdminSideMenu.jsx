import React, { Component } from 'react'
import CustomButton from '../../components/CustomButton';


class AdminSideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            urls:[
                {tabName: "Add New Student" , url: "/admin/add-student"},
                {tabName: "Add New Lecture" , url: "/admin/add-lecture"},
                {tabName: "Add New Technical Officer" , url: "/admin/add-technical-officer"},
                {tabName: "Add New Office Clerk" , url: "/admin/add-office-clerk"},
                {tabName: "Add New Laboratory" , url: "/admin/add-laboratory"},
                {tabName: "<< Dashboard" , url: "/admin/dashboard"},
                
             
            ]
         }
    }
    newStyle ={
        margin: 40,
        padding: 40,
        background: "#65d665",
        borderRadius: 20,
        height: "80%"
    };

    style1= {
        width: 250,
        height: 500,
        paddingTop: 19,
        paddingBottom: 175,
        paddingLeft: 37,
        paddingRight: 38,
        backgroundColor: "rgba(0, 135, 90, 1)",
        borderRadius: 18,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        };

    render() { 
        return ( 
            <div style={this.style1}>
                <h3 style={{color: "white"}}>Action</h3>
                <div className="btn-group-vertical" role="group" aria-label="Basic example" >
                {
                    this.state.urls.map(item=>                                       
                        
                      <CustomButton  key={item.id}  tabName ={item.tabName} isActive={this.getButtonClass(item.tabName)} url={item.url} />
                   )
                } 
       
             
            </div>
            </div>
        );
    }
    getButtonClass (tabName){
        if(tabName === this.props.currentTab){
            return true;
        }
        console.log(this.props.currentTab);
        console.log(tabName);
        return false;

    };
}
 
export default AdminSideMenu;