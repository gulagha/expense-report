import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'gg-edit-expense-modal',
  styleUrl: 'gg-edit-expense-modal.css',
  shadow: true,
})
export class GgEditExpenseModal {
  /**
   * The initial data for the expense to edit.
   * This should be provided from the parent component.
   */
  @Prop() expenseData: { amount: number; description: string; date: string };
  /**
   * Cancel button handler
   */
  @Prop() onPressCancel: () => void;
  /**
   * The function to save the edited expense.
   * This should be provided from the parent component.
   */
  @Prop() saveExpense: (data: { amount: number; description: string; date: string }) => void;

  @State() inputData: { amount: number; description: string; date: string };

  componentWillLoad() {
    this.inputData = {...this.expenseData}; // copy the data
  }

  private handleInput = (event: Event, field: string) => {
    this.inputData[field] = (event.target as HTMLInputElement).value;
  }

  private handleSubmit = (event: Event) => {
    event.preventDefault();
    if(Boolean(this.saveExpense)) this.saveExpense(this.inputData);
  }

  render() {
    return (
      <div class="modal">
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input type="number" value={this.inputData.amount} onInput={(e) => this.handleInput(e, 'amount')} />
          </label>
          <label>
            Description:
            <input type="text" value={this.inputData.description} onInput={(e) => this.handleInput(e, 'description')} />
          </label>
          <label>
            Date:
            <input type="date" value={this.inputData.date} onInput={(e) => this.handleInput(e, 'date')} />
          </label>
          <div class="buttons">
            <gg-button onClick={this.onPressCancel} secondary>C</gg-button>
            <gg-button onClick={this.handleSubmit}>S</gg-button>
          </div>
        </form>
      </div>
    );
  }
}
