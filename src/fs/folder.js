class Folder {
  constructor(name){
    this.name = name;
    this.content = [];
    this.parent = null;
  }

  rename(newName){
    this.name = newName
  }

  /**
   * Removes the folder contents.
   */
  remove(){
    this.content = []
  }

  removeChild(name){
    for(let i=0; i<this.content.length; i++){
      if(this.content[i].name !== name) continue;

      this.content[i] = undefined
    }

    this.content.filter(file => file !== undefined)
  }

  findChild(name){
    return this.content.find(file => file.name === name)
  }
}