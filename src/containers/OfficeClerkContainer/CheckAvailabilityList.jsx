import React, { Component } from 'react'
import ItemCard from '../../component/ItemCard';
import { Link } from "react-router-dom";
import OfficeClerkService from "../../api/office_clerk_api";

class CheckItemList extends Component {
    constructor(props) {
        super(props);
        this.retrieveItems = this.retrieveItems.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        // this.refreshList = this.refreshList.bind(this);
        // this.setActiveTutorial = this.setActiveTutorial.bind(this);
        // this.removeAllTutorials = this.removeAllTutorials.bind(this);
        // this.searchTitle = this.searchTitle.bind(this);
        this.state = {
            itemList: [],
            searchList: [],
            searchCat:"",
            isSearch:false
        };
    }

    componentDidMount() {
        this.retrieveItems();
    }

    retrieveItems() {
        OfficeClerkService.getAllItems()
            .then(response => {
                this.setState({
                    itemList: response.data,
                    searchList: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleSearch(event) {        
        event.preventDefault();
       
        this.setState({
            isSearch: true
        });      
        let tempList = [];
        let listLen = this.state.itemList.length
        for (let i = 0; i < listLen; i++) {
         
   
            if(this.state.itemList[i]["Category.categoryName"].toLowerCase().includes(this.state.searchCat.toLowerCase())){
                tempList.push(this.state.itemList[i]);  
            }
        }
         this.setState({
            searchList: tempList
        });   
        // event.preventDefault();
         
      }






    render() {
        if (this.state.itemList.length == 0) {
            return (
                <div style={this.newStyle}>
                    <h3 style={{ textAlign: "center", }}>Check Availability</h3>
                    <br />
                    <div>
                        <h4>No Item in Inventory</h4>
                    </div>
                </div>
            );
        }else{
            
            return (
            
                <div style={this.newStyle}>
                    <h3 style={{ textAlign: "center", }}> Availability</h3>
                    <div>
                    <form onSubmit={this.handleSearch}>                          
                      <div className="form-group m-1">
                        <label>Search By Category:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter Category"
                          required    
                          value={this.state.searchCat}
                          onChange={(event) => {
                              if(event.target.value.length == 0){
                                this.setState({
                                    isSearch: false,
                                  });
                              }
                            this.setState({
                              searchCat: event.target.value,
                            });
                          }}
                        ></input>
                      </div>                               
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </form>
                    </div>
                    <br />
                    <div>
                        
                        {this.state.isSearch? this.state.searchList.map((item) => {
                                return <div>
                                    <ItemCard                                                                    
                                        key={item.id}
                                        model={item["Model.modelName"]}
                                        category={item["Category.categoryName"]}
                                        storeCode={item.id}                                  
                                        labName={item["Lab.labName"]}
                                        availability={item.availability}
                                        image={item.imageURL}
                                        
                                    />
                                    <br />
                                </div>
    
                            })
                            :this.state.itemList.map((item) => {
                                return <div>
                                    <ItemCard                                                                    
                                        key={item.id}
                                        model={item["Model.modelName"]}
                                        category={item["Category.categoryName"]}
                                        storeCode={item.id}                                  
                                        labName={item["Lab.labName"]}
                                        availability={item.availability}
                                        image={item.imageURL}
                                        
                                    />
                                    <br />
                                </div>
    
                            })
                        }
    
                    </div>
                </div>
            );
        }
        
    }

    newStyle = {
        // margin: 40,
        padding: 30,
        background: " #bef1be",
        borderRadius: 20,
    };
}

export default CheckItemList;
