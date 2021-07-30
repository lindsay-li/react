import * as actionType from './actionType'

export const addArticle = article =>{
  return{
    type:actionType.ADD_INFOS,
    article
  }
}
export const sumulateHttpRequest = article =>{
  return dispatch =>{
    setTimeout(()=>{
      dispatch(addArticle(article))
    },1000)
  }
}