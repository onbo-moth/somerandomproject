/**
 * Takes data and sends out to registered callbacks
 */
class Stream {
  constructor(){
    this.callbacks = []
  }

  /**
   * Sends out data to callbacks.
   * 
   * @param data Data to send out. 
   */
  in(data){
    for(const callback of this.callbacks){
      callback(data)
    }
  }

  /**
   * Registers a new callback.
   * 
   * @param {Function} callback Callback which will be called when data is sent.
   */
  out(callback){
    this.callbacks.push(callback)
  }

  /**
   * Removes the callback if its registered.
   * 
   * @param {Function} callback Callback to remove.
   */
  removeOut(callback){
    let index = this.callbacks.indexOf(callback)

    if(index != -1){
      this.callbacks.splice(index, 1)
    }
  }
}