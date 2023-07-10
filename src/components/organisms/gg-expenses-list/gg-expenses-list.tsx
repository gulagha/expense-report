import { Component, Host, h, Prop } from '@stencil/core';
import { ExpenseData } from '../../../components';

@Component({
  tag: 'gg-expenses-list',
  styleUrl: 'gg-expenses-list.css',
  shadow: true,
})
export class GgExpensesList {
  /**
   * An action when deleting the expense
   */
  @Prop() onDelete: (expsenseID: string) => void
  /**
   * An action when editing the expense
   */
  @Prop() onEdit: (expense: ExpenseData) => void
  /**
   * List of expenses
   */
  @Prop({reflect: true}) expenses: ExpenseData[] = [];

  render() {
    return (
      <Host>
        {this.expenses.map((object) => (
          <gg-list-item
            onEdit={this.onEdit}
            onDelete={this.onDelete}
            expenseData={object} />
        ))}
      </Host>
    );
  }

}
