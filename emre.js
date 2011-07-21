/**
 * Emre - Object selection like a boss
 *
 * Author: Troy Whiteley (@dawnerd) <troy@somanyscientists.com>
 */
 
!function(context) {
  function emre(obj, selector, value) {
    if(value !== undefined) {
      value = JSON.stringify(value);
      eval('obj.'+selector+'='+value);
      
      return obj;
    } else {
      return eval('obj.'+selector);
    }
  }

  var old = context.emre;
  emre.noConflict = function () {
    context.emre = old;
    return this;
  };

  (typeof module !== 'undefined') && module.exports ? (module.exports = emre) : (context.emre = emre);
}(this);