import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
// import * as actionType from "../store/actionType"
import {sumulateHttpRequest} from '../store/actionCreators'

let mapStateToProps = state => {
  return {
    article: state.article,
  }
}

// let mapDispatchToProps = dispatch =>{
//   return{
//     saveInfo:article=>
//       dispatch({ type:actionType.ADD_INFOS,articleData:{article}})
//   }
// }
let mapDispatchToProps = dispatch =>{
  return{
    saveArticle:article => dispatch(sumulateHttpRequest(article))
  }
}
// let double = (fn)=>{
//   let timer = null
//   return function(){
//       clearTimeout(timer)
//       timer = setTimeout(()=>{
//           fn.apply(this,arguments)
//       },500)
//   }
// }
class About extends React.Component{
  state={
    count:1
  }
  handleClick = ()=>{
    console.log(111)
    // console.log(this)
    let count = this.state.count 
    count ++
    this.setState({
      count:count
    })
    this.props.saveArticle({id:this.state.count,title:'post 3',body:'1122333'})
  }
  double = (fn)=>{
    // console.log(fn)
    let timer = null
    return function(){
      
        clearTimeout(timer)
        // console.log(timer)
        timer = setTimeout(()=>{
          console.log(this)
            fn.apply(this,arguments)
        },500)
    }
  }
  throttle =(fn) =>{
    let canRun = true; // 通过闭包保存一个标记
    return function () {
      if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
      canRun = false; // 立即设置为false
      setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
        fn.apply(this, arguments);
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
        canRun = true;
      }, 1000);
    };
  }
  render(){
    console.log(this)
    return(
      <div>
        <div>
          {
            this.props.article.map(item=>{
              return `${item.title}`
            })
          }
        </div>
        <span>{this.state.count}</span>
        <div>
          <Button type="primary" onClick={this.throttle(this.handleClick)}>Click</Button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About)