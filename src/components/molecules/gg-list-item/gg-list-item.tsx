import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'gg-list-item',
  styleUrl: 'gg-list-item.css',
  shadow: true,
})
export class GgListItem {
  /**
   * The expense amount
   */
  @Prop() amount: string;
  /**
   * The date when expense is made
   */
  @Prop() date: string;
   /**
   * Description
   */
  @Prop() description: string;
  /**
   * The function that is tirggered by edit button
   */
  @Prop() onEdit: (event: Event) => void;
  /**
   * The function that is tirggered by delete button
   */
  @Prop() onDelete: (event: Event) => void;
  @State() isExpanded: boolean = false;

  private onClickItem = (event: Event) => {
    const expanded = this.isExpanded
    this.isExpanded = !expanded;
    console.log("eee: ", event)
  }

  private onClickEdit = (event: Event) => {
    event.stopPropagation();
    if(Boolean(this.onEdit)) this.onEdit(event);
    console.log("sikim blyat edit")
  }

  private onClickDelete = (event: Event) => {
    event.stopPropagation();
    if(Boolean(this.onDelete)) this.onDelete(event);
    console.log("sikim blyat delete")
  }

  render() {
    return (
      <Host class={this.isExpanded ? "expanded" : null} onClick={this.onClickItem}>
        <div class="content">
          <div class="amount">
            {this.amount}
          </div>
          {this.isExpanded
            ? <div class="date">
              {this.date}
            </div>
            : null
          }
          {this.isExpanded
            ? <div class="description">
              {this.description}
            </div>
            : null
          }
        </div>
        <div class="buttons">
          <gg-functional-button onClick={this.onClickEdit}>
            <gg-icon name="edit-icon" />
          </gg-functional-button>
          <gg-functional-button onClick={this.onClickDelete}>
            <gg-icon name="delete-icon" />
          </gg-functional-button>
        </div>
      </Host>
    );
  }
}
