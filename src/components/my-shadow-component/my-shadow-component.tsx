import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'my-shadow-component',
  styleUrl: 'my-shadow-component.scss',
  shadow: true,
})
export class MyShadowComponent {

  @Prop() heading: string;
  @Prop() counter: number = 0;

  public increaseCounter() {
    this.counter = this.counter + 1;
    console.log('increaseCounter', this.counter);
  }

  render() {
    return (
      <Host>
        <h4>{this.heading}</h4>
        <slot/>
        <p>Counter: { this.counter }</p>
        <button onClick={this.increaseCounter.bind(this)}>Increase</button>
      </Host>
    );
  }
}
