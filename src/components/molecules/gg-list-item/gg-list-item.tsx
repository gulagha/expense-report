import { Component, Host, h, State, Prop } from '@stencil/core';
import { ExpenseData } from '../../../utils/types';

@Component({
  tag: 'gg-list-item',
  styleUrl: 'gg-list-item.css',
  shadow: true,
})
export class GgListItem {
  /**
   * The expense amount
   */
  @Prop() expenseData: ExpenseData;
  /**
   * The function that is tirggered by edit button
   */
  @Prop() onEdit: (data: ExpenseData) => void;
  /**
   * The function that is tirggered by delete button
   */
  @Prop() onDelete: (expenseId: string) => void;
  @State() isExpanded: boolean = false;

  private onClickItem = () => {
    const expanded = this.isExpanded
    this.isExpanded = !expanded;
  }

  private onClickEdit = (event: Event) => {
    event.stopPropagation();
    if(Boolean(this.onEdit)) this.onEdit(this.expenseData);
  }

  private onClickDelete = (event: Event) => {
    event.stopPropagation();
    if(Boolean(this.onDelete)) this.onDelete(this.expenseData.expenseId);
  }

  render() {
    return (
      <Host class={this.isExpanded ? "expanded" : null} onClick={this.onClickItem}>
        <div class="content">
          <div class="amount">
            {this.expenseData.amount}
          </div>
          {this.isExpanded
            ? <div class="date">
              {new Date(this.expenseData.date).toDateString()}
            </div>
            : null
          }
          {this.isExpanded
            ? <div class="description">
              {this.expenseData.description}
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
