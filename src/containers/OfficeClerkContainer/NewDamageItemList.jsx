import React, { Component } from "react";
import BrokenItemCard from "../../component/BrokenItemCard";
// import { Link } from "react-router-dom";
import OfficeClerkService from "../../api/office_clerk_api";

class NewDamageItemList extends Component {
  constructor(props) {
    super(props);
    this.getNewDamages = this.getNewDamages.bind(this);
    this.clickItem = this.clickItem.bind(this);
    this.clickYes = this.clickYes.bind(this);
    this.clickNo = this.clickNo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.markAsSendToRepair = this.markAsSendToRepair.bind(this);

    this.state = {
      itemList: [],
      isClick: false,
      selectDamageId: "",
    };
  }

  componentDidMount() {
    this.getNewDamages();
  }



  clickItem(id) {
    this.setState({
      isClick: true,
      selectDamageId: id,
    });
  }

  clickYes() {
    this.markAsSendToRepair(this.state.selectDamageId);
    this.refreshList();
    this.setState({
        isClick:false
    });
    window.location.reload();
   
  }

  clickNo() {
    this.setState({
      isClick: false,
    });
  }

  getNewDamages() {

    OfficeClerkService.getNewDamages()
      .then((response) => {
        console.log("response");
        console.log(response);
        this.setState({
          itemList: response.data,
          isClick:false
        });
        console.log(this.state.itemList);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.setState({
      itemList: [],
      
    });
    this.getNewDamages();
  }



  markAsSendToRepair(id) {
    OfficeClerkService.markAsSendToR(id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    if (this.state.isClick) {
      return (
        <div>
          <h3>Are you sure?</h3>
          <p>Do you want mark as <b>Send to repair</b>?</p>
          <div>
            <button
              type="button"
              className="btn btn-primary m-1"
              onClick={this.clickNo}
            >
              No
            </button>

            <button
              type="button"
              className="btn btn-warning m-1"
              onClick={this.clickYes}
            >
              Yes
            </button>
          </div>
        </div>
      );
    }
    if (this.state.itemList.length == 0) {
      return (
        <div style={this.newStyle}>
          <h3 style={{ textAlign: "center" }}>New Damage Item</h3>
          <br />
          <div>
            <h4>No New Damage Request</h4>
          </div>
        </div>
      );
    }
    return (
      <div style={this.newStyle}>
        <h3 style={{ textAlign: "center" }}>New Damage Item</h3>
        <br />
        <div>
          {this.state.itemList.map((item) => {
            // console.log("item");
            // console.log(item["Model.modelName"]);
            return (
              <div>
                <a onClick={() => this.clickItem(item.damageId)}>
                  <BrokenItemCard
                    key={item.id}
                    model={item["Model.modelName"]}
                    category={item["Category.categoryName"]}
                    storeCode={item.id}
                    issue={item.reason}
                    labName={item["Lab.labName"]}
                    openDate={item.openDate}
                    image={item.imageURL}
                  />
                </a>

                <br />
              </div>
            );
          })}
  
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

export default NewDamageItemList;
