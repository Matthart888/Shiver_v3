import React, { Component } from 'react';
import PostRepo from './../data/posts/PostRepo';
import CreateButton from './buttons/CreateButton';
import PostCard from './PostCard';

/**
* @author
* @function GamerThoughts
**/

class GamerThoughts extends Component {

   /**
     * @override Component.componentDidMount
     */

    componentDidMount(){
      PostRepo.getPostFromCatagory("Gamer Thoughts")
      .then(obj => {
          let arr = new Array();
          for(let item in obj) {
              arr.push(obj[item])
          }
          console.log(arr, obj)
          this.setState(arr); 
      })
  }

  render() {

    const isEmpty = this.state === undefined || this.state === null || this.state.length === 0 
    const hasContent=(!isEmpty)

    return(
      <div className="container">
          <div className="row">
            
            {!hasContent ? "no cards" : Object.keys(this.state).map(key => <PostCard NewPost={this.state[key]} key={key}/>)}
          </div>
        <div>
          <CreateButton />
        </div>
      </div>
    )
  }
}

export default GamerThoughts