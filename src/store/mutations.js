/*
* @Author: Marte
* @Date:   2019-02-11 16:28:18
* @Last Modified by:   Marte
* @Last Modified time: 2019-02-11 16:52:28
*/
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
