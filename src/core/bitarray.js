/**
 * Creates an array of bits.
 */
class BitArray {
  /**
   * Creates an array of bits
   * 
   * @param {Number} length Amount of bits in the array.
   */
  constructor(length){
    this.length = length;
    this.bytes = Math.ceil(length / 8)

    this.table = new Uint8Array(this.bytes)
  }

  /**
   * Returns the value of the bit at the given index.
   * Returns null if index is out of bounds.
   * 
   * @param {Number} index Position of a bit.
   * @returns {(Boolean|null)} Value of the bit. If the bit is not found, returns null.
   */
  at(index){
    if(index < 0 || index > this.length){
      return null
    }

    let byte = Math.floor(index / 8)

    return getBitOfByte(this.table[byte], index % 8)
  }

  /**
   * Gets value of a bit inside the byte, given index.
   * Works only on 8-bit numbers.
   * 
   * @param {Number} byte Byte to check.
   * @param {Number} index Index of the bit.
   * @returns {Boolean} Value of bit at the given index.
   * 
   * @throws Throws an error if index is out of bounds.
   */
  static getBitOfByte(byte, index){
    if(index < 0 || index > 7){
      throw new Error(`Bit index out of bounds (got ${index})`)
    }

    let mask = (1 << index)

    return (byte & mask) != 0;
  }
}