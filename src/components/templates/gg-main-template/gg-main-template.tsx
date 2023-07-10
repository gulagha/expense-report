import { Component, Host, State, h, Prop } from '@stencil/core';
import { groupByMonth } from '../../../utils/utils';
import { ExpenseData } from '../../../utils/types';

const data = [
  {
    "expenseId": "ASFAS",
    "amount": 10.50,
    "date": 1625526000000,
    "description": "Grocery shopping at the local supermarket"
  },
  {
    "expenseId": "ASFASs",
    "amount": 25.00,
    "date": 1625612400000,
    "description": "Dinner at a cozy Italian restaurant"
  },
  {
    "expenseId": "ASFAsS",
    "amount": 10.50,
    "date": 1625526000000,
    "description": "Grocery shopping at the local supermarket"
  },
  {
    "expenseId": "ASFsdAS",
    "amount": 25.00,
    "date": 1643727600000,
    "description": "Dinner at a cozy Italian restaurant"
  },
];

@Component({
  tag: 'gg-main-template',
  styleUrl: 'gg-main-template.css',
  shadow: true,
})
export class GgMainTemplate {
  /**
   * An cction when creating a new expense
   */
  @Prop() onCreate: (expense: ExpenseData) => void
  /**
   * An action when deleting the expense
   */
  @Prop() onDelete: (expsenseID: string) => void
  /**
   * An action when editing the expense
   */
  @Prop() onEdit: (expense: ExpenseData) => void
  /**
   * Expenses data
   */
  @Prop({reflect: true}) data: ExpenseData[] = [];
  @State() isStackView: boolean = false;
  @State() isDarkMode: boolean = false;
  @State() newExpense: ExpenseData;

  private setChartView = () => {
    this.isStackView = true;
  }

  private setListView = () => {
    this.isStackView = false;
  }

  private switchDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
  }

  private createExpense = (event) => {
    event.stopPropagation()
    if(Boolean(this.onCreate) && Boolean(this.newExpense)) this.onCreate(this.newExpense);
  }

  render() {
    return (
      <Host data-theme={this.isDarkMode ? 'dark' : null}>
        <div class="navigation">
          <div class="page-setup">
            <div class={this.isStackView ? 'view' : 'view selected'} onClick={this.setListView}>
              List
            </div>
            <div class={this.isStackView ? 'view selected' : 'view'} onClick={this.setChartView}>
              Chart
            </div>
          </div>

          <div class="actions">
            <div onClick={this.createExpense} class="add-expense"> + </div>
            <gg-icon onClick={this.switchDarkMode} name={this.isDarkMode ? "light-mode-icon" : "dark-mode-icon"}/>
          </div>
        </div>
        {
          this.isStackView
            ? <gg-stacked-chart expenses={groupByMonth(data)} />
            : <gg-expenses-list onDelete={this.onDelete} onEdit={this.onEdit} expenses={data} />
        }
      </Host>
    );
  }

}
