/**
 * A string buffer.
 */
class StringBuffer {
  constructor(){
    this.data = ""
  }

  /**
   * Don't mind me, its self-explainatory.
   * @param {String} data 
   */
  append(data){
    switch(data){
      case "Enter": this.data += "\n"; return;
      case "Tab": this.data += "\t"; return;
    }

    if(data.length == 1){
      this.data += data
    }
  }

  /**
   * Lalala~
   * @returns Data of the buffer before flushing.
   */
  flush(){
    const data = this.data
    this.data = ""

    return data
  }
}