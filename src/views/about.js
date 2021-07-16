import React from 'react'
import {connect} from 'react-redux'

let mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}
class About extends React.Component{
  
  
  render(){
    return(
      <div>
        {
          this.props.articles.map(item=>{
            return `${item.title}`
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(About)