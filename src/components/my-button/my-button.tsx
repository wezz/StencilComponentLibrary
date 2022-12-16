import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: false,
})
export class MyButton {

  @Prop() url: string = null;

  getAttributes() {
    let attributes = {};
    if (this.url) {
      attributes['href'] = this.url;
    }
    
    return attributes;
  }  

  render() {
    const Tag = (this.url) ? 'a' : 'button';
    return (
      <Host>
        <Tag
          {...this.getAttributes()}>
            <slot/>
        </Tag>
        
      </Host>
    );
  }
}
