import React, { Component } from 'react'
import OldBrokenItemCard from '../../component/OldBrokenItem';
import { Link } from "react-router-dom";
import OfficeClerkService from "../../api/office_clerk_api";

class OldDamageItemList extends Component {
    constructor(props) {
        super(props);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        // this.refreshList = this.refreshList.bind(this);
        // this.setActiveTutorial = this.setActiveTutorial.bind(this);
        // this.removeAllTutorials = this.removeAllTutorials.bind(this);
        // this.searchTitle = this.searchTitle.bind(this);
        this.state = {
            itemList: []
        };
    }

    componentDidMount() {
        this.retrieveTutorials();
    }

    //   onChangeSearchTitle(e) {
    //     const searchTitle = e.target.value;

    //     this.setState({
    //       searchTitle: searchTitle
    //     });
    //   }

    retrieveTutorials() {

        OfficeClerkService.getOldDamages()
            .then(response => {
                this.setState({
                    itemList: response.data
                });
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }






    render() {
        if (this.state.itemList.length == 0) {
            return (
                <div style={this.newStyle}>
                    <h3 style={{ textAlign: "center", }}>Repair History</h3>
                    <br />
                    <div>
                        <h4>No Old Damage Record</h4>
                    </div>
                </div>
            );
        }
        return (
            <div style={this.newStyle}>
                <h3 style={{ textAlign: "center", }}>Repair History</h3>
                <br />
                <div>
                    {

                        this.state.itemList.map((item) => {
                            return <div>
                                <OldBrokenItemCard                                                                    
                                    key={item.id}
                                    model={item["Model.modelName"]}
                                    category={item["Category.categoryName"]}
                                    storeCode={item.id}
                                    issue={item.reason}
                                    labName={item["Lab.labName"]}
                                    openDate={item.openDate}
                                    image={item.imageURL}
                                    closeDate={item.closeDate} 
                                />
                                <br />
                            </div>

                        }


                        )
                    }

                </div>
            </div>
        );
    }

    newStyle = {
        // margin: 40,
        padding: 30,
        background: " #bef1be",
        borderRadius: 20,
    };
}

export default OldDamageItemList;
