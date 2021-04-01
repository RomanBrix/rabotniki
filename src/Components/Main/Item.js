import React, { Component } from 'react';
import { WORK } from '../Data';

      class Item extends Component {

        render() {

          const ID = +this.props.match.params.id;

          if(ID < 1 || ID > WORK.length){
            // ERROR CATCH ADD BTN BACK
            return(
              <h1>NO MATCH!</h1>
            )
          }
          return (
            <div>
              <h1>ID is : {ID}</h1>
              <p>{WORK[ID-1].title}</p>
            </div>
          );
        }
      }

      export default  Item;
