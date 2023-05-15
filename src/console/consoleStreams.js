/**
 * Declares standard streams for console.
 */
class ConsoleStreams {
  /**
   * Creates standard streams. 
   */
  constructor(){
    this.in = new Stream();
    this.out = new Stream();
    this.error = new Stream();
  }
}