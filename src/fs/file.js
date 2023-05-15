class File {
  constructor(name, content){
    this.name = name
    this.content = content
    this.parent = null;    
  }

  rename(name){
    this.name = name
  }

  write(content){
    this.content = content
  }

  read(){
    return this.content
  }
}