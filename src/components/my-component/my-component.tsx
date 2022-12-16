import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: false,
})
export class MyComponent {

  @Prop() heading: string;
  @Prop() counter: number = 0;

  public increaseCounter() {
    this.counter = this.counter + 1;
    console.log('increaseCounter', this.counter);
  }

  render() {
    return (
      <div>
        <h4>{this.heading}</h4>
        <slot/>
        <p>Counter: { this.counter }</p>
        <button onClick={this.increaseCounter.bind(this)}>Increase</button>
      </div>
    );
  }
}
