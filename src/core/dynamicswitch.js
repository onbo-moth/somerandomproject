/**
 * Dynamically add and remove switch cases for modularity.
 */
class DynamicSwitch {
  constructor(){
    this.cases = new Map()
    this.defaultCase = null
  }

  /**
   * Run the dynamic switch.
   * 
   * @param {String} name Name of the case. If present, will return output of given function.
   * @param  {...any} args Arguments. Passed if either case or default exists.
   * @returns {any|undefined} The output of the function. If there's no case, nor default, `undefined` is returned.
   */
  run(name, ...args){
    let func = this.cases.get(name)

    if(func !== undefined){
      return func(args)
    } else {
      if(this.defaultCase == null) return undefined

      return this.defaultCase(args)
    }
  }

  addCase(name, func){
    this.cases.set(name, func)
  }

  removeCase(name){
    this.cases.delete(name)
  }

  setDefaultCase(func){
    this.defaultCase = func
  }

  removeDefaultCase(){
    this.defaultCase = null
  }
}