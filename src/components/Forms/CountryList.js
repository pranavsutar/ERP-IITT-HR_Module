import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DoneIcon from "@material-ui/icons/Done";
import Divider from "@material-ui/core/Divider";

class CountryList extends Component {
    constructor(props) {
      super(props);
      this.state = {clicked: false};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        clicked: !state.clicked
      }));
    }
  
    render() {
      const {classes} = this.props;
      const { clicked } = this.state;
  
      let listItems = myList.map((item) =>
        <>
          <ListItem className={ clicked ? classes.listItemClicked : classes.listItemNotClicked }
            onClick={this.handleClick} classes={classes.ListItem} button key={item.id}>
          
              {clicked ? 
              <ListItemIcon><DoneIcon style={{ color: 'rgb(239, 239, 239)', fontSize: '2.2rem' }}/></ListItemIcon>
             : <ListItemIcon><DoneIcon style={{ display: 'none', color: 'rgb(239, 239, 239)', fontSize: '2.2rem', backgroundColor: 'rgb(239, 239, 239)' }}/></ListItemIcon>}
  
             <ListItemText classes={{primary: classes.listItemText}} primary={item.value} />
         </ListItem>
         <Divider /> 
        </>
      );
  
      return (
        <List className={classes.list}>{listItems}</List>
        );
  }
}



const myList = [
  {id: 1, value: 'Albania'}, {id: 2, value: 'Austria'}, {id: 3, value: 'Belarus'}, {id: 4, value: 'Belgium'}, 
  {id: 5, value: 'Bosnia'}, {id: 6, value: 'Bulgaria'}, {id: 7, value: 'Croatia'}, {id: 8, value: 'Cyprus'}, 
  {id: 9, value: 'Czech'}, {id: 10, value: 'Denmark'}, {id: 11, value: 'Estonia'}, {id: 12, value: 'Finland'}, 
  {id: 13, value: 'France'}, {id: 14, value: 'Germany'}, {id: 15, value: 'Greece'}, {id: 16, value: 'Hungary'}, 
  {id: 17, value: 'Iceland'}, {id: 18, value: 'Ireland'}, {id: 19, value: 'Italy'}, {id: 20, value: 'Latvia'}, 
  {id: 21, value: 'Lithuania'}, {id: 22, value: 'Luxembourg'}, {id: 23, value: 'Macedonia'}, 
  {id: 24, value: 'Malta'}, {id: 25, value: 'Moldova'}, {id: 26, value: 'Montenegro'}, 
  {id: 27, value: 'Netherlands'}, {id: 28, value: 'Norway'}, {id: 29, value: 'Pakistan'}, 
  {id: 30, value: 'Poland'}, {id: 31, value: 'Portugal'}, {id: 32, value: 'Romania'}, {id: 33, value: 'Russia'}, 
  {id: 34, value: 'Serbia'}, {id: 35, value: 'Slovakia'}, {id: 36, value: 'Slovenia'}, 
  {id: 37, value: 'Spain'}, {id: 38, value: 'Sweden'}, {id: 39, value: 'Switzerland'}, {id: 40, value: 'Turkey'}, 
  {id: 41, value: 'Ukraine'}, {id: 42, value: 'Others'}
];

export default CountryList;