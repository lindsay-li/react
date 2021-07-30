import * as actionType from './actionType'

const initialState = {
  article: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
}

const reducer = (state = initialState, action) => {
  console.log('action')
  console.log(action)
  switch (action.type){
    case actionType.ADD_INFOS:
      const newArticle = {
        id:action.article.id,
        title:action.article.title,
        body:action.article.body
      }
      return {
        ...state,
        article:state.article.concat(newArticle),
      }

  }
  return state
}
export default reducer