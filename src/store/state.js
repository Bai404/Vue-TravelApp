/*
* @Author: Marte
* @Date:   2019-02-11 16:26:42
* @Last Modified by:   Marte
* @Last Modified time: 2019-02-11 16:52:36
*/

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
