class StringBuffer {
  constructor(){
    this.buffer = new StringBuffer();
    this.stream = new Stream();
  }

  add(data){
    if(data === "Enter"){
      return this.flush();
    } else if (data.length != 1){
      return;
    }

    this.buffer.append(data)
  }

  flush(){
    const data = this.buffer.flush();

    this.stream.in(data)

    return data
  }
}