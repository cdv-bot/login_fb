import * as actions from '../constants/cartProducts';

export const cartProducts = (cart) => {
  return {
    type: actions.CART_PRODUCT,
    payload: cart
  }
};


// export const dataShow = (data) => {
//   var starCountRef = firebase.database().ref('/');
//   return (dispatch => {
//     return starCountRef.on('value', (snapshot) => {
//       const datas = snapshot.val();
//       let map = data.map(key => {
//         return { data: datas[`${key}`], id: key };
//       });
//       if (map.length !== 0) {
//         dispatch(handleDataShow(map));
//       }
//     });
//   });
// };


// export const handleDataShow = (data) => {
//   return {
//     type: firebases.DATA_SHOW,
//     payload: data
//   }
// };

