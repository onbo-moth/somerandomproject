class RamDisk {
  constructor(){
    this.memory = {
      directories: [],
      files: []
    } 
  }

  addFileType(fileType){
    if(this.memory[fileType] !== undefined) return false

    this.memory[fileType] = ""

    return true
  }
}